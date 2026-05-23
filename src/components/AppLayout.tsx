import {PropsWithChildren} from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';
import {YStack} from 'tamagui';

export function AppLayout({children}: PropsWithChildren) {
    return (
        <YStack
            flex={1}
            backgroundColor="$background"
        >
            <KeyboardAvoidingView
                style={{flex: 1}}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            >
                {children}
            </KeyboardAvoidingView>
        </YStack>
    );
}