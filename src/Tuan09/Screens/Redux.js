import { View, Text, SafeAreaView, Button } from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {  increment, decrement } from "../redux/action";
import { selectCount } from "../redux/reducer";
const Redux = () => {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();

    return (
        <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'space-evenly'}}>
            <Text style={{fontSize: 40, fontWeight: '700'}}>Count: {count}</Text>
            <Button title="INCREMENT_COUNTER" onPress={() => dispatch(increment())} />
            <Button title="DECREMENT_COUNTER" onPress={() => dispatch(decrement())} />
        </SafeAreaView>
    )
}

export default Redux;