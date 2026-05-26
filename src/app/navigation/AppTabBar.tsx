import React, {useEffect, useRef, useState} from 'react';
import {Animated, LayoutChangeEvent, Pressable, useColorScheme,} from 'react-native';

import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

import {Home, Monitor, Settings,} from '@tamagui/lucide-icons-2';

import {Text, useTheme, XStack, YStack,} from 'tamagui';

import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {LinearGradient} from "@tamagui/linear-gradient";

const ICONS = {
    Home,
    Devices: Monitor,
    Settings,
} as const;

type TabLayout = {
    x: number;
    width: number;
};

export function AppTabBar({state, descriptors, navigation}: BottomTabBarProps) {

    const theme = useTheme();
    const insets = useSafeAreaInsets();
    const colorScheme = useColorScheme();

    const [layouts, setLayouts] = useState<TabLayout[]>([]);

    const translateX = useRef(
        new Animated.Value(0)
    ).current;

    useEffect(() => {
        const layout = layouts[state.index];

        if (!layout) {
            return;
        }

        Animated.spring(translateX, {
            toValue: layout.x,
            useNativeDriver: true,
            damping: 18,
            stiffness: 180,
            mass: 0.8,
        }).start();
    }, [
        layouts,
        state.index,
        translateX,
    ]);

    const handleLayout =
        (index: number) =>
            (event: LayoutChangeEvent) => {

                const {x, width} =
                    event.nativeEvent.layout;

                setLayouts((current) => {
                    const next = [...current];

                    next[index] = {
                        x,
                        width,
                    };

                    return next;
                });
            };

    return (
        <LinearGradient
            colors={[
                'rgba(0,0,0,0)',
                'rgba(0,0,0,.75)'
            ]}
            style={{
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
                paddingBottom: insets.bottom + 14,
                paddingHorizontal: 16
            }}
        >
            <XStack
                padding={4}
                borderRadius={160}
                backgroundColor="$background"
                borderWidth={1}
                borderColor={colorScheme === 'dark' ? 'hsla(150, 100%, 17%, 1)' : 'hsl(151 100% 26%)'}
                overflow="hidden"
                elevation="$4"
            >

                {layouts[state.index] && (
                    <Animated.View
                        pointerEvents="none"
                        style={{
                            position: 'absolute',
                            top: 4,
                            bottom: 4,
                            left: 0,

                            width:
                            layouts[state.index].width,

                            borderRadius: 160,

                            backgroundColor: colorScheme === 'dark' ? 'hsla(150, 100%, 17%, 1)' : 'hsl(151 100% 26%)',

                            transform: [
                                {
                                    translateX,
                                },
                            ],
                        }}
                    />
                )}

                {state.routes.map((route, index) => {

                    const focused =
                        state.index === index;

                    const label =
                        typeof descriptors[route.key]
                            .options.tabBarLabel ===
                        'string'
                            ? descriptors[route.key]
                                .options.tabBarLabel
                            : route.name;

                    const tabBarIcon =
                        descriptors[route.key]
                            .options.tabBarIcon;

                    const onPress = () => {

                        const event =
                            navigation.emit({
                                type: 'tabPress',
                                target: route.key,
                                canPreventDefault: true,
                            });

                        if (
                            !focused &&
                            !event.defaultPrevented
                        ) {
                            navigation.navigate(
                                route.name
                            );
                        }
                    };

                    return (
                        <Pressable
                            key={route.key}
                            onLayout={handleLayout(
                                index
                            )}
                            onPress={onPress}
                            android_ripple={{
                                borderless: false,
                                radius: 80,
                            }}
                            style={{
                                flex: 1,
                            }}
                        >
                            <YStack
                                flex={1}
                                alignItems="center"
                                justifyContent="center"
                                gap="$1.5"
                                paddingVertical="$2"
                                // paddingHorizontal="$3"
                                minHeight={68}
                            >
                                {tabBarIcon
                                    ? tabBarIcon({
                                        focused,
                                        color: focused
                                            ? theme.color1?.val ?? '#fff'
                                            : theme.color11?.val ?? '#999',
                                        size: 18,
                                    })
                                    : (
                                        <Home
                                            size={18}
                                            color={
                                                focused
                                                    ? theme.color1?.val
                                                    : theme.color11?.val
                                            }
                                        />
                                    )}

                                {/*<Text*/}
                                {/*    numberOfLines={1}*/}
                                {/*    adjustsFontSizeToFit={false}*/}
                                {/*    minimumFontScale={0.9}*/}
                                {/*    textAlign="center"*/}
                                {/*    ellipsizeMode="tail"*/}
                                {/*    fontSize={10}*/}
                                {/*    fontWeight="600"*/}
                                {/*    color={*/}
                                {/*        focused*/}
                                {/*            ? '$color1'*/}
                                {/*            : '$color11'*/}
                                {/*    }*/}
                                {/*>*/}
                                {/*    {String(label)}*/}
                                {/*</Text>*/}
                            </YStack>
                        </Pressable>
                    );
                })}
            </XStack>
        </LinearGradient>
    );
}