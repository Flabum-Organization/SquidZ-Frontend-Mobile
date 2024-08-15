import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PasswordUpdatePage } from './src/dataUpdate/pages/PasswordUpdatePage/PasswordUpdatePage';
import PasswordUpdateComponent from './src/dataUpdate/components/PasswordUpdate/PasswordUpdate.component';

export default function App() {
  return (
    <View style={styles.container}>
      <PasswordUpdateComponent></PasswordUpdateComponent>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
