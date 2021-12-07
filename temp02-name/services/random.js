import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export const saveMediaToStorage = (media, path) => new Promise((resolve, reject) => {
    const fileRef = storage().ref().child(path);
    fetch(media)
        .then(response => response.blob())
        .then(blob => fileRef.put(blob))
        .then(task => fileRef.getDownloadURL())
        .then(downloadUrl => {console.log("finished downloading");resolve(downloadUrl)})
        .catch(() => reject());

    // const fileRef = storage().ref().child(path);
    // fetch(media)
    //     .then(response => response.blob())
    //     .then(blob => fileRef.put(blob)).then(res => {
    //         fileRef.getDownloadURL().then(downloadUrl => { //now set the post in cloudfirestore
    //             console.log("downloadUrl", downloadUrl)
    //                         firestore()
    //                         .collection('post')
    //                         .add({
    //                             creator: auth().currentUser.uid,
    //                             downloadUrl,
    //                             description,
    //                             likesCount: 0,
    //                             commentsCount: 0,
    //                             creationDate: firestore.FieldValue.serverTimestamp() 
    //                         }).then((res) => resolve(res))
    //                           .catch((err) => reject(err))
    //                     })
    //     })
});