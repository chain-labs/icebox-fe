const path = require('path')

module.exports = {
    plugins: ['@typescript-eslint'],
    extends: [
        'next/core-web-vitals',
        'plugin:@typescript-eslint/recommended',
        'prettier',
    ],
    settings: {
        'import/resolver': {
            alias: {
                extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
                map: [
                    ['@/common/*', path.resolve(__dirname, './src/common')],
                    ['@/pages/*', path.resolve(__dirname, './src/pages')],
                    ['@/modules/*', path.resolve(__dirname, './src/modules')],
                    ['@/styles/*', path.resolve(__dirname, './src/styles')],
                    ['@/src/*', path.resolve(__dirname, './src')],
                ],
            },
        },
    },
    rules: {
        'prefer-const': 'error',
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/no-explicit-any': 'warn',
    },
}
