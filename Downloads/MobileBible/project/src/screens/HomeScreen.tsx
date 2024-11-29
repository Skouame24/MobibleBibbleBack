import React from 'react';
import { ScrollView, View, StyleSheet, RefreshControl } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Header from '../components/header';
import DailyVerse from '../components/DailyVerse';
import ReadingPlansList from '../components/ReadingPlansList';
import RecommendedBook from '../components/RecommendedBook';

const HomeScreen = () => {
  const [refreshing, setRefreshing] = React.useState(false);
  const insets = useSafeAreaInsets();

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000);
  }, []);

  return (
    <View style={styles.container}>
      <Header title="FOIConnectée" />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={[
          styles.scrollContent,
          { paddingBottom: insets.bottom + 80 }
        ]}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.content}>
          <DailyVerse />
          <ReadingPlansList />
          <View style={styles.section}>
            <RecommendedBook />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    paddingTop: 16,
  },
  section: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
});

export default HomeScreen;