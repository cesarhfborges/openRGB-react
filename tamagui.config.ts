import {createAnimations} from '@tamagui/animations-react-native'
import {config as configBase} from '@tamagui/config/v3'
import {createTamagui} from 'tamagui'
import {themes} from "./themes";

// Configuração simples de animações (útil para os switchs e transições do app)
const animations = createAnimations({
    fast: {
        type: 'spring',
        damping: 20,
        mass: 1.2,
        stiffness: 250,
    },
    medium: {
        type: 'spring',
        damping: 25,
        stiffness: 180,
    },
    slow: {
        type: 'spring',
        damping: 15,
        stiffness: 120,
    },
})

const config = createTamagui({
    ...configBase,
    animations,
    themeClassNameOnRoot: false,
    themes: {
        ...configBase.themes,
        ...themes
    },
})

export type AppConfig = typeof config

declare module 'tamagui' {
    interface TamaguiCustomConfig extends AppConfig {
    }
}

export default config;