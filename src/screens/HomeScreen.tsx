import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      {/* <TouchableOpacity
        style={styles.menu}
        onPress={() => navigation.openDrawer()}
      >
        <Text style={{ fontSize: 22 }}>☰</Text>
      </TouchableOpacity> */}

      <View>
        <Text>Hello</Text>
      </View>

      <Text style={styles.text}>Home Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menu: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
  },
});
