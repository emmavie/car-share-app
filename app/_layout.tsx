import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

import { useColorScheme } from "@/components/useColorScheme";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "index",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    karlaB: require("../assets/fonts/Karla-Bold.ttf"),
    karlaBI: require("../assets/fonts/Karla-BoldItalic.ttf"),
    karlaEB: require("../assets/fonts/Karla-ExtraBold.ttf"),
    karlaEBI: require("../assets/fonts/Karla-ExtraBoldItalic.ttf"),
    karlaEL: require("../assets/fonts/Karla-ExtraLight.ttf"),
    karlaELI: require("../assets/fonts/Karla-ExtraLightItalic.ttf"),
    karlaI: require("../assets/fonts/Karla-Italic.ttf"),
    karlaL: require("../assets/fonts/Karla-Light.ttf"),
    karlaLI: require("../assets/fonts/Karla-LightItalic.ttf"),
    karlaM: require("../assets/fonts/Karla-Medium.ttf"),
    karlaMI: require("../assets/fonts/Karla-MediumItalic.ttf"),
    karlaR: require("../assets/fonts/Karla-Regular.ttf"),
    karlaSB: require("../assets/fonts/Karla-SemiBold.ttf"),
    karlaSBI: require("../assets/fonts/Karla-SemiBoldItalic.ttf"),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  // const colorScheme = useColorScheme();

  return (
    // <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="onboarding/signUp" options={{ headerShown: false }} />
      <Stack.Screen name="onboarding/logIn" options={{ headerShown: false }} />
      <Stack.Screen
        name="onboarding/basicInfo"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="onboarding/membership"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="onboarding/paymentInfo"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="onboarding/termsAndConditions"
        options={{ headerShown: false }}
      />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="modal" options={{ presentation: "modal" }} />
    </Stack>
    // </ThemeProvider>
  );
}
