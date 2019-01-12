import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class SettingScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Settings  </Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
   
  });