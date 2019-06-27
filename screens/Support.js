import React, { Component } from 'react';
import { Image, ImageBackground } from 'react-native';
import { Button, Block, Text, Input } from '../components';

class Support extends Component {
   
    render() {
        return (
            // <Block center middle>
                <ImageBackground style={{ flex: 1, height: 800 }} source={require('../assets/images/support.png')}>
                <Block center middle>
                    <Text style={{ fontSize: 32, marginTop: -160 }}>How can we help? </Text>
                    <Text style={{ fontSize: 16, paddingHorizontal: 55, marginTop: 20, lineHeight: 20 }}>We are here to help you have a great experience. If you have any questions or concerns, please get in touch with us </Text>
                </Block>
                </ImageBackground>
            // </Block>
        )
    }
}
export default Support;

