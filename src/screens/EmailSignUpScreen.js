import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import React, { Component } from 'react'
import {View,Text} from 'react-native'
import { responsiveHeight, responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';


import CustomButton from '../components/CustomButton'



export default class EmailSignUpScreen extends Component {

    constructor(props){
        super(props);
        this.state={
            name:'',
            email:'',
            password:'',
            reenterpassword:'',
            phonenumber:''
        }
    }
  render() {
    return (
    <View style={{flex:1}}>
            <FormLabel labelStyle={{ fontSize: responsiveFontSize(2.5) }}>Name</FormLabel>
            <FormInput inputStyle={{color:'black'}} containerStyle={{backgroundColor:'#D3D3D3'}} onChangeText={(text) => this.setState({name:text})} />
            
            <FormLabel labelStyle={{ fontSize: responsiveFontSize(2.5) }}>Email</FormLabel>
            <FormInput inputStyle={{ color: 'black' }} containerStyle={{ backgroundColor: '#D3D3D3' }} onChangeText={(text) => this.setState({ email: text })} />

            <FormLabel labelStyle={{ fontSize: responsiveFontSize(2.5) }}>Password</FormLabel>
            <FormInput inputStyle={{ color: 'black' }} containerStyle={{ backgroundColor: '#D3D3D3' }} onChangeText={(text) => this.setState({ password: text })} />

            <FormLabel labelStyle={{ fontSize: responsiveFontSize(2.5) }}>Re-enter password</FormLabel>
            <FormInput inputStyle={{ color: 'black' }} containerStyle={{ backgroundColor: '#D3D3D3' }} onChangeText={(text) => this.setState({ reenterpassword: text })} />

            <FormLabel labelStyle={{ fontSize: responsiveFontSize(2.5) }}>Phone Number</FormLabel>
            <FormInput inputStyle={{ color: 'black' }} containerStyle={{ backgroundColor: '#D3D3D3' }} onChangeText={(text) => this.setState({ phonenumber: text })} />

            <View style={{margin:responsiveWidth(5),justifyContent:'center',alignItems:'center'}}>
                <CustomButton height={responsiveHeight(10)} width={responsiveWidth(72)} title="Sign up" />
            </View>
    </View>
    )
  }
}
