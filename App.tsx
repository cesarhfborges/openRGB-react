import React from 'react';
import { useFonts } from 'expo-font';
import {Theme, View, Spinner, TamaguiProvider} from 'tamagui';
import config from './tamagui.config';

// Importação da sua tela (seja via Expo Router ou componente local)
// import MainScreen from './src/screens/MainScreen';

export default function App() {
    const [loaded] = useFonts({
        Inter: require('@tamagui/font-inter/otf/Inter-Regular.otf'),
        InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
    });

    if (!loaded) {
        return (
            // Adicionado defaultTheme="dark" aqui
            <TamaguiProvider config={config} defaultTheme="dark">
                <Theme name="dark">
                    <View flex={1} backgroundColor="$background" justifyContent="center" alignItems="center">
                        <Spinner size="large" color="$color" />
                    </View>
                </Theme>
            </TamaguiProvider>
        );
    }

    return (
        // E adicionado defaultTheme="dark" aqui também
        <TamaguiProvider config={config} defaultTheme="dark">
            <Theme name="dark">

                {/* Seu container ou telas aqui */}

            </Theme>
        </TamaguiProvider>
    );
}