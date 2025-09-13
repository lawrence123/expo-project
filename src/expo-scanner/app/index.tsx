import { useCameraPermissions } from "expo-camera";
import { Link, Stack } from "expo-router";
import { useEffect } from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
    const [permission, requestPermission] = useCameraPermissions();
    const isPermissionGranted = Boolean(permission?.granted);

    useEffect(() => {
        // Automatically request permission on mount
        const requestCameraPermission = async () => {
            if (permission === null) {
                const { status } = await requestPermission();
                console.log('Camera permission status:', status);
            }
        };

        requestCameraPermission();
    }, [permission, requestPermission]);

    const handleRequestPermission = async () => {
        const { status } = await requestPermission();
        if (status !== 'granted') {
            Alert.alert(
                "Permission Denied",
                "Camera access is required to use this feature.",
                [{ text: "OK" }]
            );
        }
    };

    return (
        <View style={styles.container}>
            <Stack.Screen options={{ title: "Overview", headerShown: false }} />
            <Text style={styles.title}>QR Code Scanner</Text>
            <View style={{ gap: 20 }}>
                <Pressable onPress={handleRequestPermission}>
                    <Text style={styles.buttonStyle}>Request Permissions</Text>
                </Pressable>
                <Link href={"/scanner"} asChild>
                    <Pressable disabled={!isPermissionGranted}>
                        <Text
                            style={[
                                styles.buttonStyle,
                                { opacity: !isPermissionGranted ? 0.5 : 1 },
                            ]}
                        >
                            Scan Code
                        </Text>
                    </Pressable>
                </Link>
            </View>
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
        color: "#000",  // Changed to black for visibility
        fontSize: 40,
    },
    buttonStyle: {
        color: "#0E7AFE",
        fontSize: 20,
        textAlign: "center",
    },
});