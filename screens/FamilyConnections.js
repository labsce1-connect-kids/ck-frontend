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
            <Block pageMargins center middle >
                <Block >
                    <Block flex={1.5} middle >
                        <Text size={18} lineHeight={27} 
                            style={{ paddingLeft: 10, marginTop: -30 }}
                        >Learn about a revolutionary way to discover and engage extended families for at-risk foster youth. 
                        </Text>
                    </Block>
                    <Block flex={2.5}>
                        <View style={{ flex: 1 , paddingHorizontal: 20, paddingVertical: 65, marginTop: -80 }}>
                            <WebView
                                // style={ styles.WebViewContainer }
                                javaScriptEnabled={true}
                                domStorageEnabled={true}
                                source={{uri: 'https://www.youtube.com/embed/_AHNi1kWT18' }}/>
                        </View>
                    </Block>
                    <Block style={{ marginTop: -10, paddingHorizontal: 20 }} >
                        <Button onPress={() => navigation.navigate('Register')}>
                            <Text spacing={0} color='white'>
                                I want access to Family Connections
                            </Text>
                        </Button>
                    </Block>
                </Block >
            </Block>
        )
    }
}

export default FamilyConnections;