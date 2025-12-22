import { View, Text, StyleSheet, Image } from 'react-native';

export default function DrawerHeader() {
  return (
    <View style={styles.header}>
      <Image
        source={{ uri: 'https://i.pravatar.cc/100' }}
        style={styles.avatar}
      />
      <Text style={styles.name}>Ishwar Patidar</Text>
      <Text style={styles.email}>ishwar@email.com</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    backgroundColor: '#1e40af',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 10,
  },
  name: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  email: {
    color: '#dbeafe',
    fontSize: 13,
  },
});
