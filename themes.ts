import {createV5Theme, defaultChildrenThemes} from '@tamagui/config/v5'
import {v5ComponentThemes} from '@tamagui/themes/v5'
import {green, greenDark, red, redDark, yellow, yellowDark} from '@tamagui/colors'

const darkPalette = ['hsla(150, 100%, 1%, 1)', 'hsla(150, 100%, 6%, 1)', 'hsla(150, 100%, 12%, 1)', 'hsla(150, 100%, 17%, 1)', 'hsla(150, 100%, 23%, 1)', 'hsla(150, 100%, 28%, 1)', 'hsla(150, 100%, 34%, 1)', 'hsla(150, 100%, 39%, 1)', 'hsla(150, 100%, 45%, 1)', 'hsla(150, 100%, 50%, 1)', 'hsla(0, 15%, 93%, 1)', 'hsla(0, 15%, 99%, 1)']
const lightPalette = ['hsla(150, 100%, 94%, 1)', 'hsla(150, 100%, 89%, 1)', 'hsla(150, 100%, 84%, 1)', 'hsla(150, 100%, 79%, 1)', 'hsla(150, 100%, 74%, 1)', 'hsla(150, 100%, 70%, 1)', 'hsla(150, 100%, 65%, 1)', 'hsla(150, 100%, 60%, 1)', 'hsla(150, 100%, 55%, 1)', 'hsla(150, 100%, 50%, 1)', 'hsla(0, 15%, 15%, 1)', 'hsla(0, 15%, 1%, 1)']

const accentLight = {
    "background": "red",
    "accent1": "hsla(250, 50%, 40%, 1)",
    "accent2": "hsla(250, 50%, 43%, 1)",
    "accent3": "hsla(250, 50%, 46%, 1)",
    "accent4": "hsla(250, 50%, 48%, 1)",
    "accent5": "hsla(250, 50%, 51%, 1)",
    "accent6": "hsla(250, 50%, 54%, 1)",
    "accent7": "hsla(250, 50%, 57%, 1)",
    "accent8": "hsla(250, 50%, 59%, 1)",
    "accent9": "hsla(250, 50%, 62%, 1)",
    "accent10": "hsla(250, 50%, 65%, 1)",
    "accent11": "hsla(250, 50%, 95%, 1)",
    "accent12": "hsla(250, 50%, 95%, 1)"
}

const accentDark = {
    "background": "red",
    "accent1": "hsla(250, 50%, 35%, 1)",
    "accent2": "hsla(250, 50%, 38%, 1)",
    "accent3": "hsla(250, 50%, 41%, 1)",
    "accent4": "hsla(250, 50%, 43%, 1)",
    "accent5": "hsla(250, 50%, 46%, 1)",
    "accent6": "hsla(250, 50%, 49%, 1)",
    "accent7": "hsla(250, 50%, 52%, 1)",
    "accent8": "hsla(250, 50%, 54%, 1)",
    "accent9": "hsla(250, 50%, 57%, 1)",
    "accent10": "hsla(250, 50%, 60%, 1)",
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
        ...defaultChildrenThemes,
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
});

export type Themes = typeof builtThemes;

export const themes: Themes =
    process.env.TAMAGUI_ENVIRONMENT === 'client' &&
    process.env.NODE_ENV === 'production'
        ? ({} as any)
        : (builtThemes as any);
