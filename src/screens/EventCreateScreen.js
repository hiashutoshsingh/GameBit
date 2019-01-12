import React, { Component } from 'react'
import { AppRegistry,StyleSheet, Text, View ,ScrollView,Image,Picker} from 'react-native'
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class EventCreateScreen extends Component {
  state = {gameCategory: '', gameType: ''}
  updateUser = (gameCategory) => {
    this.setState({gameCategory: gameCategory})
  }
  updategameType = (gameType) => {
    this.setState({gameType: gameType})
  }
  render() {
    return (
      <ScrollView>
      <View>
      <Image source = {require('../../src/img/eventimage.jpg')}
        style = {{width:responsiveWidth(100),height:responsiveHeight(30),justifyContent:'center',alignItems:'center'}}
      />
      <Picker 
      selectedValue = {this.state.gameCategory} onValueChange = {this.updateUser} mode='dropdown'>
               <Picker.Item label = "FPS" value = "fps" />
               <Picker.Item label = "Sports" value = "sports" />
               <Picker.Item label = "Fighting" value = "fighting" />
      </Picker>
      <Picker 
      selectedValue = {this.state.gameType} onValueChange = {this.updategameType} mode='dropdown'>
               <Picker.Item label = "CS GO" value = "csgo" />
               <Picker.Item label = "FIFA" value = "fifa" />
               <Picker.Item label = "Tekken" value = "tekken" />
      </Picker>

            <Text style = {styles.text}>{this.state.gameCategory}</Text>
            <Text style = {styles.text}>{this.state.gameType}</Text>
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
    text: {
      fontSize: 30,
      alignSelf: 'center',
      color: 'red'
   }
   
  });

AppRegistry.registerComponent(
  'AwesomeProject',
  () => IScrolledDownAndWhatHappenedNextShockedMe);