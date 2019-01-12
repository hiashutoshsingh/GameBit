import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default class ProfileScreen extends Component {

  eventCreatePage =() => {
    this.props.navigation.navigate('EventCreate')
  }


  render() {
    return (
      <View style={styles.container}>
       
        <Button title="Event" onPress={this.eventCreatePage} />
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