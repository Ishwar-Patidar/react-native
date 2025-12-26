import { View, Text, TouchableOpacity, StyleSheet, Alert, Button, Image } from 'react-native';
import { requestCameraPermission, requestGalleryPermission, requestVedioPermission } from '../utils/permissions';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { useState } from 'react';

export default function HomeScreen({ navigation }: any) {
  const [image, setImage] = useState<any>(null);
  const [cameraImg, setCameraImg] = useState<any>(null);

  const openCamera = async () => {
    const granted = await requestCameraPermission();

    if (!granted) {
      Alert.alert('Permission required', 'Camera permission denied');
      return;
    }

    launchCamera({ mediaType: 'photo', quality: 0.7 }, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else if (response.assets?.length) {
        const selectedImage = response.assets?.[0];
        setCameraImg(selectedImage);
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

    launchImageLibrary({ mediaType: 'photo', quality: 0.7, }, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else if (response.assets?.length) {
        const selectedImage = response.assets?.[0];
        setImage(selectedImage);
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
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Test Camera, Gallery and Vedio</Text>
        <Text>Take a picture</Text>
        {cameraImg && (
          <Image
            source={{ uri: cameraImg.uri }}
            style={styles.preview}
          />
        )}
        <Button title="Open Camera" onPress={openCamera} />

        <Text>Open Gallery</Text>
        {image && (
          <Image
            source={{ uri: image.uri }}
            style={styles.preview}
          />
        )}
        <Button title="Open Gallery" onPress={openGallery} />

        <Text>Videos</Text>
        <Button title="Open Video" onPress={openVideo} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 20,
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
  preview: {
    width: 120,
    height: 120,
    borderRadius: 8,
    marginTop: 10,
  },
});
