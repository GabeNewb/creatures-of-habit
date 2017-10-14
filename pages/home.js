import React, {Component} from 'react';
import { View,Text,StyleSheet } from 'react-native';

export default class home extends Component{
render() {
    const styles = StyleSheet.create({
      creatureStats: {
        width: 375, height: 600, top: 350, backgroundColor: 'blue'
      },
    });
    return (
      <View style={styles.creatureStats} />
    );
  };
}