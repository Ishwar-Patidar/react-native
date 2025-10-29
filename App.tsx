import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { Home } from './src/screens/Home';
import { Profile } from './src/screens/Profile';

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator
        screenOptions={
          {
            // headerShown: false
            headerStyle: { backgroundColor: '#f4511e' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
          }
        }
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile}
          options={{
            // headerShown: false
            // title: 'My Profile',
            headerTitle: () => <Text style={{ color: '#d6d6d6ff', fontSize: 20, fontWeight: 'bold' }}>Profile Page</Text>,
            headerRight: () => <TextInput style={{ height: 35, width: 100, borderColor: 'gray', borderWidth: 1, paddingHorizontal: 5, backgroundColor:"#fff", color: "#000", textAlign: "center", textAlignVertical:"bottom" }} placeholder='Search' />,
            // headerBackTitle: 'Back to Home',
            headerStyle: { backgroundColor: '#777777ff' },
            headerTintColor: '#d6d6d6ff',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />
      </Stack.Navigator> */}

      <Tab.Navigator>
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Register" component={Register} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const Login = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Login Screen</Text>
      <Button title="Go to Home" onPress={() => { }} />
    </View>
  );
}

const Register = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Register</Text>
      <Button title="Go to Home" onPress={() => { }} />
    </View>
  );
}

export default App;
