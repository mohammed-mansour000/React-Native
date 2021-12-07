import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  const [name, setName] = useState('hamzi');
  const [age, setAge] = useState('21');
  const [people, setpeople] = useState([
    { id: 1, name: 'name01' },
    { id: 2, name: 'name02' },
    { id: 3, name: 'name03' },
    { id: 4, name: 'name04' },
    { id: 5, name: 'name05' },
    { id: 6, name: 'name05' },
    { id: 7, name: 'name05' },
    { id: 8, name: 'name05' },
    { id: 9, name: 'name05' },
  ])

  const  handleClick = () => {
    setName('mohammed');
  }
  const handleChange = (val) => {
    console.log(val);
    setName(val)
  }

  const pressHandler = (itemId) => {
    console.log(itemId);
    setpeople((prevPeople) => {
      return prevPeople.filter(e => e.id != itemId);
    })
  }
  return (
    <View style={styles.container}>
      {/* <View>
        <Text style={styles.boldText}>Enter Name: </Text>
        <TextInput 
          style={styles.input}
          placeholder='e.g John Dee'
          placeholderTextColor="#999"
          onChangeText={(val) => setName(val)} 
        />
        <Text style={styles.boldText}>Enter Age: </Text>
        <TextInput 
          keyboardType='numeric'
          style={styles.input}
          placeholder='age'
          placeholderTextColor="#999"
          onChangeText={(val) => setAge(val)} 
        />
        <Text style={styles.boldText}>name: {name}, age: {age}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button  onPress={handleClick} title='update name'/>  
      </View> 
      <StatusBar style="auto" /> */}

      {/* -------------------------------------------------------- */}

      {/* <ScrollView>
      {
        people.map((item, index) => (
          <View key={index}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        ))
      }
      </ScrollView> */}

      {/* -------------------------------------------------------- */}
      {/* better for performance */}
      <FlatList 
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => ( 
          <TouchableOpacity onPress={ () => pressHandler(item.id) }>
              <Text style={styles.item}>{item.name}</Text>
            </TouchableOpacity>
         )}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    padding: 15,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  header: {
    backgroundColor: 'purple',
    padding: 20
  },
  boldText: {
    fontWeight : 'bold',
    color: "white"
  },
  buttonContainer: {
    marginTop: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    marginTop: 8,
    marginBottom: 8,
    width: 200,
    color: '#fff'
  },
  item: {
    padding: 25,
    color: "#fff",
    fontSize: 24,
    margin: 10,
    backgroundColor: '#74b9ff'
  }
});
