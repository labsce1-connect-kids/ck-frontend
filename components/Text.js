import React, { Component } from 'react'
import { StyleSheet, Text } from 'react-native'

export default class Typography extends Component {
    render() {
        const { center, color, size, height, weight, spacing, style, children, ...props } = this.props;
        const textStyles = [
            styles.text,
            color && { color },
            size && { fontSize: size },
            height && { lineHeight: height },
            weight && { fontWeight: weight },
            spacing && { letterSpacing: spacing },
            center && styles.center,
            style,
        ];

        return (
            <Text style={textStyles} {...props}>
                {children}
            </Text>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 14,
    },
    center: {
        alignItems: 'center',
    },
});
