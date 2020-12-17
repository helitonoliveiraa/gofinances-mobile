import React from 'react';
import {View, Text} from 'react-native';
import {ThemeProvider} from 'styled-components';

import {styleTheme} from './styles/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={styleTheme}>
      <View>
        <Text>GoFinances</Text>
      </View>
    </ThemeProvider>
  );
};

export default App;
