import React, { Component } from 'react';
import { View, Linking, WebView, Platform } from 'react-native';

import { Button, Block, Text } from '../components';

class BestPractices extends Component {

    handleLinking = (url) => {
        Linking.openURL(url);
    }

    render() {
        const { navigation } = this.props;

        return (
            <Block center middle >
                <View style={{ flex: 1 }}>
                    <Text 
                        height={18}
                        weight={'600'}
                        style={{ marginTop: 70,
                        marginBottom: 40,
                        lineHeight: 28,
                        fontSize: 15 }}> Connect Our Kids makes free tools for social {`\n`} workers
                        engaged in permanancy searches for {`\n`} foster kids. 
                        Watch the video below to learn more {`\n`} about the free tools
                        and resources in this app.
                    </Text>
                    <Block>
                        <View>
                            <View style={{ height: 250 }}>
                                <WebView
                                    // style={ styles.WebViewContainer }
                                    javaScriptEnabled={true}
                                    domStorageEnabled={true}
                                    source={{uri: 'https://www.youtube.com/embed/tY-acY5oUUk' }}/>
                            </View>
                            <Text 
                                style={{ paddingLeft: 10, color: 'blue', paddingTop: 40, marginBottom: 20 }} 
                                onPress={() => navigation.navigate('PeopleSearch')}>
                                People Search - Find Contact Information for Anyone
                            </Text>
                            <Text 
                                style={{ paddingLeft: 10, color: 'blue', marginBottom: 20 }}
                                onPress={() => navigation.navigate('FamilyConnections')}>
                                Family Connections - Family Trees for Permanancy
                            </Text>
                            <Text 
                                style={{ paddingLeft: 10, color: 'blue',  }} 
                                onPress={() => this.handleLinking("https://connectourkids.org")}>
                                Resources - Useful Materials and Information
                            </Text>
                        </View>
                    </Block>
                </View>
            </Block>
        )
    }
}

export default BestPractices;