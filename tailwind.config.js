import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
        flowbite.content(),
    ],

    theme: {
        colors: {
            'primary': '#0ea5e9',
            'black': '#333',
        },
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [forms, flowbite.plugin(),],
};
