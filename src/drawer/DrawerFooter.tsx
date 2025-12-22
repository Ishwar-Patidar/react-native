import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function DrawerFooter() {
  return (
    <View style={styles.footer}>
      <TouchableOpacity>
        <Text style={styles.logout}>Logout</Text>
      </TouchableOpacity>
      <Text style={styles.version}>v1.0.0</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    borderTopWidth: 1,
    borderColor: '#e5e7eb',
    padding: 16,
  },
  logout: {
    color: '#dc2626',
    fontWeight: '500',
  },
  version: {
    marginTop: 8,
    fontSize: 12,
    color: '#9ca3af',
  },
});
