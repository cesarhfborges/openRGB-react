import React from 'react'
import {Button, ScrollView, Text, YStack} from 'tamagui'
import {useAuth} from "../contexts/AuthContext";
import {useSafeAreaInsets} from "react-native-safe-area-context";

export function HomeScreen({navigation}: any) {
    const safe = useSafeAreaInsets();

    const auth = useAuth();
    return (
        <YStack
            flex={1}
            backgroundColor="$background"
        >
            <ScrollView flex={1} paddingTop={safe.top}>
                <YStack flex={1} paddingBottom={safe.bottom + 140}>


                    {Array.from({ length: 80 }).map((_, i) => (
                        <Text key={i}>Teste {i}</Text>
                    ))}

                    <Button onPress={() => auth.logout()}>Go Connection</Button>
                </YStack>
            </ScrollView>
        </YStack>
    )
}