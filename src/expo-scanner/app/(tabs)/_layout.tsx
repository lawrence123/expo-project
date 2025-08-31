import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';



export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{

        headerShown: true,

        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="scanner"
        options={{
          title: 'scanner',

        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',

        }}
      />
    </Tabs>
  );
}
