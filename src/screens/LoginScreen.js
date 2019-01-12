import React, { Component } from 'react'
import { StyleSheet, TextInput, View, Button, AsyncStorage } from 'react-native'

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'User ID' };
  }
  static navigationOptions= {
    header: null
  }
  
  logIn = async() =>{
      await AsyncStorage.setItem('userToken', 'username')
 
      this.props.navigation.navigate('App')
  }
    render() {
    return (
      <View style={styles.container}>
        <TextInput
        style={{height: 40, width: 100, borderWidtherColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
        <Button title= "Login Now"
            onPress={this.logIn} />
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