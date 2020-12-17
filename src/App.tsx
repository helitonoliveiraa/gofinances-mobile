import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components';

import Routes from './routes';

import {styleTheme} from './styles/theme';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={styleTheme}>
        <Routes />
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
