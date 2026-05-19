module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            [
                '@tamagui/babel-plugin',
                {
                    config: './tamagui.config.ts',
                    components: ['tamagui'],
                },
            ],
            // Se você estiver usando o react-native-reanimated para outras coisas, ele DEVE vir por último:
            // 'react-native-reanimated/plugin',
        ],
    };
};