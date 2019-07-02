import React, { Component } from 'react';
import { View, WebView, Platform } from 'react-native';

import { Button, Block, Text } from '../components';

const textBlurb = Platform.select({
    android: { paddingLeft: 20, paddingRight: 15, marginTop: -40 },
    ios: { paddingLeft: 15, paddingRight: 15, marginTop: -40 },
  });

const webViewStyle = Platform.select({
    android: { flex: 1, marginLeft: 20, marginTop: -40 },
    ios: { flex: 1, marginLeft: 15, marginRight: 15, marginTop: -30 },
  });

const webInlineStyle = Platform.select({
    android: { width: 340, maxHeight: 200 },
    ios: { width: 310, maxHeight: 200 },
  });

const connectionsButtonStyle = Platform.select({
    android: { flex: 1, paddingLeft: 15, paddingRight: 15, marginTop: -180 },
    ios: {flex: 1, paddingLeft: 15, paddingRight: 15, marginTop: -100 },
})

class FamilyConnections extends Component {

    render() {
        const { navigation } = this.props;

        return (
            <Block pageMargins center middle>
                <Block>
                    <Block flex={1} middle stretch>
                        <Text 
                            size={18} 
                            lineHeight={27} 
                            style={{ ...textBlurb }}
                        >
                            Learn about a revolutionary way to discover and engage 
                            extended families for at-risk foster youth.
                        </Text>
                    </Block>
                    <View style={{flex: 2}}>
                        <View style={{ ...webViewStyle }}>
                            <WebView
                                // style={ styles.WebViewContainer }
                                // maxHeight, top, height, display, aspectRatio
                                style={{ ...webInlineStyle }}
                                javaScriptEnabled={true}
                                domStorageEnabled={true}
                                source={{uri: 'https://www.youtube.com/embed/_AHNi1kWT18' }}/>
                        </View>
                    </View>
                    <View style={{ ...connectionsButtonStyle }} >
                        <Button onPress={() => navigation.navigate('Register')}>
                            <Text spacing={0} color='white'>
                                I want access to Family Connections
                            </Text>
                        </Button>
                    </View>
                </Block>
            </Block>
        )
    }
}

export default FamilyConnections;