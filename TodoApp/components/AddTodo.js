import React, { useState } from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native';


function AddTodo({ addTodo }) {
    const [text, setText] = useState('')

    const changeHandler = (val) => {
        console.log(val);
        setText(val)
    }

    const submitHandler = () => {
        addTodo({ text, key: Math.floor(Math.random() * 1000).toString() });
    }
    return (
        <View>
            <TextInput 
                style={styles.input}
                placeholder='new todo...'
                onChangeText={changeHandler}
            />
            <Button 
                color="coral"
                title="add todo"
                onPress={submitHandler}
            />
        </View>
    )
}

export default AddTodo;

const styles = StyleSheet.create({
    input: {
        marginBottom: 13,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
});

