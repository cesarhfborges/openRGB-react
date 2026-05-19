import React, {useState} from 'react'
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import {Button, Input, ScrollView, Text, YStack} from 'tamagui'
import {KeyboardAvoidingView, Platform} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";

export function ConnectionScreen({navigation}: any) {
    const insets = useSafeAreaInsets();
    const [ipAddress, setIpAddress] = useState('192.168.1.10')
    const [autoDiscover, setAutoDiscover] = useState(false)
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState<'desconectado' | 'conectando' | 'erro'>('desconectado')

    const handleConnect = async () => {
        setLoading(true)
        setStatus('conectando')

        try {
            // Aqui entrará a chamada para o seu módulo nativo:
            // await connectToOpenRgb(autoDiscover ? '255.255.255.255' : ipAddress)

            // Simulando um delay de conexão para efeito visual do protótipo
            await new Promise(resolve => setTimeout(resolve, 1500))

            setLoading(false)
            setStatus('desconectado')

            // Navega para a Home após o sucesso
            navigation.replace('Home')
        } catch (error) {
            setLoading(false)
            setStatus('erro')
        }
    }

    return (
        <YStack
            flex={1}
            backgroundColor="$background"
        >
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                // behavior="padding"
                style={{flex: 1, backgroundColor: 'green'}}
            >
                <ScrollView
                    contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
                    bounces={false}
                    showsVerticalScrollIndicator={false}
                    // backgroundColor="$background"
                    backgroundColor="red"
                >
                    <YStack
                        flex={1}
                        backgroundColor="$background"
                        paddingTop={insets.top > 0 ? insets.top : '$4'}
                        paddingBottom={insets.bottom > 0 ? insets.bottom : '$4'}
                    >
                        <Input
                            flex={1}
                            value={ipAddress}
                            onChangeText={setIpAddress}
                            placeholder="Ex: 192.168.1.50"
                            keyboardType="numeric"
                            disabled={autoDiscover}
                            opacity={autoDiscover ? 0.5 : 1}
                            backgroundColor="$background"
                            borderColor="$borderColor"
                        />
                        <Button onPress={() => navigation.navigate('Home')}>Go Home</Button>
                        {Array.from({length: 50}).map((_, i) => (
                            <Text key={i} fontSize={28} fontWeight="bold" letterSpacing={1} textAlign="center">
                                OPEN<Text color="$brand">RGB</Text> {i}
                            </Text>
                        ))}
                    </YStack>
                    {/*    <YStack*/}
                    {/*        flex={1}*/}
                    {/*        backgroundColor="$background"*/}
                    {/*        padding="$6"*/}
                    {/*        gap="$6"*/}
                    {/*        justifyContent="center"*/}
                    {/*        // 2. Aplicamos os paddings de segurança aqui de forma transparente baseados no aparelho*/}
                    {/*        // paddingTop={insets.top > 0 ? insets.top : '$4'}*/}
                    {/*        // paddingBottom={insets.bottom > 0 ? insets.bottom : '$4'}*/}
                    {/*    >*/}
                    {/*        /!* Header / Logo Area *!/*/}
                    {/*        <YStack alignItems="center" gap="$2">*/}
                    {/*            <YStack*/}
                    {/*                backgroundColor="$brand"*/}
                    {/*                opacity={0.8}*/}
                    {/*                padding="$4"*/}
                    {/*                borderRadius="$full"*/}
                    {/*                shadowColor="$brand"*/}
                    {/*                shadowRadius={15}*/}
                    {/*            >*/}
                    {/*                <Radio size="$4" color="$background"/>*/}
                    {/*            </YStack>*/}

                    {/*            <Text fontSize={28} fontWeight="bold" letterSpacing={1} textAlign="center">*/}
                    {/*                OPEN<Text color="$brand">RGB</Text>*/}
                    {/*            </Text>*/}
                    {/*            <Text fontSize={14} color="$colorMuted" letterSpacing={2}>*/}
                    {/*                MOBILE*/}
                    {/*            </Text>*/}
                    {/*        </YStack>*/}

                    {/*        /!* Connection Card *!/*/}
                    {/*        <Card*/}
                    {/*            backgroundColor="$cardBackground"*/}
                    {/*            padding="$5"*/}
                    {/*            borderRadius="$4"*/}
                    {/*            elevation="$4"*/}
                    {/*            borderWidth={1}*/}
                    {/*            borderColor="$borderColor"*/}
                    {/*        >*/}
                    {/*            <YStack gap="$4">*/}
                    {/*                <Text fontSize={18} fontWeight="bold" color="$color">*/}
                    {/*                    Conectar ao Servidor*/}
                    {/*                </Text>*/}

                    {/*                /!* Campo de IP - Desabilita se o Auto Discover estiver ativo *!/*/}
                    {/*                <YStack gap="$2">*/}
                    {/*                    <Paragraph fontSize={12} color="$colorMuted">Endereço IP</Paragraph>*/}
                    {/*                    <XStack alignItems="center" gap="$2">*/}
                    {/*                        <Server size="$1" color="$colorMuted"/>*/}
                    {/*                        <Input*/}
                    {/*                            flex={1}*/}
                    {/*                            value={ipAddress}*/}
                    {/*                            onChangeText={setIpAddress}*/}
                    {/*                            placeholder="Ex: 192.168.1.50"*/}
                    {/*                            keyboardType="numeric"*/}
                    {/*                            disabled={autoDiscover}*/}
                    {/*                            opacity={autoDiscover ? 0.5 : 1}*/}
                    {/*                            backgroundColor="$background"*/}
                    {/*                            borderColor="$borderColor"*/}
                    {/*                        />*/}
                    {/*                    </XStack>*/}
                    {/*                </YStack>*/}

                    {/*                /!* Linha do Auto Discover *!/*/}
                    {/*                <XStack justifyContent="space-between" alignItems="center" paddingVertical="$2">*/}
                    {/*                    <XStack gap="$2" alignItems="center">*/}
                    {/*                        <Wifi size="$1" color="$brand"/>*/}
                    {/*                        <Paragraph fontSize={14}>Detectar Automaticamente</Paragraph>*/}
                    {/*                    </XStack>*/}
                    {/*                    <Switch*/}
                    {/*                        size="$3"*/}
                    {/*                        checked={autoDiscover}*/}
                    {/*                        onCheckedChange={setAutoDiscover}*/}
                    {/*                        backgroundColor={autoDiscover ? "$brand" : "$background"}*/}
                    {/*                    >*/}
                    {/*                        <Switch.Thumb/>*/}
                    {/*                    </Switch>*/}
                    {/*                </XStack>*/}

                    {/*                /!* Botão de Conexão *!/*/}
                    {/*                <Button*/}
                    {/*                    backgroundColor="$brand"*/}
                    {/*                    // color="$background"*/}
                    {/*                    // fontWeight="bold"*/}
                    {/*                    // fontSize={16}*/}
                    {/*                    // onPress={handleConnect}*/}
                    {/*                    // disabled={loading}*/}
                    {/*                    // icon={loading ? <Spinner color="$background"/> : null}*/}
                    {/*                    // pressStyle={{opacity: 0.8}}*/}
                    {/*                >*/}
                    {/*                    {loading ? 'CONECTANDO...' : 'CONECTAR'}*/}
                    {/*                </Button>*/}
                    {/*            </YStack>*/}
                    {/*        </Card>*/}

                    {/*        /!* Status Footer *!/*/}
                    {/*        <YStack alignItems="center" gap="$2">*/}
                    {/*            <XStack gap="$2" alignItems="center">*/}
                    {/*                <Activity size="$1" color={status === 'erro' ? '$red10' : '$colorMuted'}/>*/}
                    {/*                <Text fontSize={13} color="$colorMuted">*/}
                    {/*                    Status: {status === 'conectando' ? 'Tentando handshake...' : status === 'erro' ? 'Falha na conexão' : 'Desconectado'}*/}
                    {/*                </Text>*/}
                    {/*            </XStack>*/}

                    {/*            <Button*/}
                    {/*                chromeless*/}
                    {/*                // color="$brand"*/}
                    {/*                // fontSize={12}*/}
                    {/*                // textDecorationLine="underline"*/}
                    {/*                // pressStyle={{opacity: 0.6}}*/}
                    {/*            >*/}
                    {/*                Verificar Status do Servidor*/}
                    {/*            </Button>*/}
                    {/*        </YStack>*/}
                    {/*    </YStack>*/}
                </ScrollView>
            </KeyboardAvoidingView>
        </YStack>
    )
}