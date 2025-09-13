
import { AuthProvider } from '@/utils/authContext';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import 'react-native-reanimated';


export default function RootLayout() {

    const [loaded] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    });

    if (!loaded) {
        // Async font loading only occurs in development.
        return null;
    }

    return (
        // options={{ headerShown: false }}
        <AuthProvider>
            <Stack>
                <Stack.Screen name="(protects)"options={{animation:"none",headerShown: false}}/>
                <Stack.Screen name="login" options={{animation:"none"}}/>
            </Stack>
        </AuthProvider>
    );
}
