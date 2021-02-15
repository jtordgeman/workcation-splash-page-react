const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
    style: {
        postcss: {
            plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
                purgecss({
                    content: ['./src/**/*.tsx', './src/**/*.ts', './src/**/*.js'],
                    safelist: ['html', 'body'],
                    defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
                }),
            ],
        },
    },
};
