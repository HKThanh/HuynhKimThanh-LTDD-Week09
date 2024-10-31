import { View, Text, Pressable, TextInput, } from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, toggleTodo, editTodo } from "../redux/todoAppSlice";

const TodoItem = ({ todo }) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState(todo.title);
    const [isEdit, setIsEdit] = useState(false);

    const handleRemoveTodo = (id) => {
        dispatch(removeTodo(id));
    };

    const handleToggleTodo = (id) => {
        dispatch(toggleTodo(id));
    };

    const handleEditTodo = (id, title) => {
        dispatch(editTodo({
            id: id,
            title: title,
        }));
    };

    const handleEdit = () => {
        setIsEdit(true);
    };

    return (
        <View
            style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 10,
                borderBottomWidth: 1,
                borderBottomColor: "#000",
            }}
        >
            <Pressable onPress={() => handleToggleTodo(todo.id)}>
            <View
                style={{
                    width: 24,
                    height: 24,
                    borderWidth: 2,
                    borderColor: "#000",
                    borderRadius: 4,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {todo.completed && (
                    <View
                        style={{
                            width: 12,
                            height: 12,
                            backgroundColor: "#000",
                            borderRadius: 2,
                        }}
                    />
                )}
            </View>
            </Pressable>
            
            {isEdit ? (
                <TextInput
                    value={title}
                    onChangeText={setTitle}
                    onBlur={() => {
                        setIsEdit(false);
                        handleEditTodo(todo.id, title);
                    }}
                />
            ) : (
                <Text>
                    {todo.title}
                </Text>
            )}

            <Text>{todo.completed ? "Completed" : "Incompleted"}</Text>

            <View style={{flexDirection: 'row', width: 80, justifyContent: 'space-between'}}>
                <Pressable onPress={() => handleRemoveTodo(todo.id)}
                    style={{
                        backgroundColor: "#f00",
                        borderRadius: 5,
                        width: 32,
                        height: 32,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Text style={{color: '#fff'}}>X</Text>
                </Pressable>
                
                <Pressable onPress={handleEdit}
                    style={{
                        backgroundColor: isEdit ? "cyan" : "green",
                        borderRadius: 5,
                        width: 32,
                        height: 32,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Text style={{color: '#fff'}}>Edit</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default TodoItem;