import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { Home } from './src/screens/Home';
import { Profile } from './src/screens/Profile';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
