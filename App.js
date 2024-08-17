import { View, StyleSheet, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SignIn } from './src/authentication/components/signin/SignIn.component'
import { SafeAreaProvider } from 'react-native-safe-area-context';
export default function App() {
  return (
    <SafeAreaProvider>
      <View style = {styles.container}>
        <StatusBar style ={"light"}/>
        <SignIn />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    justifyContent: 'center', 
   
  },
});
