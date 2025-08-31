import { Overlay } from "@/components/overlay";
import { CameraView } from 'expo-camera';
import React, { useEffect, useRef } from 'react';
import { AppState, Linking, Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
export default function ScannerScreen() {
  const qrLock = useRef(false);
  const appState = useRef(AppState.currentState);
  useEffect(() => {
    const subscription = AppState.addEventListener("change", (nextAppState) => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === "active"
      ) {
        qrLock.current = false;
      }

      appState.current = nextAppState;
    });

    return () => {
      subscription.remove();
    }
  }, [])
  return (
    <View style={styles.container}>
      <Text>Hello scanner</Text>
      {Platform.OS === 'android' ? <StatusBar hidden /> : null}
      <CameraView
        style={StyleSheet.absoluteFillObject}
        facing="back"
        onBarcodeScanned={({ data }) => {
          console.log(data);
          if (data && !qrLock.current) {
            qrLock.current = true;
            setTimeout(async () => {
              await Linking.openURL(data);
            }, 500);
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
    backgroundColor: "#fff",
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