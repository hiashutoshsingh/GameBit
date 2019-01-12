import React, { Component } from 'react'
import {Text,View,StyleSheet,TouchableOpacity} from 'react-native'
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import CustomButton from '../components/CustomButton'

export default class SignUpScreen extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <View style={styles.HeaderTextViewStyle}>
        <Text style={styles.HeaderTextStyle}>GameBit</Text>
        </View>

        <View style={styles.TextViewStyle}>
        <Text style={styles.TextStyle}>Sign Up</Text>
        </View>

        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
        <CustomButton height={responsiveHeight(10)} width={responsiveWidth(30)} title="Google"/>
        <CustomButton height={responsiveHeight(10)} width={responsiveWidth(30)} title="Facebook" />
        </View>

        <View style={styles.TextViewStyle}>
            <Text style={styles.TextStyle}>or Sign up with</Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <CustomButton height={responsiveHeight(10)} width={responsiveWidth(72)} title="Email" />
        </View>

        <View style={styles.TextViewStyle}>
            <Text style={styles.TextStyle}>Already onboard ?</Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <CustomButton height={responsiveHeight(10)} width={responsiveWidth(72)} title="Login" />
        </View>
      </View>
    )
  }
}

const styles=StyleSheet.create({

    HeaderTextViewStyle:{
        height:responsiveHeight(15),
        backgroundColor:'lightskyblue'
    },
    HeaderTextStyle: {
        textAlign:'center',
        fontSize:responsiveFontSize(5),
        color:'black'
    },

    TextViewStyle: { 
        height: responsiveHeight(5),
        padding:responsiveWidth(10)
    },
    TextStyle:{
        textAlign:'left',
        color:'black',
        fontSize:responsiveFontSize(2.5)
    }
})
