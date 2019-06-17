import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { KeyboardAvoidingView, Image, Dimensions } from 'react-native';
import { Button, Block, Text, Input } from '../components';
import Colors from '../constants/Colors';
// import { green } from 'ansi-colors';

const { height, width } = Dimensions.get('window');
    {/* 
    //GET WINDOW BELOW does not account for android nav or notifications bar
        // height: height -100,
        // width: width -150,
            // REF: moto g6 -> 640Hx360W max
    */}


const styles = StyleSheet.create({
    devBorder: {
        borderColor: 'red',
        borderStyle: 'dashed',
        borderRadius: 4,
        borderWidth: 0.5,
    },
    searchContainer: {
        // // FLEX: 1 --> fills usable viewport
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
    },

    logo: {height: 50, width: 310},

    searchInput: {
        borderColor: Colors.clientBlue,
        borderRadius: 35,
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        // borderWidth: 1,
        // borderTopWidth: 1,
        // borderBottomWidth: 1,
        // paddingLeft: 5,
        // paddingRight: 5,
    },
});



class PeopleSearch extends Component {
    render() {
        const { navigation } = this.props;
        return (
        <KeyboardAvoidingView style={{flex: 1}} keyboardVerticalOffset={height * 0.3} behavior='padding' enabled>
            <View style={styles.searchContainer}>
                {/* logo */}
                <Block flex={0.16} center middle>

                    <Image style={styles.logo} source={require('../assets/images/logo.png')} />

                </Block >{/* logo end */}
                {/* input */}
                <Block flex={0.48} column middle stretch
                    style={styles.searchInput}
                >
                    <Input 
                        label='Enter Full Name, Email, Phone, or URL Address' 
                        style={{ marginBottom: 25 }}
                    />

                    <Input 
                        label='City, State (optional)'
                        style={{ marginBottom: 25 }} 
                    />

                    <Button 
                        title='SEARCH' 
                        onPress={() => navigation.navigate('')} 
                        style={{ width: 200,  alignSelf: 'center' }} 
                        ><Text 
                            style = {[ ]}
                            // height={21} 
                            spacing={0} color='white'

                        >Search
                        </Text>

                    </Button>

                </Block >{/* input end*/}
                {/* info */}
                    <Block flex={0.37}>
                        <Text 
                            // height={36}
                            style={{ 
                                fontSize: 26, 
                                color: Colors.clientBlue 
                            }}

                        >People Search
                        </Text>

                        <Text 
                            devBorder 

                        >Social workers use this tool to find contact information for extended families and supporters of foster kids. This search uses public information from over 300 sources and covers over 3 billion people.
                        </Text>

                        <Text 
                            style={{ 
                                marginTop: 15, 
                                color: Colors.clientBlue, 
                                textDecorationLine: 'underline' 
                            }}

                        >PLACEHOLDER --> Watch a 2 minute quick introduction video
                        </Text>

                    </Block>{/* info end*/}

                    {/* footer */}
                    <Block flex={0.01} center middle style={{minHeight: 15}}><Text style={{fontSize: 8, color: '#bbbbbb'}}>Copyright Connect Our Kids 2019</Text></Block>{/* footer end*/}
            </View>
        </KeyboardAvoidingView>
        )
    }
}
export default PeopleSearch;