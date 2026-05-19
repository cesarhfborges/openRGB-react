import React from 'react'
import {Button, Text, YStack} from 'tamagui'

export function HomeScreen({navigation}: any) {

    return (
        <YStack
            flex={1}
            backgroundColor="$background"
        >
            <Text>Teste</Text>
            <Button onPress={() => navigation.navigate('Connection')}>Go Connection</Button>
        </YStack>
    )
}