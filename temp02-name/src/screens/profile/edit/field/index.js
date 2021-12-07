import React, { useState } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { Divider, TextInput } from 'react-native-paper';
import NavBarGeneral from '../../../../components/general/navbar';
import styles from './style';
import { generalStyles } from '../../../../styles/index'
import { saveUserField } from '../../../../../services/user';
import { useNavigation } from '@react-navigation/core';

export default function EditProfileFieldScreen({ route }) {
    const { title, field, value } = route.params;
    const [textInputVal, setTextInputVal] = useState(value);
    const navigation = useNavigation();

    const onSave = () => {
        saveUserField(field, textInputVal)
        .then((result) => navigation.goBack())
        .catch((err) => {console.log(err)});
    }
    return (
        <SafeAreaView style={styles.container}>
            <NavBarGeneral title={title} leftButton={{display: true, name: "check", action: onSave}}/>
            
            <Divider />

            <View style={styles.mainContainer}>
                <Text  style={styles.title}>{title}</Text>
                <TextInput 
                    style={generalStyles.textInput}
                    value={textInputVal}
                    onChangeText={(val) => setTextInputVal(val)}
                />
            </View>
            
        </SafeAreaView>
    )
}
