import firestore from '@react-native-firebase/firestore';
import { saveMediaToStorage } from './random';
import auth from '@react-native-firebase/auth';
import uuid from 'uuid-random';
import storage from '@react-native-firebase/storage';

export const newUser = (user) => {
    const ssuser = JSON.parse(JSON.stringify(user));
    console.log(ssuser.apiKey)
    return firestore()
    .collection('user')
    .doc(ssuser.uid)
    .set(ssuser)
}

export const saveUserProfileImage = (image) => new Promise((resolve, reject) => {
    saveMediaToStorage(image, `profileImage/${auth().currentUser.uid}`)
    .then((url) => {
        console.log(url)
        firestore()
        .collection('user')
        .doc(auth().currentUser.uid)
        .update({
            photoURL: url
        })
        .then((res) => resolve(res))
        .catch((err) => reject(err));
        
    }).catch((err) => {
        reject(err)
    });
});

export const saveUserField = (field, value) => new Promise((resolve, reject) => {
    let obj = {};
    obj[field] = value;
    firestore()
    .collection('user')
    .doc(auth().currentUser.uid)
    .update(obj)
    .then((res) => resolve(res))
    .catch((err) => reject(err));
});