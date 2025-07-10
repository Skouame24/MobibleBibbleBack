import React, { useState, useEffect, useRef } from 'react';
import { 
  Platform, 
  Text, 
  View, 
  StyleSheet, 
  FlatList, 
  TouchableOpacity, 
  ActivityIndicator 
} from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import * as Device from 'expo-device';
import * as Location from 'expo-location';
import * as Haptics from 'expo-haptics'; // Retour tactile
import polyline from '@mapbox/polyline';

type Coordinate = {
  latitude: number;
  longitude: number;
};

type Precollector = {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  type: string; // Ajout du type
};

const precollectors: Precollector[] = [
  { id: '1', name: 'Précollecteur A', latitude: 5.3457, longitude: -4.0244, type: 'poubelle' },
  { id: '2', name: 'Précollecteur B', latitude: 5.3524, longitude: -4.0333, type: 'centre_tri' },
  { id: '3', name: 'Précollecteur C', latitude: 5.3097, longitude: -4.0144, type: 'dechetterie' },
  { id: '4', name: 'Précollecteur D', latitude: 5.3194, longitude: -4.028, type: 'poubelle' },
  { id: '5', name: 'Précollecteur E', latitude: 5.3267, longitude: -4.0315, type: 'centre_tri' },
];

export default function Explore() {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [nearestCollectors, setNearestCollectors] = useState<
    (Precollector & { distance: number })[]
  >([]);
  const [selectedCollector, setSelectedCollector] = useState<Precollector | null>(null);
  const [routeCoordinates, setRouteCoordinates] = useState<Coordinate[]>([]);
  const [userMarker, setUserMarker] = useState<Coordinate | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isRouteVisible, setIsRouteVisible] = useState<boolean>(false);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const mapRef = useRef<MapView | null>(null);

  const calculateDistance = (
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
  ): number => {
    const R = 6371; 
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    return R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
  };

  const decodePolyline = (encoded: string): Coordinate[] => {
    return polyline.decode(encoded).map(([latitude, longitude]: [number, number]) => ({
      latitude,
      longitude,
    }));
  };

  const fetchRoute = async (
    userLat: number,
    userLon: number,
    collectorLat: number,
    collectorLon: number
  ): Promise<void> => {
    //const apiKey = 'Votre_API_Key'; 
    const apiKey = 'AIzaSyAtcBAF38xZYgCW3fjdASgFWVftQJ2mrgw'; // Remplacez par votre clé API Google Maps
    const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${userLat},${userLon}&destination=${collectorLat},${collectorLon}&key=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.routes && data.routes.length > 0) {
        const points = decodePolyline(data.routes[0].overview_polyline.points);
        setRouteCoordinates(points);
        setIsRouteVisible(true);

        mapRef.current?.fitToCoordinates(points, {
          edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
          animated: true,
        });
      }
    } catch {
      setErrorMsg("Erreur lors de la récupération de l'itinéraire");
    }
  };

  const handleSelectCollector = (collector: Precollector) => {
    setSelectedCollector(collector);
    Haptics.selectionAsync();
    if (location) {
      fetchRoute(
        location.coords.latitude,
        location.coords.longitude,
        collector.latitude,
        collector.longitude
      );
    }
  };

  useEffect(() => {
    const getLocation = async () => {
      try {
        if (Platform.OS === 'android' && !Device.isDevice) {
          setErrorMsg(
            "Cela ne fonctionne pas dans un émulateur Android, utilisez un appareil physique !"
          );
          return;
        }

        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg("Permission d'accès à la localisation refusée");
          return;
        }

        const locationSubscription = await Location.watchPositionAsync(
          {
            accuracy: Location.Accuracy.High,
            timeInterval: 2000,
            distanceInterval: 5,
          },
          (newLocation) => {
            setLocation(newLocation);
            setUserMarker({
              latitude: newLocation.coords.latitude,
              longitude: newLocation.coords.longitude,
            });

            const distances = precollectors.map((collector) => {
              const distance = calculateDistance(
                newLocation.coords.latitude,
                newLocation.coords.longitude,
                collector.latitude,
                collector.longitude
              );
              return { ...collector, distance };
            });

            const sortedCollectors = distances.sort((a, b) => a.distance - b.distance);
            setNearestCollectors(sortedCollectors.slice(0, 5));
            setIsLoading(false);
          }
        );

        return () => {
          locationSubscription.remove();
        };
      } catch {
        setErrorMsg("Erreur lors de la récupération de la localisation");
      }
    };

    getLocation();
  }, []);

  const filteredCollectors = selectedType
    ? nearestCollectors.filter((collector) => collector.type === selectedType)
    : nearestCollectors;

  if (errorMsg) {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>{errorMsg}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#4CAF50" />
      ) : (
        <>
          <MapView
            ref={mapRef}
            style={styles.map}
            initialRegion={{
              latitude: location?.coords.latitude || 0,
              longitude: location?.coords.longitude || 0,
              latitudeDelta: 0.05,
              longitudeDelta: 0.05,
            }}
            showsUserLocation={true}
          >
            {filteredCollectors.map((collector) => (
              <Marker
                key={collector.id}
                coordinate={{
                  latitude: collector.latitude,
                  longitude: collector.longitude,
                }}
                pinColor="red"
                title={collector.name}
                onPress={() => handleSelectCollector(collector)}
              />
            ))}

            {userMarker && (
              <Marker
                coordinate={userMarker}
                pinColor="blue"
                title="Votre position"
              />
            )}

            {isRouteVisible && routeCoordinates.length > 0 && (
              <Polyline
                coordinates={routeCoordinates}
                strokeColor="blue"
                strokeWidth={5}
                lineDashPattern={[10, 10]}
              />
            )}
          </MapView>

          <View style={styles.filters}>
            {['poubelle', 'centre_tri', 'dechetterie', 'tous'].map((type) => (
              <TouchableOpacity 
                key={type} 
                onPress={() => setSelectedType(type === 'tous' ? null : type)} 
                style={[
                  styles.filterButton, 
                  selectedType === type && styles.activeFilterButton
                ]}
              >
                <Text style={styles.filterText}>{type === 'tous' ? 'Tous' : type}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <FlatList
            data={filteredCollectors}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleSelectCollector(item)}>
                <View style={styles.listItem}>
                  <Text style={styles.listItemText}>{item.name}</Text>
                  <Text style={styles.listItemText}>
                    Distance : {item.distance.toFixed(2)} km
                  </Text>
                </View>
              </TouchableOpacity>
            )}
            style={styles.list}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F9',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '60%',
    borderRadius: 20,
    overflow: 'hidden',
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
    color: '#333',
    margin: 20,
  },
  list: {
    width: '100%',
    paddingHorizontal: 10,
    paddingTop: 10,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  listItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  listItemText: {
    fontSize: 16,
    color: '#333',
  },
  filters: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#FFF',
  },
  filterButton: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#EEE',
  },
  activeFilterButton: {
    backgroundColor: '#4CAF50',
  },
  filterText: {
    fontSize: 14,
    color: '#333',
  },
});
