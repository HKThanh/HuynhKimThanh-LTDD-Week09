import { View, Text, SafeAreaView, Button } from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, selectCount } from "../redux/counterSlice";

const ReduxToolkit = () => {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();

    return (
        <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'space-evenly'}}>
            <Text style={{fontSize: 40, fontWeight: '700'}}>Count: {count}</Text>
            <Button title="Increment" onPress={() => dispatch(increment())} />
            <Button title="Decrement" onPress={() => dispatch(decrement())} />
        </SafeAreaView>
    )
}

export default ReduxToolkit;