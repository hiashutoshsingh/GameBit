import React, { Component } from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

export default class PostScreen extends Component {

  constructor(props){
    super(props);
  }
  static navigationOptions= {
    title : "PostScreenTitle"
  }

  onPressEvent = () =>{
    this.props.navigation.navigate('EventCreate')
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text> Post Your Stus  </Text>
        <Button onPress={this.onPressEvent}
          title="Go To Event"
          color="#841584"
          onPress={() => navigate('EventCreate')}
        />
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