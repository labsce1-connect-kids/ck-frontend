import React, { Component } from 'react'
import { StyleSheet, Text } from 'react-native'
// import * as Font from 'expo-font';

export default class Typography extends Component {

    // componentDidMount() {
    //     Font.loadAsync({
    //         'futura-light': require('./assets/fonts/futura-light-bt.ttf'),
    //       });
    // }

    render() {
        const { center, color, size, height, weight, spacing, devBorder, style, children, ...props } = this.props;
        const textStyles = [
            styles.text,
            color && { color },
            size && { fontSize: size },
            height && { lineHeight: height },
            weight && { fontWeight: weight },
            spacing && { letterSpacing: spacing },
            center && styles.center,
            devBorder && styles.devBorder,
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
        // fontFamily: 'futura-light',
    },
    center: {
        alignItems: 'center',
    },
    devBorder: {
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: 'red',
        borderStyle: 'dashed',
    },
});
