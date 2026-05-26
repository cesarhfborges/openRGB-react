import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ConnectionScreen} from '../screens/ConnectionScreen';

const Stack = createNativeStackNavigator();

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