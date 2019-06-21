import React, { Component } from 'react'
import { StyleSheet, Text } from 'react-native'
import * as Font from 'expo-font';

export default class Typography extends Component {
    render() {
        const {
            color, size, lineHeight, spacing, 
            text, center, devBorder, 
            style, children, 
            ...rest 
        } = this.props;

        

        let defaultStyles = {
            fontFamily: 'futura-light',
            fontSize: 14,
            // lineHeight: null
        }
{/* 
        // const lineHeightPreset = 1.15;
        // let calculatedLineHeight = null ;
        
        // defaultStyles.lineHeight = cssHelper(lineHeightPreset, defaultStyles.fontSize);
        
        // function cssHelper (lineHeightMultiplier, fontsize=defaultStyles.fontSize) {
        //     let result = Math.trunc(fontsize * lineHeightMultiplier);
        //     return (result < fontsize  ?  'normal'  :  result)
        // }
*/}
{/*
        this.props.map((el, i) => {
            if (size) {
                cssHelper()
            }
        })
*/}

{/* 
        // if (LHcss) {
        //     if (typeof LHcss === 'number') {
        //         if (size) {
        //             cssHelper(LHcss, size)
        //         }

                
        //     }
        // }
*/}

        // // bootstrap
        let textStyles = [
            defaultStyles,
            color && { color },
            size && { fontSize: size },
            lineHeight && { lineHeight: lineHeight },
            spacing && { letterSpacing: spacing },
            devBorder && styles.devBorder,
            text && styles.text,
            center && styles.center,
            style,
        ];
        // delete null values
        textStyles = textStyles.filter(Boolean);


        return (
            <Text style={textStyles} {...rest}>
                {children}
            </Text>
        )
    }
}
// StyleSheets good for optimization // log(styles.text) returns memory location only
const styles = StyleSheet.create({
    devBorder: {
        // borderRadius: 4,
        borderWidth: 0.5,
        borderColor: 'red',
        borderStyle: 'dashed',
    },
    text: {
        // fontSize: 14,
        // fontFamily: 'futura-light',
    },
    center: {
        alignItems: 'center',
    },
});




































































































