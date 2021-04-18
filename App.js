import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
var MapStyles=require('./MapStyles.json');


export default class App extends React.Component {

  render() { 
    return (
      <View style={styles.container}>

            <MapView style={styles.mapStyle}
                  showCompass={true}
                  customMapStyle={MapStyles}
                  region={{
                             latitude:38.616639,
                             longitude:-109.619835,
                             latitudeDelta:.3,
                             longitudeDelta:.3
                           }}
            />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
