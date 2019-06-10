import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import { Button, Block, Text, Input } from '../components';

const styles = StyleSheet.create({
    support: {
        flex: 1,
    }
});

class Support extends Component {
    render() {
        return (
            <Block center middle>
                <Text> Support </Text>
            </Block>
        )
    }
}

export default Support;