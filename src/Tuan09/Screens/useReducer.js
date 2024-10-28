import { SafeAreaView, Text, Button } from "react-native";
import { useReducer } from "react";

const Reducer = () => {
    const initialState = { count: 0 };

    const reducer = (state, action) => {
        switch (action.type) {
            case 'increment':
                return { count: state.count + 1 };
            case 'decrement':
                return { count: state.count - 1 };
            default:
                throw new Error();
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'space-evenly'}}>
            <Text style={{fontSize: 40, fontWeight: '700'}}>Count: {state.count}</Text>
            <Button title="Increment" onPress={() => dispatch({ type: 'increment' })} />
            <Button title="Decrement" onPress={() => dispatch({ type: 'decrement' })} />
        </SafeAreaView>
    )
}

export default Reducer;