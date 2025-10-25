import { Button, Text, View } from "react-native"

export const Profile = (props: any) => {
    console.warn(props.route.params);
    const { name } = props.route.params;
  return <>
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <Text style={{margin: 10, padding: 10}}>My name is : {name}</Text>
      <Button title='Go to Home' onPress={() => props.navigation.navigate('Home')} />
    </View>
  </>
}