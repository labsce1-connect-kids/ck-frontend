import React, { Component } from 'react';
import { View, Linking, WebView, Platform } from 'react-native';
import { Block, Text } from '../components';
import Colors from '../constants/Colors';

class BestPractices extends Component {

    handleLinking = (url) => {
        Linking.openURL(url);
    }

    render() {
        const { navigation } = this.props;

        return (
            <Block pageMargins center middle>
                <Block flex={1} middle stretch>
                    <Text size={18} lineHeight={27} 
                        style={{ paddingLeft: 10 }}
                    >Connect Our Kids makes free tools for social workers engaged in permanency searches for foster kids.  Watch the video below to learn more about the free tools and resources in this app.
                    </Text>
                </Block>
                <View style={{flex: 2}}>
                    <View style={{ flex: 1, marginTop: 5, marginBottom: 5, }}>
                        {/* WebView is deprecated and noticeably buggy 
                            (Black screen flash, force close, sizing?). 
                                Community package replacement has no expo.  
                        Check out...  react-native-youtube */}
                        <WebView
                            // style={ styles.WebViewContainer }
                            javaScriptEnabled={true}
                            domStorageEnabled={true}
                            source={{uri: 'https://www.youtube.com/embed/tY-acY5oUUk' }}/>
                    </View>
                    <View style={{flex: 1}} >
                        <Text color={Colors.clientBlue}
                            style={{ paddingLeft: 10, paddingTop: 40, marginBottom: 20 }} 
                            onPress={() => navigation.navigate('PeopleSearch')}
                        >People Search - Find Contact Information for Anyone
                        </Text>
                        <Text color={Colors.clientBlue}
                            style={{ paddingLeft: 10, marginBottom: 20 }}
                            onPress={() => navigation.navigate('FamilyConnections')}
                        >Family Connections - Family Trees for Permanency
                        </Text>
                        {/* External Link */}
                        <Text color={Colors.clientBlue}
                            style={{ paddingLeft: 10}} 
                            onPress={() => this.handleLinking("https://connectourkids.org")}
                        >Resources - Useful Materials and Information
                        </Text>
                    </View>
                </View>
            </Block>
        )
    }
}

export default BestPractices;
