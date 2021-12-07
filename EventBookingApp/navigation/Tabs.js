import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Featured, Schedule, Tickets, Mine } from '../screens';
import { COLORS, SIZES, FONTS, icons } from '../constants';
import { McText, McIcon } from '../components';

const Tab = createBottomTabNavigator();

const TabIcon = ({ focused, icon }) => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <McIcon
        size={focused ? 24 : 32}
        source={icon}
        resizeMode="contain"
        style={{
          tintColor: focused ? COLORS.white : COLORS.gray,
          // tintColor: COLORS.black,
          marginBottom: focused ? 15: 0 
        }}
      />
    </View>
  );
};
const TabLabel = ({ focused, text }) => {
  return focused ? (
    <McText
      h5
      style={{
        marginTop: -25,
        // paddingBottom: 10,
        color: COLORS.white
      }}
    >
      {text}
    </McText>
  ) : (
    <View />
  );
};

const Tabs = ({ params }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        style: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: COLORS.tabBar,
          opacity: 0.9,
          borderTopColor: COLORS.tabBar,
          height: 111,
          borderRadius: SIZES.radius,
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Featured"
        component={Featured}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.tab_1}/>
          ),
          tabBarLabel: ({ focused }) => (
            <TabLabel focused={focused} text="Featured" />
          ),
          tabBarStyle: {
            backgroundColor: COLORS.tabBar,
            borderTopColor: COLORS.tabBar
          }
        }}
      />
      <Tab.Screen
        name="Schedule"
        component={Schedule}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.tab_2} />
          ),
          tabBarLabel: ({ focused }) => (
            <TabLabel focused={focused} text="Schedule" />
          ),
          tabBarStyle: {
            backgroundColor: COLORS.tabBar,
            borderTopColor: COLORS.tabBar
          }
        }}
      />
      <Tab.Screen
        name="Tickets"
        component={Tickets}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.tab_3} />
          ),
          tabBarLabel: ({ focused }) => (
            <TabLabel focused={focused} text="Tickets" />
          ),
          tabBarStyle: {
            backgroundColor: COLORS.tabBar,
            borderTopColor: COLORS.tabBar
          }
        }}
      />
      <Tab.Screen
        name="Mine"
        component={Mine}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.tab_4} />
          ),
          tabBarLabel: ({ focused }) => (
            <TabLabel focused={focused} text="Mine" />
          ),
          tabBarStyle: {
            backgroundColor: COLORS.tabBar,
            borderTopColor: COLORS.tabBar
          }
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
