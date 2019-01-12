import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'



export default class FriendScreen extends Component {

  navigationsopt

 
  render() {
    return (
      <View style={styles.container}>
        <Text> Friends List </Text>
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