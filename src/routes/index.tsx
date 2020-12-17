import React from 'react';
import {Image, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import logo from '../assets/logo.png';

import Dashboard from '../pages/Dashboard';
import Import from '../pages/Import';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerTitle: () => <Image source={logo} />,
        headerStyle: {
          backgroundColor: '#5636D3',
        },
        headerRight: () => <Text style={styles.data}>18 de dez</Text>,
      }}>
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Import" component={Import} />
    </Stack.Navigator>
  );
};

export default Routes;

const styles = StyleSheet.create({
  data: {
    color: '#969CB2',
    marginRight: 20,
  },
});
