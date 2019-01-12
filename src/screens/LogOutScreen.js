import React, { Component } from 'react'
import { StyleSheet, Text, View, Button, AsyncStorage } from 'react-native'

export default class LogOutScreen extends Component {
  
    signOut =async()=>{
        AsyncStorage.clear()
        this.props.navigation.navigate('AuthLoading')
    }
  
  
    render() {
    return (
      <View style={styles.container}>
         

        <Button title ="Log Out" onPress={this.signOut} />
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