
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Dimensions } from 'react-native';
import CustomDrawer from '../drawer/CustomDrawer';
import HomeScreen from '../screens/HomeScreen';
import { Home } from '../screens/Home';
import { Profile } from '../screens/Profile';
import AddProfileFormScreen from '../screens/AddProfileFormScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        drawerStyle: {
          width: Dimensions.get('window').width * 0.75,
        },
      }}
      drawerContent={(props: any) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen name="Home" component={HomeScreen}  />
      <Drawer.Screen name="List" component={Home}  />
      <Drawer.Screen name="Profile" component={Profile} initialParams={{ name: 'Ishwar' }} />
      <Drawer.Screen name="AddProfileForm" component={AddProfileFormScreen} />
      {/* <Drawer.Screen name="Settings" component={FormScreen} /> */}
    </Drawer.Navigator>
  );
}
