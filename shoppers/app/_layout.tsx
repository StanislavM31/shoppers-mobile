import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';



// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const [loaded] = useFonts({
    /* SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'), */
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    InterLight: require('../assets/fonts/Inter_18pt-Light.ttf'),
    InterMeduim: require('../assets/fonts/Inter_18pt-Medium.ttf'),
    InterBold: require('../assets/fonts/Inter_28pt-Bold.ttf'),
    InterRegular: require('../assets/fonts/Inter_24pt-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
      <Stack screenOptions={{headerShown:false}}>
        <Stack.Screen name="/" />
        <Stack.Screen name="+not-found" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="products" />
        <Stack.Screen name="detail/[id]" />
        <Stack.Screen name="basket" />
        <Stack.Screen name="user" />
      </Stack>

  );
}
