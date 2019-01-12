// import React, { Component } from 'react'
// import { StyleSheet, TextInput, View, Button, AsyncStorage } from 'react-native'

// export default class LoginScreen extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { text: 'User ID' };
//   }
//   static navigationOptions= {
//     header: null
//   }
  
//   logIn = async() =>{
//       await AsyncStorage.setItem('userToken', 'username')
 
//       this.props.navigation.navigate('App')
//   }
//     render() {
//     return (
//       <View style={styles.container}>
//         <TextInput
//         style={{height: 40, width: 100, borderWidtherColor: 'gray', borderWidth: 1}}
//         onChangeText={(text) => this.setState({text})}
//         value={this.state.text}
//       />
//         <Button title= "Login Now"
//             onPress={this.logIn} />
//       </View>
//     )
//   }
// }


// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//       backgroundColor: '#F5FCFF',
//     },
   
//   });

import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { responsiveHeight, responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';


import CustomButton from '../components/CustomButton'



export default class EmailSignUpScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
  }
  render() {
    return (
      <View style={{ flex: 1 ,justifyContent:'center',alignItems:'center'}}>
        
        <FormLabel labelStyle={{ fontSize: responsiveFontSize(2.5) }}>Email</FormLabel>
        <FormInput inputStyle={{ color: 'black' }} containerStyle={{ backgroundColor: '#D3D3D3' }} onChangeText={(text) => this.setState({ email: text })} />

        <FormLabel labelStyle={{ fontSize: responsiveFontSize(2.5) }}>Password</FormLabel>
        <FormInput inputStyle={{ color: 'black' }} containerStyle={{ backgroundColor: '#D3D3D3' }} onChangeText={(text) => this.setState({ password: text })} />


        <View style={{ margin: responsiveWidth(5), justifyContent: 'center', alignItems: 'center' }}>
          <CustomButton height={responsiveHeight(10)} width={responsiveWidth(72)} title="Log In" />
        </View>
      </View>
    )
  }
}
