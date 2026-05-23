import {createBottomTabNavigator,} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../screens/HomeScreen';
import {AppTabBar} from "./AppTabBar";

const Tab = createBottomTabNavigator();

export function AppTabsNavigator() {
    return (
        <Tab.Navigator
            screenOptions={{headerShown: false}}
            initialRouteName="Home"
            tabBar={(props) => (
                <AppTabBar {...props} />
            )}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Dispositivos',
                }}
            />
            <Tab.Screen
                name="Home2dsdsds"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Dispositivos',
                }}
            />
            <Tab.Screen
                name="Home3fdfsf"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Dispositivos',
                }}
            />
            <Tab.Screen
                name="Home4sdfsdfsfd"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Dispositivos',
                }}
            />
        </Tab.Navigator>
    );
}