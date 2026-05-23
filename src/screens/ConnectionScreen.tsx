import React, {useMemo, useState} from 'react'
import {Button, Card, Input, Paragraph, Text, XStack, YStack} from 'tamagui'
import {StyleSheet} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {Server} from "@tamagui/lucide-icons-2";
import {Mask} from 'maska';
import {LinearGradient} from "@tamagui/linear-gradient";
import {useAuth} from "../contexts/AuthContext";

export function ConnectionScreen({navigation}: any) {
    const insets = useSafeAreaInsets();
    const auth = useAuth();
    const [ipAddress, setIpAddress] = useState('192.168.1.10');

    const ipMask = useMemo(
        () =>
            new Mask({
                mask: '#00.#00.#00.#00',
                tokens: {
                    0: {
                        pattern: /[0-9]/,
                        optional: true,
                    },
                },
            }),
        []
    );

    return (
        <YStack
            flex={1}
        >
            <LinearGradient
                flex={1}
                colors={['#BA1735', '#BA1735', '#2A1736', '#2A1736', '#2A1736']}
                start={[0, 0]}
                end={[1, 1]}
                justifyContent="center"
            >
                <YStack
                    paddingHorizontal="$5"
                    justifyContent="center"
                    flexGrow={1}
                    gap="$4"
                >

                    <Card
                        backgroundColor="$cardBackground"
                        padding="$5"
                        borderRadius="$4"
                        elevation="$4"
                        borderWidth={1}
                        borderColor="$borderColor"
                    >
                        <YStack gap="$4">
                            <Text fontSize={18} fontWeight="bold" color="$color">
                                Conectar ao Servidor
                            </Text>

                            <YStack gap="$2">
                                <Paragraph fontSize={12} color="$colorMuted">Endereço IP</Paragraph>
                                <XStack alignItems="center" gap="$2">
                                    <Server size="$1" color="$colorMuted"/>
                                    <Input
                                        flex={1}
                                        value={ipAddress}
                                        onChangeText={(text) => {
                                            setIpAddress(ipMask.masked(text));
                                        }}
                                        placeholder="Ex: 192.168.1.50"
                                        keyboardType="phone-pad"
                                        // keyboardType="number-pad"
                                        // disabled={autoDiscover}
                                        // opacity={autoDiscover ? 0.5 : 1}
                                        // backgroundColor="$background"
                                        borderColor="$borderColor"
                                    />
                                </XStack>
                            </YStack>

                            <Button
                                backgroundColor="$brand"
                                onPress={() => auth.login()}
                            >
                                Conectar
                            </Button>
                        </YStack>
                    </Card>
                    <Card
                        backgroundColor="$cardBackground"
                        padding="$5"
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
                </YStack>

                {/*<YStack*/}
                {/*    paddingHorizontal="$5"*/}
                {/*    justifyContent="center"*/}
                {/*    flexGrow={1}*/}
                {/*>*/}
                {/*    <Card*/}
                {/*        backgroundColor="$cardBackground"*/}
                {/*        padding="$5"*/}
                {/*        borderRadius="$4"*/}
                {/*        elevation="$4"*/}
                {/*        borderWidth={1}*/}
                {/*        borderColor="$borderColor"*/}
                {/*    >*/}
                {/*        <Text>Teste</Text>*/}
                {/*    </Card>*/}
                {/*</YStack>*/}

            </LinearGradient>
        </YStack>
    )
}

const styles = StyleSheet.create({
    background: {
        // position: 'absolute',
        flex: 1,
        left: 0,
        right: 0,
        top: 0,
        // height: 300,
    },
});