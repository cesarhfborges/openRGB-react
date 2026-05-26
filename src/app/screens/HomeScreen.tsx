import React, {useRef} from 'react';

import {Animated,} from 'react-native';

import {Button, Card, Image, SizableText, Switch, Text, useTheme, XStack, YStack,} from 'tamagui';

import {useAuth} from '../contexts/AuthContext';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const motherBoard = require('../../assets/motherboard.png');

export function HomeScreen() {

    const auth = useAuth();
    const safe = useSafeAreaInsets();
    const theme = useTheme();

    const scrollY = useRef(
        new Animated.Value(0)
    ).current;

    const headerBorderOpacity =
        scrollY.interpolate({
            inputRange: [0, 30],
            outputRange: [0, 1],
            extrapolate: 'clamp',
        });

    return (
        <YStack
            flex={1}
            backgroundColor="$color.purple3Dark"
        >

            <Animated.View
                style={{
                    paddingTop: safe.top,
                    backgroundColor: theme.purple3Dark.val,
                }}
            >
                <XStack
                    height={64}
                    alignItems="center"
                    paddingHorizontal="$4"
                >
                    <Text
                        fontSize="$8"
                        fontWeight="700"
                    >
                        OpenRGB
                    </Text>
                </XStack>

                <Animated.View
                    style={{
                        height: 1,
                        backgroundColor: theme.borderColor.val,
                        opacity:
                        headerBorderOpacity,
                    }}
                />
            </Animated.View>

            <Animated.ScrollView
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={16}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingTop: 16,
                    paddingBottom:
                        safe.bottom + 140,
                }}
                onScroll={Animated.event(
                    [
                        {
                            nativeEvent: {
                                contentOffset: {
                                    y: scrollY,
                                },
                            },
                        },
                    ],
                    {
                        useNativeDriver: false,
                    }
                )}
            >
                <XStack flex={1} gap="$2">
                    <Card
                        flex={1}
                        backgroundColor="$background"
                        padding="$2"
                        borderRadius="$4"
                        elevation="$4"
                        borderWidth={1}
                        borderColor="$borderColor"
                    >
                        <YStack gap="$4">
                            <Text fontSize={18} fontWeight="bold" color="$color">
                                Conectar ao Servidor
                            </Text>
                            <Text>Teste</Text>
                            <XStack gap="$4" alignItems="center" justifyContent="space-between">
                                <Image
                                    src={motherBoard}
                                    width={50}
                                    height={50}
                                    objectFit="contain"
                                    style={{background: 'red', transform: [{rotate: '-90deg'}]}}
                                />
                                <Switch size="$3">
                                    <Switch.Thumb transition="fast"/>
                                </Switch>
                            </XStack>

                            <XStack gap="$4" alignItems="center" justifyContent="space-between">
                                <YStack>
                                    <SizableText size="$5">Placa mãe</SizableText>
                                    <SizableText size="$2">Placa mãe</SizableText>
                                </YStack>
                                <Switch size="$3">
                                    <Switch.Thumb transition="fast"/>
                                </Switch>
                            </XStack>


                            {/*<Switch size="$3">*/}
                            {/*    <Switch.Thumb transition="fast" />*/}
                            {/*</Switch>*/}
                            {/*<Switch size="$3">*/}
                            {/*    <Switch.Thumb transition="fast" />*/}
                            {/*</Switch>*/}
                            {/*<Switch size="$3">*/}
                            {/*    <Switch.Thumb transition="fast" />*/}
                            {/*</Switch>*/}
                            {/*<XStack gap="$4">*/}
                            {/*    <Image*/}
                            {/*        src={motherBoard}*/}
                            {/*        width="100%"*/}
                            {/*        height={50}*/}
                            {/*        objectFit="contain"*/}
                            {/*        style={{background: 'red', transform: [{rotate: '-90deg'}]}}*/}
                            {/*    />*/}
                            {/*    <Text>Teste</Text>*/}
                            {/*</XStack>*/}
                        </YStack>
                    </Card>
                    <Card
                        flex={1}
                        backgroundColor="$cardBackground"
                        padding="$2"
                        borderRadius="$4"
                        elevation="$4"
                        borderWidth={1}
                        borderColor="$borderColor"
                    >
                        <YStack gap="$4">
                            <Text fontSize={18} fontWeight="bold" color="$color">
                                Conectar ao Servidor
                            </Text>
                            <Text>Teste</Text>
                        </YStack>
                    </Card>
                </XStack>

                {Array.from({
                    length: 80,
                }).map((_, i) => (
                    <Text
                        key={i}
                        marginBottom="$2"
                    >
                        Teste {i}
                    </Text>
                ))}

                <Button
                    marginTop="$4"
                    onPress={() =>
                        auth.logout()
                    }
                >
                    Go Connection
                </Button>

            </Animated.ScrollView>

        </YStack>
    );
}