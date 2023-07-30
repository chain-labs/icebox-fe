import type { StorybookConfig } from '@storybook/nextjs'
import path from 'path'

/** @type { import('@storybook/nextjs').StorybookConfig } */
const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        {
            name: '@storybook/addon-styling',
            options: {
                // Check out https://github.com/storybookjs/addon-styling/blob/main/docs/api.md
                // For more details on this addon's options.
                postCss: true,
            },
        },
    ],
    framework: {
        name: '@storybook/nextjs',
        options: {
            nextConfigPath: path.resolve(__dirname, '../next.config.js'),
        },
    },
    docs: {
        autodocs: 'tag',
    },
}
export default config
