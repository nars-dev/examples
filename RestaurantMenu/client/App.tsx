/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import * as React from 'react';
import {
  Alert,
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';
import {config} from 'RestaurantMenu-config';
import * as Nars from 'nars-client';

declare var global: {HermesInternal: null | {}};

const styles = StyleSheet.create({
  headerContainer: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const {Menu} = Nars.createRemoteComponentWithUrl('ws://localhost:9000', config);

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>{'Menu'}</Text>
        </View>
        <Menu
          onMenuItemSelected={(_, title) => {
            Alert.alert(`Tapped "${title}"`);
          }}
        />
      </SafeAreaView>
    </>
  );
};

export default App;
