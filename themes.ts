import {createV5Theme, defaultChildrenThemes} from '@tamagui/config/v5'
import {v5ComponentThemes} from '@tamagui/themes/v5'
import {green, greenDark, red, redDark, yellow, yellowDark} from '@tamagui/colors'

const darkPalette = ['hsla(120, 58%, 1%, 1)', 'hsla(120, 57%, 12%, 1)', 'hsla(120, 57%, 21%, 1)', 'hsla(120, 57%, 29%, 1)', 'hsla(120, 57%, 36%, 1)', 'hsla(120, 57%, 42%, 1)', 'hsla(120, 57%, 46%, 1)', 'hsla(120, 57%, 49%, 1)', 'hsla(120, 57%, 50%, 1)', 'hsla(120, 57%, 50%, 1)', 'hsla(0, 15%, 93%, 1)', 'hsla(0, 15%, 99%, 1)']
const lightPalette = ['hsla(120, 58%, 99%, 1)', 'hsla(120, 58%, 86%, 1)', 'hsla(120, 58%, 77%, 1)', 'hsla(120, 57%, 69%, 1)', 'hsla(120, 57%, 63%, 1)', 'hsla(120, 57%, 58%, 1)', 'hsla(120, 57%, 54%, 1)', 'hsla(120, 57%, 51%, 1)', 'hsla(120, 57%, 50%, 1)', 'hsla(120, 57%, 50%, 1)', 'hsla(0, 15%, 15%, 1)', 'hsla(0, 15%, 1%, 1)']

// Your custom accent color theme
const accentLight = {
    "accent1": "hsla(130, 54%, 21%, 1)",
    "accent2": "hsla(130, 54%, 26%, 1)",
    "accent3": "hsla(130, 54%, 31%, 1)",
    "accent4": "hsla(130, 54%, 36%, 1)",
    "accent5": "hsla(130, 54%, 41%, 1)",
    "accent6": "hsla(130, 54%, 45%, 1)",
    "accent7": "hsla(130, 54%, 50%, 1)",
    "accent8": "hsla(130, 54%, 55%, 1)",
    "accent9": "hsla(130, 54%, 60%, 1)",
    "accent10": "hsla(130, 54%, 65%, 1)",
    "accent11": "hsla(250, 50%, 95%, 1)",
    "accent12": "hsla(250, 50%, 95%, 1)"
}

const accentDark = {
    "accent1": "hsla(130, 54%, 24%, 1)",
    "accent2": "hsla(130, 54%, 28%, 1)",
    "accent3": "hsla(130, 54%, 32%, 1)",
    "accent4": "hsla(130, 54%, 36%, 1)",
    "accent5": "hsla(130, 54%, 40%, 1)",
    "accent6": "hsla(130, 54%, 44%, 1)",
    "accent7": "hsla(130, 54%, 48%, 1)",
    "accent8": "hsla(130, 54%, 52%, 1)",
    "accent9": "hsla(130, 54%, 56%, 1)",
    "accent10": "hsla(130, 54%, 60%, 1)",
    "accent11": "hsla(250, 50%, 90%, 1)",
    "accent12": "hsla(250, 50%, 95%, 1)"
}

const builtThemes = createV5Theme({
    darkPalette,
    lightPalette,
    componentThemes: v5ComponentThemes,
    accent: {
        light: accentLight,
        dark: accentDark,
    },
    childrenThemes: {
        // Include default color themes (blue, red, green, yellow, etc.)
        ...defaultChildrenThemes,

        // Semantic color themes for warnings, errors, and success states
        warning: {
            light: yellow,
            dark: yellowDark,
        },
        error: {
            light: red,
            dark: redDark,
        },
        success: {
            light: green,
            dark: greenDark,
        },
    },
})

export type Themes = typeof builtThemes

// the process.env conditional here is optional but saves web client-side bundle
// size by leaving out themes JS. tamagui automatically hydrates themes from CSS
// back into JS for you, and the bundler plugins set TAMAGUI_ENVIRONMENT. so
// long as you are using the Vite, Next, Webpack plugins this should just work,
// but if not you can just export builtThemes directly as themes:
export const themes: Themes =
    process.env.TAMAGUI_ENVIRONMENT === 'client' &&
    process.env.NODE_ENV === 'production'
        ? ({} as any)
        : (builtThemes as any)
