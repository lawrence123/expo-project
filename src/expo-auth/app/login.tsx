import { AuthContext } from '@/utils/authContext';
import { Redirect } from 'expo-router';
import React, { useContext } from 'react';
import { Button, Text, View } from 'react-native';

export default function login() {
    const authContext = useContext(AuthContext);

      if(authContext.isLoggedIn){
        return <Redirect href="/"/>;
      }
  return (
    <View className='flex-1 justify-center'>
      <Text>login</Text>
    <Button title="login" onPress={()=>authContext.logIn("123abcddd")} />
    </View>
  )
}