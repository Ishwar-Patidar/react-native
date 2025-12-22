import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const MENU = [
  { label: 'Home', route: 'Home' },
  { label: 'List', route: 'List' },
  { label: 'Profile', route: 'Profile' },
  { label: 'Settings', route: 'Settings' },
];

export default function DrawerMenu({ navigation, state }: any) {
  const activeRoute = state.routeNames[state.index];

  return (
    <View>
      {MENU.map((item) => {
        const isActive = item.route === activeRoute;

        return (
          <TouchableOpacity
            key={item.route}
            style={[
              styles.item,
              isActive && styles.activeItem,
            ]}
            onPress={() => {
              navigation.navigate(item.route);
              navigation.closeDrawer();
            }}
          >
            <Text style={[styles.text, isActive && styles.activeText]}>
              {item.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    paddingVertical: 14,
    paddingHorizontal: 20,
  },
  activeItem: {
    backgroundColor: '#e0e7ff',
  },
  text: {
    fontSize: 15,
    color: '#374151',
  },
  activeText: {
    fontWeight: '600',
    color: '#1e40af',
  },
});
