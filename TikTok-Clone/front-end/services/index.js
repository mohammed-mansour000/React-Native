import firestore from '@react-native-firebase/firestore';


exports.newUser = (user) => {
    const ssuser = JSON.parse(JSON.stringify(user));
    console.log(ssuser.apiKey)
    return firestore()
    // .doc("user/" + user.uid)
    // .set(
    //     Object.assign({}, ssuser)
    //   );
    .collection('user')
    .doc(ssuser.uid)
    .set(ssuser)
}