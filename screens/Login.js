import React, { Component } from 'react';
import { KeyboardAvoidingView, Image, Dimensions } from 'react-native';

import { Button, Block, Text, Input } from '../components';

import Colors from '../constants/Colors';

const { height } = Dimensions.get('window');

const { width } = Dimensions.get('window');


class Login extends Component {

    render() {
        const { navigation } = this.props;
        return (
            <KeyboardAvoidingView 
                style={{ flex: 1 }} 
                // keyboardVerticalOffset={height * 0.3} 
                // behavior='padding' 
                enabled
            >
                <Block center style={{ marginTop:25, marginBottom:25 }} >
                    <Block flex={1} middle center color={'#008eb6'} 
                        style={{ minHeight: 95 }} 
                    >
                        <Image 
                            source={require('../assets/images/logo.png')}
                            style={{ height: 75, width: 310, justifyContent: 'center' }}
                        />  
                        <Text color='#7f8fa6'>Please enter your credentials</Text>
                    </Block>
                    <Block flex={1.5} middle style={{ justifyContent: 'space-evenly' }}>
                        <Input label='Email Address' email full/>
                        <Input label='Password' password full/>
                    </Block>
                    <Block flex={1} center style={{ justifyContent: 'space-around' }}>
                        <Button title='SIGN IN' full 
                            onPress={() => navigation.navigate('BestPractices')}
                            style={{ width: width - 44 }}   
                        >
                            <Text spacing={1} color='white'>Sign In</Text>
                        </Button>
                        <Button 
                            title='Guest' 
                            style={{ marginBottom: 10, width: width - 44 }} size={18} 
                            full 
                            onPress={() => navigation.navigate('BestPractices')}
                        >
                            <Text spacing={1} color='white'>
                                Continue as Guest
                            </Text>
                        </Button>
                    </Block>
                    <Block flex={0.5} center style={{ justifyContent: 'space-between' }}>
                        <Text 
                            spacing={1} 
                            color='#7f8fa6'
                            style={{ fontFamily: 'futura-light-caps' }} 
                        >
                            Don't have an account yet?&nbsp;
                            <Text 
                                spacing={1} 
                                color={Colors.clientBlue}
                                style={{textDecorationLine: 'underline'}} 
                                onPress={() => navigation.navigate('Register')}
                            >
                                Sign Up!
                            </Text>
                        </Text>
                        <Text 
                            size={14} 
                            color={'#7f8fa6'} 
                            spacing={1}
                            // color={Colors.clientBlue}
                            style={{
                                justifyContent: 'space-between', 
                                textDecorationLine: 'underline', 
                                fontFamily: 'futura-light-caps',
                                lineHeight: 16
                            }}
                            onPress={() => navigation.navigate('Forgot')} 
                        >
                            Forgot Password
                        </Text>
                    </Block>
                </Block>
            </KeyboardAvoidingView>
                )
            }
        }

export default Login;

