import React, { useState } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Image } from 'react-native';
//navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

//screens
import About from './screens/about';
import Home from './screens/home';
import ReviewDetails from './screens/reviewDetails';
import Header from './shared/header';

//fonts
const getFonts = () => {
  return Font.loadAsync({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
  })
}

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  const [fontsLoaded, setfontsLoaded] = useState(false);

  if(fontsLoaded) {
    return (
      // <NavigationContainer>
      //   <Stack.Navigator>
      //     <Stack.Screen 
      //         name="Home"
      //         component={Home} 
      //         options={{
      //           headerStyle: {
      //             backgroundColor: 'skyblue',
      //           },
      //           headerTintColor: '#fff',
      //           headerTitleStyle: {
      //             fontWeight: 'bold',
      //           },
      //         }}
      //     />
      //     <Stack.Screen 
      //         name="Review Details" 
      //         component={ReviewDetails} 
      //         options={{
      //           headerStyle: {
      //             backgroundColor: 'skyblue',
      //           },
      //           headerTintColor: '#fff',
      //           headerTitleStyle: {
      //             fontWeight: 'bold',
      //           },
      //         }}
      //     />
      //     <Stack.Screen 
      //         name="About" 
      //         component={About} 
      //         options={{
      //           headerTitle: () => <Image
      //           style={{ width: 50, height: 50 }}
      //           source={require('./assets/favicon.png')}
      //         />,
      //         }}
      //         />
      //   </Stack.Navigator>
      // </NavigationContainer>

      <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen 
              name="Home"
              component={Home} 
              options={{
                headerTitle: () => <Header />,
                headerStyle: {
                  backgroundColor: 'skyblue',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
          />
          <Drawer.Screen 
              name="Review Details" 
              component={ReviewDetails} 
              options={{
                headerStyle: {
                  backgroundColor: 'skyblue',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
          />
          <Drawer.Screen 
              name="About" 
              component={About} 
              options={{
                headerTitle: () => <Image
                style={{ width: 50, height: 50 }}
                source={require('./assets/favicon.png')}
              />,
              }}
              />
      </Drawer.Navigator>
    </NavigationContainer>
    );
  }else{
    return (
      <AppLoading 
        startAsync={getFonts}
        onFinish={() => {setfontsLoaded(true); console.log("loaded")}}
        onError={console.warn}
      />
    )
  }
}