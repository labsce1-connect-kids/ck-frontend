import React, { Component } from 'react';
import { StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';

const { width } = Dimensions.get('window');

export default class Button extends Component {
    render() {
        const { style, full, opacity, children, ...props } = this.props;
        const buttonStyles = [
            styles.button,
            full && styles.full,
            style,
        ];

        return (
            <TouchableOpacity 
            style={buttonStyles}
            activeOpacity={opacity} 
            {...props}>
                {children}
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'rgb(80,141,179)',
        borderRadius: 4,
        height: 40,
        paddingVertical: 11,
        alignItems: 'center',
        justifyContent: 'center',
    },
    full: {
        width: width - 50,
    }
});
