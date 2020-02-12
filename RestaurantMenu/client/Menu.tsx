import * as React from 'react';
import {Alert, Text, SafeAreaView, StyleSheet, View} from 'react-native';
import {config} from 'RestaurantMenu-config';
import * as Nars from 'nars-client';

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

const {Menu: RemoteMenuComponent} = Nars.createRemoteComponentWithUrl(
  'ws://localhost:9000',
  config,
);

export const Menu = () => (
  <SafeAreaView>
    <View style={styles.headerContainer}>
      <Text style={styles.header}>{'Menu'}</Text>
    </View>
    <RemoteMenuComponent
      onMenuItemSelected={(_, title) => {
        Alert.alert(`Tapped "${title}"`);
      }}
    />
  </SafeAreaView>
);
