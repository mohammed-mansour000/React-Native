import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { newUser } from '../../../services/';
import { USER_STATE_CHANGE } from '../constants';


export const userAuthStateListener = () => dispatch => {
    auth().onAuthStateChanged((user) => {
        if(user) {
            console.log("hello")
            dispatch(getCurrentUserData());
        }else {
            console.log("hi")
            dispatch({ type: USER_STATE_CHANGE, currentUser: null, loaded: true});
        }
    });
}

export const getCurrentUserData = () => dispatch => {
    firestore()
    .collection('user')
    .doc(auth().currentUser.uid)
    .onSnapshot((res) =>{
        if(res.exists){
            return dispatch({
                type: USER_STATE_CHANGE,
                currentUser: res.data(),
                loaded: true
            })
        }else{
            console.log("user no exit")
        }
    })
}

export const login = (email, password) => dispatch => new Promise((resolve, reject) => {
    auth()
    .signInWithEmailAndPassword(email, password)
    .then((result) => {
        console.log(result)
        resolve();
    }).catch((err) => {
        console.log(err);
        reject();
    });
    auth().onAuthStateChanged
});

export const register = (email, password) => dispatch => new Promise((resolve, reject) => {
    auth()
    .createUserWithEmailAndPassword(email, password)
    .then((result) => {
        console.log(result);
        newUser(result.user)
        .then((res) => {
            console.log("from new User",res)
        }).catch((err) => {
            console.log(err)      
        });
        resolve();
    }).catch((err) => {
        console.log(err);
        reject();
    });
});