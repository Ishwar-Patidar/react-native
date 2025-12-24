import { Platform } from 'react-native';
import {
  check,
  request,
  PERMISSIONS,
  RESULTS,
  openSettings,
} from 'react-native-permissions';

export const requestCameraPermission = async () => {
  const permission =
    Platform.OS === 'android'
      ? PERMISSIONS.ANDROID.CAMERA
      : PERMISSIONS.IOS.CAMERA;

  const status = await check(permission);

  if (status === RESULTS.GRANTED) {
    return true;
  }

  if (status === RESULTS.DENIED) {
    const result = await request(permission);
    return result === RESULTS.GRANTED;
  }

  if (status === RESULTS.BLOCKED) {
    openSettings();
    return false;
  }

  return false;
};

export const requestGalleryPermission = async () => {
  const permission =
    Platform.OS === 'android'
      ? PERMISSIONS.ANDROID.READ_MEDIA_IMAGES
      : PERMISSIONS.IOS.PHOTO_LIBRARY;

  const status = await check(permission);

  if (status === RESULTS.GRANTED) {
    return true;
  }

  if (status === RESULTS.DENIED) {
    const result = await request(permission);
    return result === RESULTS.GRANTED;
  }

  if (status === RESULTS.BLOCKED) {
    openSettings();
    return false;
  }

  return false;
};


export const requestVedioPermission = async () => {
  const permission =
    Platform.OS === 'android'
      ? PERMISSIONS.ANDROID.READ_MEDIA_VIDEO
      : PERMISSIONS.IOS.PHOTO_LIBRARY;

  const status = await check(permission);

  if (status === RESULTS.GRANTED) {
    return true;
  }

  if (status === RESULTS.DENIED) {
    const result = await request(permission);
    return result === RESULTS.GRANTED;
  }

  if (status === RESULTS.BLOCKED) {
    openSettings();
    return false;
  }

  return false;
};
