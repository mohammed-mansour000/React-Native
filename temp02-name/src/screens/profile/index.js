import React from 'react'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'
import ProfileHeader from '../../components/profile/header';
import ProfileNavbar from '../../components/profile/navBar';
import ProfilePostList from '../../components/profile/postList';
import styles from './style';

export default function ProfileScreen() {
    //get the current user from auth reducer
    //then pass it to ProfileNavbar component
    const currentUser = useSelector(state => state.auth.currentUser);
    const currentUserPosts = useSelector(state => state.posts.currentUserPosts);
    console.log(currentUserPosts)
    return (
        <View style={styles.container}>
            <ProfileNavbar user={currentUser} />
            <ProfileHeader user={currentUser} />
            <ProfilePostList posts={currentUserPosts}/>
        </View>
    )
}
