import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { saveMediaToStorage } from '../../../services/random';
import uuid from 'uuid-random';
import storage from '@react-native-firebase/storage';
import { CURRENT_USER_POSTS_UPDATE } from '../constants';

export const createPost = (description, video, thumbnail) => dispatch => new Promise(async(resolve, reject) => {
    let storagePostId = uuid();
    let allSavePromises = Promise.all([
        saveMediaToStorage(video, `post/${auth().currentUser.uid}/${storagePostId}/video`),
        saveMediaToStorage(thumbnail, `post/${auth().currentUser.uid}/${storagePostId}/thumbnail`),        
    ])
    .then(downloadUrl => {
        console.log(downloadUrl)
        firestore()
        .collection('post')
        .add({
            creator: auth().currentUser.uid,
            downloadUrl,
            description,
            likesCount: 0,
            commentsCount: 0,
            creationDate: firestore.FieldValue.serverTimestamp() 
        }).then((res) => resolve(res))
          .catch((err) => reject(err))
    }).catch((err) => reject(err));
})


export const getPostByUser = (uid = auth().currentUser.uid) => dispatch => new Promise(async(resolve, reject) => {
    firestore()
    .collection('post')
    .where('creator', '==', uid)
    .orderBy('creationDate', 'desc')
    .onSnapshot((snapshot) => {
        let posts = snapshot.docs.map(doc => {
            const data = doc.data()
            const id = doc.id
            return {
                id,
                ...data
            }
        })
        dispatch({ type: CURRENT_USER_POSTS_UPDATE, currentUserPosts: posts });
    },
    err => {
        console.log(err)
    })
})
      


// export const createPost = (description, video) => dispatch => new Promise((resolve, reject) => {
//     saveMediaToStorage(video, `post/${auth().currentUser.uid}/${uuid()}`)
//     .then((downloadUrl) => {
//         console.log("downloadUrl", downloadUrl)
//         firestore()
//         .collection('post')
//         .add({
//             creator: auth().currentUser.uid,
//             downloadUrl,
//             description,
//             likesCount: 0,
//             commentsCount: 0,
//             creationDate: firestore.FieldValue.serverTimestamp() 
//         })
//             .then((res) => resolve(res))
//             .catch(() => {console.log("err");reject()})
//     }).catch((err) => {
//         console.log("err from adding firestore")
//     });    
// });