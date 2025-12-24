import { View, Text, TouchableOpacity, StyleSheet, Alert, Button } from 'react-native';
import { requestCameraPermission, requestGalleryPermission, requestVedioPermission } from '../utils/permissions';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

export default function HomeScreen({ navigation }: any) {
  const openCamera = async () => {
    const granted = await requestCameraPermission();

    if (!granted) {
      Alert.alert('Permission required', 'Camera permission denied');
      return;
    }

    launchCamera({ mediaType: 'photo' }, response => {
      if (response.assets?.length) {
        console.log(response.assets[0].uri);
      }
    });
  };

  const openGallery = async () => {
    const granted = await requestGalleryPermission();

    if (!granted) {
      Alert.alert('Permission required', 'Gallery permission denied');
      return;
    }

    launchImageLibrary({ mediaType: 'photo' }, response => {
      if (response.assets?.length) {
        console.log(response.assets[0].uri);
      }
    });
  };

  const openVideo = async () => {
    const granted = await requestVedioPermission();

    if (!granted) {
      Alert.alert('Permission required', 'Video permission denied');
      return;
    }

    launchImageLibrary({ mediaType: 'video' }, response => {
      if (response.assets?.length) {
        console.log(response.assets[0].uri);
      }
    });
  };

  return (
    <View style={styles.container}>
      {/* <TouchableOpacity
        style={styles.menu}
        onPress={() => navigation.openDrawer()}
      >
        <Text style={{ fontSize: 22 }}>☰</Text>
      </TouchableOpacity> */}

      <View style={{ gap: 20 }}>
        <Text>Hello</Text>
        <Button title="Open Camera" onPress={openCamera} />

        <Text>Hello</Text>
        <Button title="Open Gallery" onPress={openGallery} />

        <Text>Hello</Text>
        <Button title="Open Video" onPress={openVideo} />
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
