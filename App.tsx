import React from 'react';
import {useFonts} from 'expo-font';
import {Spinner, TamaguiProvider, Theme, View} from 'tamagui';
import config from './tamagui.config';
import {NavigationContainer} from "@react-navigation/native";
import {AppNavigator} from "./src/navigation";
import {useColorScheme} from "react-native";
import {AuthProvider} from "./src/contexts/AuthContext";

// Importação da sua tela (seja via Expo Router ou componente local)
// import MainScreen from './src/screens/MainScreen';

export default function App() {

    const colorScheme = useColorScheme();
    const currentTheme = colorScheme === 'dark' ? 'dark' : 'light';

    const [loaded] = useFonts({
        Inter: require('@tamagui/font-inter/otf/Inter-Regular.otf'),
        InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
    });

    if (!loaded) {
        return (
            <TamaguiProvider config={config} defaultTheme={currentTheme}>
                <Theme name={currentTheme}>
                    <View flex={1} backgroundColor="$background" justifyContent="center" alignItems="center">
                        <Spinner size="large" color="$color"/>
                    </View>
                </Theme>
            </TamaguiProvider>
        );
    }

    return (
        <TamaguiProvider config={config} defaultTheme={currentTheme}>
            <Theme name={currentTheme}>
                <AuthProvider>
                    <NavigationContainer>
                        <AppNavigator/>
                    </NavigationContainer>
                </AuthProvider>
            </Theme>
        </TamaguiProvider>
    );
}