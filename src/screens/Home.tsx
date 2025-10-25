import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native"

export const Home = (props: any) => {
    const [name, setName] = useState('');
      console.warn(name);
  return <>
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <TextInput style={{borderWidth: 2, borderRadius:50, minWidth:200, margin:5, padding:5, borderColor:"#000"}} placeholder="Enter your name" onChangeText={(text: any) => setName(text)}/>
      <Button title='Go to Profile' onPress={() => props.navigation.navigate('Profile', {name})} />
    </View>
  </>
}