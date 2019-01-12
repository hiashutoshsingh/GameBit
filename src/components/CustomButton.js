import React, { Component } from 'react';
import { TouchableOpacity, View, Text } from 'react-native'

export default CustomButton = (props) => {
    // const {title}=this.props;
    return (
        <TouchableOpacity
            onPress={() => alert('clicked')}>
            <View style={{ height: props.height, width: props.width, backgroundColor: (props.backgroundColor || 'gray'), borderRadius: props.height*0.1 }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20 }}>
                        {props.title || ''}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}
