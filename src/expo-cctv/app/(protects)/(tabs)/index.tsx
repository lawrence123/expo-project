
import { AuthContext } from '@/utils/authContext';
import React, { useContext } from 'react';
import { Button, Text, View } from 'react-native';

export default function index() {
  const authContext = useContext(AuthContext);
  return (
    <View>
      <Text>Home</Text>
      <Button title="logout" onPress={authContext.logOut}/>
    </View>
  )
}