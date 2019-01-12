import React, { Component } from 'react'
import { StyleSheet, Text, View, ActivityIndicator, AsyncStorage } from 'react-native'

export default class AuthLoadingScreen extends Component {

    constructor(){
        super()
        this.loadApp()
    }


    loadApp = async () => {
        const userToken = await AsyncStorage.getItem('userToken')

        this.props.navigation.navigate(userToken ? 'App' : 'Auth')
    }


 
  render() {
    return (
        <View style={styles.container}>
                <ActivityIndicator />
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