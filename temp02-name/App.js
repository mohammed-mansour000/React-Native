import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './src/redux/reducers';

// import firebase from 'firebase/app';
import firebase from '@react-native-firebase/app'
import Route from './src/navigation/main';

const store = createStore(rootReducer, applyMiddleware(thunk));

if (firebase.apps.length == 0) {
  firebase.initializeApp({
    apiKey: 'AIzaSyCK80NIptTIfbbMbPjJbAtS_V8RBGTEuVA',
    authDomain: 'tiktok-clone-3f721.firebaseapp.com',
    databaseURL: 'https://tiktok-clone-3f721-default-rtdb.firebaseio.com',
    projectId: 'tiktok-clone-3f721',
    storageBucket: 'tiktok-clone-3f721.appspot.com',
    messagingSenderId: '532446580589',
    appId: '1:532446580589:web:7dea8470be8a4c11af1464',
    measurementId: 'G-YW7PJNFTVJ', 
  });
}
export default function App(){
  return (
     <Provider store={store}>
      <Route />  
     </Provider>
  );
};

