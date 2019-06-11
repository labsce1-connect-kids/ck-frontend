import React, { Component } from 'react';
import { KeyboardAvoidingView, Dimensions, Alert } from 'react-native';
import { Button, Block, Text, Input } from '../components';

const { height } = Dimensions.get('window');

class Forgot extends Component {
    
    render() {
        const { navigation } = this.props;
        return (
            <KeyboardAvoidingView style={{ flex: 1 }} keyboardVerticalOffset={height * 0.3} behavior='padding' enabled>
                <Block center middle >
                    <Block center flex={1} center>
                        <Text 
                            color='#008eb6' 
                            height={50} 
                            weight={'700'} 
                            spacing={0}
                            style={{ marginTop: 240, fontSize: 22 }}>
                            Forgot Password?
                        </Text>
                        <Text 
                            height={22} 
                            weight={'100'} 
                            spacing={0} 
                            color='#7f8fa6'
                            style={{ marginBottom: 40 }}>
                            Enter the email address associated with your account
                        </Text>
                        <Block center >
                            <Input style={{ marginBottom: 20 }} label='Email Address' email full/>
                            <Button full title='Reset Password' onPress={() => Alert.alert('Check your inbox for further instructions!')} 
                                style={{ marginBottom: 10 }} >
                                <Text height={21} spacing={0} weight='bold' color='white'>Reset Password</Text>
                            </Button>
                            <Text 
                                style={{ marginTop: 20, marginBottom: 8 }} 
                                color='#7f8fa6'
                                height={22}>
                                    <Text 
                                    height={18}
                                    color='rgb(80,141,179)' 
                                    weight={'600'}
                                    onPress={() => navigation.navigate('Login')}> Log In
                                    </Text> if you remember your credentials   
                            </Text>
                        </Block>
                    </Block>
                </Block>
            </KeyboardAvoidingView>
        )
    }
}

export default Forgot;

