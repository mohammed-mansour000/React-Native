import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, ToastAndroid, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';
import Sandbox from './components/Sandbox';

export default function App() {
  const [todos, settodos] = useState([
    { text: 'buy coffee', key: "1" },
    { text: 'create an app', key: "2" },
    { text: 'play on switch', key: "3" },
    { text: 'Boxing Training', key: "4" },
  ])

  const pressHandler = (key) => {
    console.log(key);
    settodos(prevTodo => {
      return prevTodo.filter(t => t.key != key)
    });
    showToast('Deleted successfully!')
  }

  const addTodo = (todo) => {
    console.log(todo);
    if(todo.text.length > 3){
      settodos([
        todo,
        ...todos
      ]);
      showToast('Added successfully!')
    }else if(todo.text.length <= 3 && todo.text.length > 0){
      Alert.alert('OOPS', 'Todos must be over 3 chars long', [
        { text: 'Understood', onPress: () => console.log('alert closed') }
      ])
    }else{
      showToast('Please Fill the Field!')
    }
  }

  function showToast(message) {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
        {/* header */}
        <Header />
        <View style={styles.content}>
          {/* to form */}
          <AddTodo addTodo={addTodo} />
          <View style={styles.list}>
            <FlatList 
              data={todos}
              renderItem={({item}) => (
                <TodoItem  item={item} pressHandler={(key) => pressHandler(key)} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
    // <Sandbox />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    flex: 1
  },
  list: {
    marginTop: 20,
    flex: 1
  }
});
