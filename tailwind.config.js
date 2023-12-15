/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}', './src/**/*.{md,njk}'],
    darkMode: 'class',
    theme: {
        extend: {
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        blockquote: {
                            fontWeight: 'normal',
                            color: theme('colors.slate.600'),
                        },
                        'blockquote p:first-of-type::before': {
                            content: '',
                        },
                        'blockquote p:last-of-type::after': {
                            content: '',
                        },
                    },
                },
            }),

            screens: {
                sm: '640px',
                // => @media (min-width: 640px) { ... }

                md: '768px',
                // => @media (min-width: 768px) { ... }

                lg: '1024px',
                // => @media (min-width: 1024px) { ... }

                xl: '1280px',
                // => @media (min-width: 1280px) { ... }

                '2xl': '1536px',
                // => @media (min-width: 1536px) { ... }
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
};
