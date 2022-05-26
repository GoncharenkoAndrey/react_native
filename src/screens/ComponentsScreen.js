import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const name = "Andrey"
    return <View>
        <Text style = {styles.headerStyle}>Getting started with react native!</Text>
        <Text style = {styles.textStyle}>My name is {name}</Text>
    </View>;
};

const styles = StyleSheet.create({
    headerStyle: {
        fontSize: 30
    },
    textStyle: {
        fontSize: 20
    }
});

export default ComponentsScreen;