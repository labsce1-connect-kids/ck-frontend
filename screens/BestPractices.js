import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import { Button, Block, Text, Input } from '../components';

const styles = StyleSheet.create({
    bestpractices: {
        flex: 1,
    }
});

class BestPractices extends Component {
    render() {
        return (
            <Block center middle>
                <Text> Best Practices </Text>
            </Block>
        )
    }
}

export default BestPractices;