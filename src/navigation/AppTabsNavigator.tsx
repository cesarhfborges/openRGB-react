// navigation/AppTabsNavigator.tsx

import {createBottomTabNavigator,} from '@react-navigation/bottom-tabs';

import {HomeScreen} from '../screens/HomeScreen';

const Tab =
    createBottomTabNavigator();

export function AppTabsNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
            />
        </Tab.Navigator>
    );
}