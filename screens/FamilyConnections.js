import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Video } from 'expo-av';

import { Button, Block, Text, Input } from '../components';
// const styles = StyleSheet.create({
//     familyconnections: {
//         flex: 1,
//     }
// });


class FamilyConnections extends Component {

    render() {
        const { navigation } = this.props;

        return (
            <Block center middle >
                <View style={{ flex: 1 }}>
                    <Text 
                        height={18}
                        weight={'600'}
                        style={{ marginTop: 120, 
                        paddingLeft: 23, 
                        paddingRight: 23 }}
                    > 
                        Learn about a revolutionary way to discover and engage 
                        extended families for at-risk foster youth. 
                    </Text>
                    <Block>
                        <View>
                            <Video
                                source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                                rate={1.0}
                                volume={1.0}
                                isMuted={false}
                                // shouldPlay
                                // isLooping
                                style={{ marginTop: 30, height: 200 }}
                            />
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

