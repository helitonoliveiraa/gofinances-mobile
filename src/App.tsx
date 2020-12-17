import 'react-native-gesture-handler';

import React from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components';

import Routes from './routes';

import {styleTheme} from './styles/theme';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={styleTheme}>
        <StatusBar barStyle="light-content" backgroundColor="#5636D3" />
        <View style={styles.background}>
          <Routes />
        </View>
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#F0F2F5',
  },
});
