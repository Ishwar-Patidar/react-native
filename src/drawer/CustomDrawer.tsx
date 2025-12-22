import { View, ScrollView, StyleSheet } from 'react-native';
import DrawerHeader from './DrawerHeader';
import DrawerMenu from './DrawerMenu';
import DrawerFooter from './DrawerFooter';

export default function CustomDrawer(props: any) {
  return (
    <View style={styles.container}>
      <DrawerHeader />

      {/* Scrollable Menu */}
      <ScrollView>
        <DrawerMenu navigation={props.navigation} state={props.state} />
      </ScrollView>

      {/* Fixed Footer */}
      <DrawerFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
