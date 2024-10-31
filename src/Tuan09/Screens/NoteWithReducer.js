import { View, SafeAreaView, Text, Pressable, TextInput, FlatList } from "react-native";
import React, { useReducer } from "react";

const NoteCard = ({ note, onDelete, onUpdate }) => {
    const [isEditing, setIsEditing] = React.useState(false);
    const [newNote, setNewNote] = React.useState(note);

    return (
        <View
            style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                margin: 10,
                borderWidth: 1,
                borderRadius: 10,
                paddingHorizontal: 10,
            }}
        >
            {isEditing ? (
                <TextInput
                    style={{
                        borderWidth: 1,
                        borderColor: "black",
                        padding: 10,
                        margin: 10,
                        borderWidth: 0,
                    }}
                    value={newNote}
                    onChangeText={(text) => setNewNote(text)}
                />
            ) : (
                <Text>{note}</Text>
            )}
            <View style={{ flexDirection: "row" }}>
                <Pressable
                    onPress={() => {
                        if (isEditing) {
                            onUpdate(newNote, note);
                            setIsEditing(false);
                        } else {
                            setIsEditing(true);
                        }
                    }}
                    style={{
                        backgroundColor: isEditing ? "green" : "blue",
                        padding: 10,
                        margin: 10,
                    }}
                >
                    <Text style={{ color: "white" }}>
                        {isEditing ? "Update" : "Edit"}
                    </Text>
                </Pressable>
                <Pressable
                    onPress={() => onDelete(note)}
                    style={{
                        backgroundColor: "red",
                        padding: 10,
                        margin: 10,
                    }}
                >
                    <Text style={{ color: "white" }}>Delete</Text>
                </Pressable>
            </View>
        </View>
    );
};

const initialState = {
    note: "",
    notes: [],
};

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_NOTE":
            return {
                ...state,
                notes: [...state.notes, state.note],
                note: "",
            };
        case "SET_NOTE":
            return {
                ...state,
                note: action.payload,
            };
        case "DELETE_NOTE":
            return {
                ...state,
                notes: state.notes.filter((note) => note !== action.payload),
            };
        case "UPDATE_NOTE":
            return {
                ...state,
                notes: state.notes.map((note) =>
                    note === action.payload.oldNote ? action.payload.newNote : note
                ),
            };
        default:
            return state;
    }
};

const NoteWithReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <SafeAreaView>
            <View>
                <TextInput
                    style={{
                        borderWidth: 1,
                        borderColor: "black",
                        padding: 10,
                        margin: 10,
                        borderRadius: 10,
                    }}
                    value={state.note}
                    onChangeText={(text) =>
                        dispatch({ type: "SET_NOTE", payload: text })
                    }
                />
                <Pressable
                    onPress={() => dispatch({ type: "ADD_NOTE" })}
                    style={{
                        backgroundColor: "blue",
                        padding: 10,
                        margin: 10,
                        borderRadius: 10,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Text style={{ color: "white", fontSize: 20, fontWeight: '700' }}>Add Note</Text>
                </Pressable>
                <FlatList 
                    data={state.notes}
                    renderItem={({ item }) => (
                        <NoteCard
                            note={item}
                            onDelete={(note) =>
                                dispatch({ type: "DELETE_NOTE", payload: note })
                            }
                            onUpdate={(newNote, oldNote) =>
                                dispatch({
                                    type: "UPDATE_NOTE",
                                    payload: { newNote, oldNote },
                                })
                            }
                        />
                    )}
                />
            </View>
        </SafeAreaView>
    );
};

export default NoteWithReducer;