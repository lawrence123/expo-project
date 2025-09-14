import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#03284fff",
        headerStyle: {
          height: 50,
          backgroundColor: 'gray', // Change to your desired header background color
        },
                  headerTitleStyle: {
            color: 'gray', // Title text color

          },
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},

        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '主頁',


          tabBarIcon: ({ color, size }) => (<Entypo name="home" size={size} color={color} />)
        }}
      />
      <Tabs.Screen
        name="notice"
        options={{
          title: '通告',
          tabBarBadge: 2,
          tabBarBadgeStyle: {
            color: "white",
          },
          tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="note-alert" size={size} color={color} />)
        }}
      />
    </Tabs>
  );
}
