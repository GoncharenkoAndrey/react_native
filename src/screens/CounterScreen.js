import React, { useReducer } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const reducer = (state, action) => {
    switch(action.type) {
        case "increment":
            return {count: state.count + action.payload};
        case "decrement":
            return {count: state.count - action.payload};
        default:
            return state;
    }
};

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0});
    return <View>
        <Button title = "Increase" onPress = {() => dispatch({type: "increment", payload: 1})} />
        <Button title = "Decrease" onPress={() => dispatch({type: "decrement", payload: 1})} />
        <Text>Curren count: {state.count}</Text>
    </View>;
};

const styles = StyleSheet.create({});

export default CounterScreen;