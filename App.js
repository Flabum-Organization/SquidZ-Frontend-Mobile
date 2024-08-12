import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AuthenticationPage from './src/authentication/pages/AuthenticationPage';

function App() {
  return (
    <View style={styles.app}>
      <AuthenticationPage />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center', 
    alignItems: 'center',   
  },
});

export default App;