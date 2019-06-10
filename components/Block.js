import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class Block extends Component {
    render() {
        const { flex, center, middle, style, children, ...props } = this.props;
        const blockStyles = [
            styles.block,
            flex && { flex },
            center && styles.center,
            middle && styles.middle,
        ];

        return (
            <View style={blockStyles} {...props}>
                {children}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    block: {
        flex: 1,
    },
    center: {
        alignItems: 'center',
    },
    middle: {
        justifyContent: 'center',
    },
});
