import React, { useState } from 'react';
import {View, Text} from 'react-native';
import AuthDetails from '../../components/auth/details';
import AuthMenu from '../../components/auth/menu';
import styles from './style';

export default function AuthScreen() {
  const [authPage, setAuthPage] = useState(0);
  const [detailsPage, setdetailsPage] = useState(false);
  return (
    <View style={styles.container}>
      {
        detailsPage ?
        <AuthDetails 
          authPage={authPage}
          setAuthPage={setAuthPage}
          detailsPage={detailsPage}
          setdetailsPage={setdetailsPage}
        />
        :
        <AuthMenu 
          authPage={authPage}
          setAuthPage={setAuthPage}
          detailsPage={detailsPage}
          setdetailsPage={setdetailsPage}/>
      }
    </View>
  );
}
