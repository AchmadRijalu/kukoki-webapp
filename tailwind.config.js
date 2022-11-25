const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Quicksand", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                blue: "#1C9FE2",
                darkblue: "#006CAA",
                lightblue: "#D2F5FF",
                brown: "#703900",
            },
            backgroundImage: {
                "blue-bg": "url('/img/blue_background.svg')",
            },
        },
    },

    plugins: [require("@tailwindcss/forms")],
};
