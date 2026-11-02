import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { styled, ThemeProvider } from 'styled-components/native';
import { ColorProps, color } from 'styled-system';

import pkg from '../package.json';
import { Heading } from './components';
import { Calculator } from './containers';

const theme = {
  colors: {
    text: '#000',
    backgroundColor: '#fff',
    success: '#0f0',
    error: '#f00',
  },
};

const AppContainer = styled.View<ColorProps>`
  ${color};
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme.colors}>
        <StatusBar style="light" />
        <LinearGradient colors={['#3396FC', '#004286']} style={{ flex: 1 }}>
          {/* The gradient fills the screen edge to edge; the content stays clear of the
              status bar, notch and navigation / home-indicator areas. */}
          <SafeAreaView
            style={{
              flex: 1,
              padding: 15,
              alignItems: 'center',
              width: '100%',
            }}>
            <AppContainer>
              <Heading />
              <Calculator />
            </AppContainer>
            <Text>v{pkg.version}</Text>
          </SafeAreaView>
        </LinearGradient>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
