import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import AccountDetailsComponent from '../AccountDetails/AccountDetails.component';

const Tab = createBottomTabNavigator();

export default function TabNavigationComponent() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Inicio':
              iconName = 'home';
              break;
            case 'Productos':
              iconName = 'pricetag';
              break;
            case 'Reserva':
              iconName = 'calendar';
              break;
            case 'Menú':
              iconName = 'menu';
              break;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#6B9AC4',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Inicio" component={AccountDetailsComponent} />
      <Tab.Screen name="Productos" component={AccountDetailsComponent} />
      <Tab.Screen name="Reserva" component{...AccountDetailsComponent} />
      <Tab.Screen name="Menú" component={AccountDetailsComponent} />
    </Tab.Navigator>
  );
}