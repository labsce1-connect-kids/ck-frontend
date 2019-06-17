import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Dimensions } from 'react-native';
import Text from './Text';

const { width } = Dimensions.get('window');

export default class Input extends Component {
    render() {
        const { rightLabel, label, full, email, phone, number, style, password, ...props } = this.props;
        const inputStyles = [
            styles.input,
            full && styles.full,
            style,
        ];

        const inputType = email ? 'email-address' : number ? 'numeric' : phone ? 'phone-pad' : 'default';

        return (
            <View>
                <Text 
                size={12}
                height={14}
                spacing={1.12}
                color={'#B0BAC9'}
                style={styles.label}
                style={styles.rightLabel}>
                {label}
                {rightLabel}
                </Text>
                <TextInput 
                style={inputStyles} 
                secureTextEntry={password}
                autoCapitalize='none'
                autoCorrect={false}
                keyboardType={inputType}
                {...props} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: 'rgba(224, 231, 255, 0.20)',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        color: '#2E384D',
        fontSize: 15,
        height: 40,
        paddingVertical: 11,
        paddingHorizontal: 16,
    },
    label: {
        textTransform: 'uppercase',
        marginBottom: 8,
    },
    full: {
        width: width - 50,
    },
    rightLabel: {
        textTransform: 'uppercase',
        marginBottom: 8,
    },
});
