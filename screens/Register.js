import React, { Component } from 'react';
import { KeyboardAvoidingView, ScrollView, Image, Dimensions } from 'react-native';

import { Button, Block, Text, Input } from '../components';

const { height } = Dimensions.get('window');

// const styles = StyleSheet.create({
//     register: {
//         flex: 1,
//     }
// });

class Register extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <KeyboardAvoidingView style={{ flex: 1 }} keyboardVerticalOffset={height * 0.3} behavior='padding' enabled>
            <Block center middle >
                <Block middle>
                    {/* <Text color='#008eb6'>Logo</Text> */}
                    {/* <Image 
                    source={require('../assets/images/logo.png')}
                    style={{ height: 50, width: 310 }}
                    /> */}
                </Block>
                <Block flex={3.6} center>
                    <Text 
                        color='#008eb6' 
                        height={41} 
                        spacing={0} 
                        size={33}
                        h3>
                        {/* <Image 
                        source={require('../assets/images/logo.png')}
                        style={{ height: 50, width: 310 }}
                        />   */}
                        Create an Account
                    </Text>
                    <Text 
                        height={18} 
                        spacing={0} 
                        color='#7f8fa6'
                        style={{ marginBottom: 13, marginTop: 2 }}
                        >
                        Get started today
                    </Text>
                    <Block center style={{ marginTop: 44 }}>
                        <Input style={{ marginBottom: 25 }} label='First Name' full/>
                        <Input style={{ marginBottom: 25 }} label='Last Name' full/>
                        <Input style={{ marginBottom: 25 }} label='Email Address' email full/>
                        <Input style={{ marginBottom: 25 }} label='Password' password full/>
                        
                        <Button full onPress={() => navigation.navigate('BestPractices')} style={{ marginBottom: 10 }} >
                            <Text height={21} spacing={0} color='white'>Create Account</Text>
                        </Button>
                        <Text 
                            style={{ marginTop: 20 }} 
                            color='#7f8fa6'
                            height={22}>
                            Already have an account? 
                            <Text 
                            height={18}
                            color='#008eb6' 
                            onPress={() => navigation.navigate('Login')}> Sign In
                            </Text>
                        </Text>
                        {/* <Text height={18} onPress={() => navigation.navigate('Forgot')} color='#7f8fa3'>Forgot Password</Text> */}
                    </Block>
                </Block>
            </Block>
            </KeyboardAvoidingView>
        )
    }
}

export default Register;

