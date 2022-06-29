import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export const Header = ({children}) => {
    return (
        <View style={[styles.container, styles.header]}>
            {children}
        </View>
    )
};

export const Contents = ({children}) => {
    return (
        <View style={[styles.container, styles.contents]}>
            {children}
        </View>
    )
};

export const Footer = ({children}) => {
    return (
        <View style={[styles.container, styles.footer]}>
            {children}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
    },
    header: {
        flex: 1,
        backgroundColor: '#F1C40F'
    },
    contents: {
        flex: 2,
        backgroundColor: '#1ABC9C',
        height: 640
    },
    footer: {
        flex: 1,
        backgroundColor: '#3498DB',
    },
    text: {
        fontSize: 26
    }
});
