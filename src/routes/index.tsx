import React from 'react';
import {Image, Text, StyleSheet} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Feather';
import {lighten} from 'polished';
import {format} from 'date-fns';
import {ptBR} from 'date-fns/locale';

import logo from '../assets/logo.png';

import Dashboard from '../pages/Dashboard';
import Import from '../pages/Import';

import {styleTheme} from '../styles/theme';

const day = new Date().getDate();
const month = format(new Date(), 'MMM', {locale: ptBR});

const Drawer = createDrawerNavigator();

const Routes: React.FC = () => {
  return (
    <Drawer.Navigator
      drawerStyle={{
        backgroundColor: styleTheme.colors.shapeMain,
        width: '50%',
        height: 120,
        marginTop: 60,
        borderRadius: 5,
      }}
      drawerContentOptions={{
        activeTintColor: styleTheme.colors.shapeMain,
        inactiveTintColor: styleTheme.colors.text,
        activeBackgroundColor: styleTheme.colors.orange,
      }}
      screenOptions={{
        headerShown: true,
        headerTintColor: styleTheme.colors.orange,
        headerTitle: () => <Image source={logo} />,
        headerStyle: {
          backgroundColor: styleTheme.colors.green,
          elevation: 0,
        },
        headerRight: () => (
          <Text style={styles.data}>{`${day} de ${month}`}</Text>
        ),
      }}>
      <Drawer.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          drawerIcon: () => (
            <Icon name="list" size={20} color={styleTheme.colors.text} />
          ),
          title: 'Listagem',
        }}
      />

      <Drawer.Screen
        name="Import"
        component={Import}
        options={{
          drawerIcon: () => (
            <Icon name="dollar-sign" size={20} color={styleTheme.colors.text} />
          ),
          title: 'Cadastrar',
        }}
      />
    </Drawer.Navigator>
  );
};

export default Routes;

const styles = StyleSheet.create({
  data: {
    color: lighten(0.22, styleTheme.colors.text),
    marginRight: 20,
  },

  drawerTabIcon: {
    width: 24,
    height: 24,
  },
});
