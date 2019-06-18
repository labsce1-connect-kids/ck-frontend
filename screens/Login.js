import React, { Component } from 'react';
import { KeyboardAvoidingView, Image, Dimensions } from 'react-native';

import { Button, Block, Text, Input } from '../components';

const { height } = Dimensions.get('window');

class Login extends Component {

    render() {
        const { navigation } = this.props;
        return (
            <KeyboardAvoidingView style={{ flex: 1 }} keyboardVerticalOffset={height * 0.3} behavior='padding' enabled>
            <Block center middle>
                <Block middle>
                    {/* <Text color='#008eb6'>Logo</Text> */}
                    {/* <Image 
                    source={require('../assets/images/logo.png')}
                    style={{ height: 50, width: 310 }}
                    /> */}
                </Block>
                <Block flex={2.5} center>
                    <Text 
                        color='#008eb6' 
                        height={50} 
                        spacing={0} 
                        size={50}>
                        <Image 
                        source={require('../assets/images/logo.png')}
                        style={{ height: 50, width: 310 }}
                        />  
                    </Text>
                    <Text 
                        height={22} 
                        spacing={0} 
                        color='#7f8fa6'
                        style={{ marginBottom: 40 }}>
                        Please enter your credentials
                    </Text>
                    <Block center style={{ marginTop: 44 }}>
                        <Input style={{ marginBottom: 25 }} label='Email Address' email full/>
                        <Input style={{ marginBottom: 25 }} label='Password' password full/>
                        
                        <Button full title='SIGN IN' onPress={() => navigation.navigate('BestPractices')} style={{ marginBottom: 10 }} >
                            <Text height={21} spacing={0} color='white'>Sign In</Text>
                        </Button>
                        <Button full title='Guest' onPress={() => navigation.navigate('BestPractices')} style={{ marginBottom: 10 }} >
                            <Text height={21} spacing={0} color='white'>Continue as Guest</Text>
                        </Button>
                        <Text 
                            style={{ marginTop: 20, marginBottom: 8 }} 
                            color='#7f8fa6'
                            height={22}>
                            Don't have an account yet? 
                            <Text 
                            height={18}
                            color='rgb(80,141,179)' 
                            onPress={() => navigation.navigate('Register')}> Sign Up
                            </Text>
                        </Text>
                        <Text height={18} onPress={() => navigation.navigate('Forgot')} color='rgb(80,141,179)'>Forgot Password</Text>
                    </Block>
                </Block>
            </Block>
            </KeyboardAvoidingView>
                )
            }
        }

export default Login;

