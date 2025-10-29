import React, { useEffect, useState } from "react";
import { Button, Text, TextInput, View } from "react-native"
import List from "../components/List";

export const Home = (props: any) => {
  const [name, setName] = useState('');
  const [data, setData] = useState<any>(null);
  const [list, setList] = useState<any>(null);
  useEffect(() => {
    getAPIData();
    getDataList();
  }, []);

  const getAPIData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    const result = await fetch(url)
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }

    const getDataList = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const result = await fetch(url)
      .then(response => response.json())
      .then(json => setList(json))
      .catch(error => console.error(error));
  }

  return <>
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      {data && <View style={{ margin: 20, padding: 10, borderWidth: 1, borderColor: '#000' }}>
        <Text style={{ fontSize: 20, marginBottom: 20, color: "green" }}>API Called</Text>
        <Text style={{ fontSize: 20, marginBottom: 20 }}>Id : {data?.id}</Text>
        <Text style={{ fontSize: 20, marginBottom: 20 }}>User Id : {data?.userId}</Text>
        <Text style={{ fontSize: 20, marginBottom: 20 }}>Title : {data?.title}</Text>
        <Text style={{ fontSize: 20, marginBottom: 20 }}>Body : {data?.body}</Text>
      </View>}


      {list?.length > 0 && <List list={list}/>}
      <TextInput style={{ borderWidth: 2, borderRadius: 50, minWidth: 200, margin: 5, padding: 5, borderColor: "#000" }} placeholder="Enter your name" onChangeText={(text: any) => setName(text)} />
      <Button title='Go to Profile' onPress={() => props.navigation.navigate('Profile', { name })} />
    </View>
  </>
}