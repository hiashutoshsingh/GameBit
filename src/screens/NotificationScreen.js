import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class NotificationScreen extends Component {
  static navigationOptions = {
    title: 'Notification',
  };


  render() {
    return (
      <View style={styles.container}>
        <Text> Notifications  </Text>
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