import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AccountDetailsComponent from './src/dataUpdate/components/AccountDetails/AccountDetails.component';
import AccountDetailsUpdateComponent from './src/dataUpdate/components/AccountDetailsUpdate/AccountDetailsUpdate.component';
import TabNavigationComponent from './src/dataUpdate/components/LayoutsComponents/TabNavigation.component';

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='AccountDetails'>
          <Stack.Screen 
            name='AccountDetails' 
            component={AccountDetailsComponent}
            options={{title: 'Detalles de la cuenta'}} />
          <Stack.Screen 
            name='AccountDetailsUpdate'
            component={AccountDetailsUpdateComponent}
            options={{title: 'Actualizar detalles de la cuenta'}} />
        </Stack.Navigator>
        <TabNavigationComponent />
      </NavigationContainer>
      <StatusBar style='auto' />
    </SafeAreaProvider>
  );
}
