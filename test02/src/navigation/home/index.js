import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import CameraScreen from '../../screens/camera'

const Tab = createMaterialBottomTabNavigator();

const EmptyScreen = () => {
    return (
        <View></View>
    )
}
export default function HomeScreen() {
    return (
        <Tab.Navigator
            barStyle={{
                backgroundColor: 'black'
            }}
            initialRouteName="feed"
        >
            <Tab.Screen 
                name="Feed"
                component={EmptyScreen}
               options={{
                   tabBarIcon: ({ color }) => (
                        <Icon size={24} color={color} name="home" />
                   ),
                   
               }}
            />
            <Tab.Screen 
                name="Discover"
                component={EmptyScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                         <Icon size={24} color={color} name="search" />
                    ),
                    
                }}
            />
            <Tab.Screen 
                name="Add"
                component={CameraScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                         <Icon size={24} color={color} name="plus-square" />
                    ),
                    
                }}
            />
            <Tab.Screen 
                name="Inbox"
                component={EmptyScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                         <Icon size={24} color={color} name="message" />
                    ),
                    
                }}
            />
            <Tab.Screen 
                name="Me"
                component={EmptyScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                         <Icon size={24} color={color} name="user" />
                    ),
                    
                }}
            />
        </Tab.Navigator>
    )
}
