import {createBottomTabNavigator,} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../screens/HomeScreen';
import {AppTabBar} from "./AppTabBar";
import React from "react";
import {AlarmCheck, Boxes, Cpu, Home, Layout, Lightbulb, Settings} from "@tamagui/lucide-icons-2";

const Tab = createBottomTabNavigator();

export function AppTabsNavigator() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                lazy: true,
                freezeOnBlur: true,
                popToTopOnBlur: true,
            }}
            detachInactiveScreens={true}
            initialRouteName="Home"
            tabBar={(props) => (
                <AppTabBar {...props} />
            )}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: Home
                }}
            />
            <Tab.Screen
                name="Home2dsdsds"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Dispositivos',
                    tabBarIcon: Cpu
                }}
            />
            <Tab.Screen
                name="Home3fdfsf"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Layout',
                    tabBarIcon: Layout
                }}
            />
            <Tab.Screen
                name="Home4sdfsdfsfd"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Efeitos',
                    tabBarIcon: Lightbulb
                }}
            />
            <Tab.Screen
                name="Home4sdfsdfsfdsd"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Config',
                    tabBarIcon: Settings
                }}
            />
        </Tab.Navigator>
    );
}