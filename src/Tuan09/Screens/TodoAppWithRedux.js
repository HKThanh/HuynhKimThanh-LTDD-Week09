import { View, SafeAreaView, Text, TextInput, Pressable, FlatList } from "react-native";
import React, { useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo, toggleTodo, selectTodos } from '../redux/todoAppSlice';
import TodoItem from "../components/todoItem";

const TodoAppWithRedux = () => {
    const todoList = useSelector(selectTodos);
    const dispatch = useDispatch();
    const [title, setTitle] = React.useState('');
    const [editId, setEditId] = React.useState(null);

    const handleAddTodo = () => {
        if (title === '') {
            return;
        }

        if (editId !== null) {
            dispatch(editTodo({
                id: editId,
                title: title,
            }));
            setEditId(null);
            setTitle('');
            return;
        }

        dispatch(addTodo({
            id: Date.now(),
            title: title,
            completed: false,
        }));
        setTitle('');
    };

    const handleRemoveTodo = (id) => {
        dispatch(removeTodo(id));
    };

    const handleToggleTodo = (id) => {
        dispatch(toggleTodo(id));
    };

    const handleEditTodo = (id, title) => {
        setEditId(id);
        setTitle(title);
    };

    return (
        <SafeAreaView>
            <View>
                <TextInput
                    placeholder="Enter todo"
                    value={title}
                    onChangeText={setTitle}
                    style={{
                        borderWidth: 1,
                        borderColor: '#000',
                        padding: 10,
                        margin: 10,
                        borderRadius: 10,
                        fontSize: 16
                    }}
                />
                <Pressable 
                    onPress={handleAddTodo}
                    style={{
                        backgroundColor: '#3498db',
                        padding: 10,
                        margin: 10,
                        borderRadius: 10,
                        alignItems: 'center'
                    }}
                >
                    <Text style={{
                        color: '#fff',
                        fontSize: 20,
                        fontWeight: '700'
                    }}
                    >
                        Add todo</Text>
                </Pressable>
            </View>
            <View>
                <FlatList
                    data={todoList}
                    renderItem={({ item }) => (
                        <TodoItem
                            todo={item}
                            handleRemoveTodo={handleRemoveTodo}
                            handleToggleTodo={handleToggleTodo}
                            handleEditTodo={handleEditTodo}
                        />
                    )}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
        </SafeAreaView>
    );
}

export default TodoAppWithRedux;