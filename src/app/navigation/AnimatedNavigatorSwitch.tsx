import React, {useEffect, useRef, useState,} from 'react';

import {Animated,} from 'react-native';

import {AuthNavigator} from './AuthNavigator';
import {AppTabsNavigator} from './AppTabsNavigator';

type Props = {
    isAuthenticated: boolean;
};

export function AnimatedNavigatorSwitch({isAuthenticated}: Props) {

    const [currentAuthState, setCurrentAuthState] =
        useState(isAuthenticated);

    const opacity = useRef(
        new Animated.Value(1)
    ).current;

    useEffect(() => {

        if (
            currentAuthState ===
            isAuthenticated
        ) {
            return;
        }

        Animated.timing(opacity, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
        }).start(() => {

            setCurrentAuthState(
                isAuthenticated
            );

            Animated.timing(opacity, {
                toValue: 1,
                duration: 200,
                useNativeDriver: true,
            }).start();
        });

    }, [
        isAuthenticated,
        currentAuthState,
        opacity,
    ]);

    return (
        <Animated.View
            style={{
                flex: 1,
                opacity,
            }}
        >
            {currentAuthState
                ? <AppTabsNavigator/>
                : <AuthNavigator/>
            }
        </Animated.View>
    );
}