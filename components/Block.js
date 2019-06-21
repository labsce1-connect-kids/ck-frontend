import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class Block extends Component {
    render() {
        const { flex, center, middle, bottom, nowrap, wrap, column, row, stretch, devBorder, style, pageMargins, children, ...props } = this.props;
        const blockStyles = [
            styles.block,
            // block && styles.block,
            flex && { flex },
            center && styles.center,
            pageMargins && styles.pageMargins,
            middle && styles.middle,
            bottom && styles.bottom,
            nowrap && styles.nowrap,
            wrap && styles.wrap,
            column && styles.column,
            row && styles.row,
            stretch && styles.stretch,
            devBorder && styles.devBorder,
            style
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
    bottom: {
        flexDirection: 'row',
        alignContent: 'flex-end',
    },
    nowrap: {
        flexWrap: 'nowrap'
    },
    wrap: {
        flexWrap: 'wrap'
    },
    column: {
        flexDirection: 'column'
    }, 
    row: {
        flexDirection: 'row'
    },
    stretch: {
        alignItems: 'stretch'
    },
    devBorder: {
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: 'red',
        borderStyle: 'dashed',
    },
    pageMargins: {
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15,
        marginBottom: 5,
    }
});
