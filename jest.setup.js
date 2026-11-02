/* global jest */

// SafeAreaProvider renders nothing until native insets are measured, which never happens in Jest.
jest.mock(
  'react-native-safe-area-context',
  () => require('react-native-safe-area-context/jest/mock').default,
);

// Animatable's looping animations keep updating state between assertions, which floods the
// output with act() warnings. Render the plain components instead.
jest.mock('react-native-animatable', () => {
  const { Text, View } = require('react-native');
  return { Text, View };
});
