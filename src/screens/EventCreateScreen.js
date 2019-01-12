import React, { Component } from 'react'
import { AppRegistry,StyleSheet, Text, View ,ScrollView,Image} from 'react-native'
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class EventCreateScreen extends Component {
  render() {
    return (
      <ScrollView>
      <View>
      <Image source = {require('../../src/img/eventimage.jpg')}
        style = {{width:responsiveWidth(100),height:responsiveHeight(30),justifyContent:'center',alignItems:'center'}}
      />
      <Icon name="ios-camera" size={30} color="#4F8EF7" />
      />
      </View>
      </ScrollView>
    );
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

AppRegistry.registerComponent(
  'AwesomeProject',
  () => IScrolledDownAndWhatHappenedNextShockedMe);