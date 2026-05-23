import React from 'react';
import {useAuth} from "../contexts/AuthContext";
import {AuthNavigator} from "./AuthNavigator";
import {AppTabsNavigator} from "./AppTabsNavigator";
import {AnimatedNavigatorSwitch} from "./AnimatedNavigatorSwitch";

export function AppNavigator() {
    const {isAuthenticated} = useAuth();

    // if (!isAuthenticated) {
    //     return <AuthNavigator/>;
    // }
    //
    // return <AppTabsNavigator/>;

    return <AnimatedNavigatorSwitch
        isAuthenticated={isAuthenticated}
    />
}