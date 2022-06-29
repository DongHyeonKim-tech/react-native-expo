import React, {useState} from 'react';
import { Header, Contents, Footer } from './components/layout/Layout';
import PressableButton from './components/PressableButton'
import { StatusBar } from 'expo-status-bar';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text, Button } from "react-native";

const App = () => {
    const [visible, setVisible] = useState(false);
    const wordVisibleHandler = () => {
        setVisible(!visible);
    };

    return (
        <>
            <Header/>
            <Contents>
                <View style={styles.container}>
                    <Text style={styles.title}>My First React Native!!!</Text>
                    {visible && <Text style={styles.title}>안녕</Text>}
                    <Button title={'뿅'} onPress={() => wordVisibleHandler()}/>
                    <StatusBar style={'auto'}/>
                    <Button title={'Hello React Native!!!'} onPress={() => alert('Click!!!!!!!!!!!')}/>
                    <PressableButton text={'HELLO'}/>
                </View>
            </Contents>
            <Footer/>
        </>
    )
};

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#ffffff',
    },
    title: {
        fontSize: 30,
    },
});

export default App;
