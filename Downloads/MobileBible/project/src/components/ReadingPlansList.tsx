import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ReadingPlanCard = ({ title, progress, days, current }) => (
  <TouchableOpacity style={styles.card}>
    <View style={styles.cardHeader}>
      <View style={styles.iconContainer}>
        <Ionicons name="book-outline" size={24} color="#000" />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.subtitle}>Jour {current} sur {days}</Text>
      </View>
    </View>
    
    <View style={styles.progressContainer}>
      <View style={styles.progressBar}>
        <View style={[styles.progress, { width: `${progress}%` }]} />
      </View>
      <View style={styles.progressInfo}>
        <Text style={styles.progressText}>{progress}% complété</Text>
        <TouchableOpacity style={styles.continueButton}>
          <Text style={styles.continueText}>Continuer</Text>
          <Ionicons name="arrow-forward" size={16} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  </TouchableOpacity>
);

const ReadingPlansList = () => {
  const plans = [
    { id: 1, title: 'Les Psaumes en 30 jours', progress: 45, days: 30, current: 15 },
    { id: 2, title: 'Nouveau Testament', progress: 30, days: 90, current: 27 },
    { id: 3, title: 'Proverbes', progress: 60, days: 31, current: 19 },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Plans de lecture</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>Tout voir</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {plans.map(plan => (
          <ReadingPlanCard key={plan.id} {...plan} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  viewAll: {
    fontSize: 14,
    color: '#666',
  },
  scrollContent: {
    paddingHorizontal: 12,
  },
  card: {
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  titleContainer: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
  },
  progressContainer: {
    gap: 8,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progress: {
    height: '100%',
    backgroundColor: '#000',
  },
  progressInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  progressText: {
    fontSize: 14,
    color: '#666',
  },
  continueButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
  continueText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
  },
});

export default ReadingPlansList;