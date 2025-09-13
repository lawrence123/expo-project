import { Overlay } from '@/components/overlay';
import { AuthContext } from '@/utils/authContext';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { Link, Redirect } from "expo-router";
import React, { useContext, useEffect, useRef } from 'react';
import { Alert, AppState, Platform, StatusBar, StyleSheet, Text, View } from 'react-native';

export default function ScannerScreen() {
  // useEffect(() => {
    
  //   const subscription = AppState.addEventListener("change", (nextAppState) => {
  //     if (
  //       appState.current.match(/inactive|background/) &&
  //       nextAppState === "active"
  //     ) {
  //       qrLock.current = false;
  //     }
  //     appState.current = nextAppState;
  //   });

  //   return () => {
  //     subscription.remove();
  //   };
  // }, []);
    const [permission, requestPermission] = useCameraPermissions();
    const isPermissionGranted = Boolean(permission?.granted);
    useEffect(() => {
      const requestCameraPermission = async () => {
        if (permission === null) {
          const { status } = await requestPermission();
          console.log('Camera permission status:', status);
          if (status === 'granted') {
            // Redirect to /scanner if permission is granted
            navigateToScanner();
          } else {
            Alert.alert(
              "Permission Denied",
              "Camera access is required to use this feature.",
              [{ text: "OK" }]
            );
          }
        }
      };
  
      requestCameraPermission();
    }, [permission, requestPermission]);
  
    const navigateToScanner = () => {
      // Navigate to the scanner page if permission is granted
      if (isPermissionGranted) {
        // Use the router's Link component or any navigation method you prefer
        // Assuming you are using expo-router
        return <Link href="/scanner" />;
      }
    };
  
    const handleRequestPermission = async () => {
      const { status } = await requestPermission();
      if (status === 'granted') {
        // Redirect to /scanner if permission is granted
        navigateToScanner();
      } else {
        Alert.alert(
          "Permission Denied",
          "Camera access is required to use this feature.",
          [{ text: "OK" }]
        );
      }
    };
  const qrLock = useRef(false);
  const appState = useRef(AppState.currentState);
  const authContext = useContext(AuthContext);
  // Early return for redirection

  if (authContext.isLoggedIn) {
    return <Redirect href="/" />;
  }


  return (
    <View style={styles.container}>
      <Text>Hello scanner</Text>
      {Platform.OS === 'android' && <StatusBar hidden />}
      <CameraView
        style={StyleSheet.absoluteFillObject}
        facing="back"
        onBarcodeScanned={({ data }) => {
          if (data==="http://en.m.wikipedia.org" && !qrLock.current) {
            qrLock.current = true;
            setTimeout(async () => {
              authContext.logIn(data);
            }, 500);
          }else{
            console.log(data,": no");
          }
        }}
      />
      <Overlay />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#000000ff",
    justifyContent: "space-around",
    paddingVertical: 80,
  },
  title: {
    color: "white",
    fontSize: 40,
  },
  buttonStyle: {
    color: "#0E7AFE",
    fontSize: 20,
    textAlign: "center",
  },
});