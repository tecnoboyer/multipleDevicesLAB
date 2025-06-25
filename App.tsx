import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  StatusBar,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <View style={styles.content}>
        <Text style={styles.title}>Hello Fire TV!</Text>
        <Text style={styles.subtitle}>Your app is running successfully</Text>
        <Text style={styles.status}>✅ Connected to Fire TV</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 48,
    color: '#ffffff',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 24,
    color: '#cccccc',
    marginBottom: 20,
    textAlign: 'center',
  },
  status: {
    fontSize: 20,
    color: '#00ff00',
    textAlign: 'center',
  },
});