import React, { Component } from 'react';
import { View, StyleSheet, WebView, Platform } from 'react-native';

import { Button, Block, Text } from '../components';

// const styles = StyleSheet.create({
 
//     WebViewContainer: {
//         marginTop: (Platform.OS == 'ios') ? 70 : 0,
//       }
//     });

class FamilyConnections extends Component {

    render() {
        const { navigation } = this.props;

        return (
            <Block center middle >
                <View style={{ flex: 1 }}>
                    <Text 
                        height={18}
                        weight={'600'}
                        style={{ marginTop: 70,
                        marginBottom: 50,
                        lineHeight: 28,
                        fontSize: 15 }}> 
                        Learn about a revolutionary way to discover and {`\n`}
                        engage extended families for at-risk foster youth. 
                    </Text>
                    <Block>
                        <View>
                            <View style={{ height: 250 }}>
                                <WebView
                                    // style={ styles.WebViewContainer }
                                    javaScriptEnabled={true}
                                    domStorageEnabled={true}
                                    source={{uri: 'https://www.youtube.com/embed/_AHNi1kWT18' }}/>
                            </View>
                            <Button onPress={() => navigation.navigate('Register')} style={{ marginTop: 60 }} >
                                <Text height={21} spacing={0} weight='bold' color='white'>I want access to Family Connections</Text>
                            </Button>
                        </View>
                    </Block>
                </View>
            </Block>
        )
    }
}

export default FamilyConnections;