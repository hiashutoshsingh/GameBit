import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default class NewScreen extends Component {

  static navigationOptions= {
    header: null
  }
  render() {
    return (
      <View style={styles.container}>
        <Text> New Feeds </Text>
        
        <Button title= "Get Started"
            onPress={() => this.props.navigation.navigate('Analytics')} />
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