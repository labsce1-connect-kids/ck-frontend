import React, { Component } from 'react';
import { View, Linking, WebView, Platform } from 'react-native';
import { Block, Text } from '../components';
import Colors from '../constants/Colors';


const textBlurb = Platform.select({
    android: { paddingLeft: 20, paddingRight: 15, marginTop: 30 },
    ios: { paddingLeft: 15, paddingRight: 15, marginTop: -10 },
  });

const webViewStyle = Platform.select({
    android: { flex: 1, marginLeft: 20, marginTop: 20 },
    ios: { flex: 1, marginLeft: 15, marginRight: 15 },
  });

const webInlineStyle = Platform.select({
    android: { width: 340, maxHeight: 200 },
    ios: { width: 310, maxHeight: 200 },
  });

const peopleLinkStyle = Platform.select({
    android: { paddingLeft: 10, paddingRight: 10, paddingTop: 40, marginBottom: 10 },
    ios: { paddingTop: 40, marginBottom: 20 },
  });

const familyLinkStyle = Platform.select({
    android: { paddingLeft: 10, paddingRight: 10, marginBottom: 10 },
    ios: { marginBottom: 20 },
  });

const resourcesLinkStyle = Platform.select({
    android: { paddingLeft: 10, paddingRight: 10, marginBottom: 10 },
    ios: { },
  });


class BestPractices extends Component {

    handleLinking = (url) => {
        Linking.openURL(url);
    }

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
                            Connect Our Kids makes free tools for social workers 
                            engaged in permanency searches for foster kids.  
                            Watch the video below to learn more about the free tools 
                            and resources in this app.
                        </Text>
                    </Block>
                    <View style={{flex: 2 }}>
                        <View style={{ ...webViewStyle }}>
                            {/* WebView is deprecated and noticeably buggy 
                                (Black screen flash, force close, sizing?). 
                                    Community package replacement has no expo.  
                            Check out...  react-native-youtube */}
                            <WebView
                                // style={ styles.WebViewContainer }
                                style={{ ...webInlineStyle }}
                                javaScriptEnabled={true}
                                domStorageEnabled={true}
                                source={{uri: 'https://www.youtube.com/embed/tY-acY5oUUk' }}
                            />
                        </View>
                        <View style={{flex: 1, paddingLeft: 15 }} >
                            <Text 
                                color={Colors.clientBlue}
                                style={{ ...peopleLinkStyle }} 
                                onPress={() => navigation.navigate('PeopleSearch')}
                            >
                                People Search - Find Contact Information for Anyone
                            </Text>
                            <Text 
                                color={Colors.clientBlue}
                                style={{ ...familyLinkStyle }}
                                onPress={() => navigation.navigate('FamilyConnections')}
                            >
                                Family Connections - Family Trees for Permanency
                            </Text>
                            {/* External Link */}
                            <Text
                                style={{ ...resourcesLinkStyle }}
                                color={Colors.clientBlue}
                                onPress={() => this.handleLinking("https://connectourkids.org")}
                            >
                                Resources - Useful Materials and Information
                            </Text>
                        </View>
                    </View>
                </Block>
            </Block>
        )
    }
}

export default BestPractices;
