import { createNativeStackNavigator }
    from '@react-navigation/native-stack';

import { ConnectionScreen }
    from '../screens/ConnectionScreen';

export type AuthStackParamList = {
    Connection: undefined;
};

const Stack =
    createNativeStackNavigator<AuthStackParamList>();

export function AuthNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen
                name="Connection"
                component={ConnectionScreen}
            />
        </Stack.Navigator>
    );
}