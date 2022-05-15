export default {
    plugins: [
        
    ],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        fontFamily: {
            sans: ['Graphik', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
        },
        extend: {
            spacing: {
                '128': '32rem',
                '144': '36rem',
            },
            borderRadius: {
                '4xl': '2rem',
            }
        }
    },
    purge: [
        "./index.html",
        './src/**/*.{svelte,js,ts}'
    ], // for unused CSS
    variants: {
        extend: {},
    },
    darkMode: 'class', // or 'media' or 'class'
}