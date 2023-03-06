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
                green: "#00C036",
                greenhover: "#547C51",
                darkgreen: "#009229",
                lightgreen: "#DBF9D8",
                blue: "#114A75",
                smoke: "#F9F9F9",
                test: "#FFFFFF",
                dagingsayur: "#FCEAB2",
                cepatmudah: "#D2F5FF",
                sayur: "#F8D1B7",
                roti: "#C6F0D7",
                produksusu: "#F6D5FB",
                proteintinggi: "#F8CDD5",
                makananlaut: "#DFFCFB",
                menudiet: "#D9E8FB",
                rencanacard: "#F2F2F2",
                rencanatext: "#6A6A6A",
                rencanasend: "#A9A9A9",
                pembayaranborder: "#D9D9D9",

            },
            backgroundImage: {
                "green-bg": "url('/img/green_background.svg')",
            },
            width: {
                '68': '17rem',
              },
              height: {
                '68': '17rem',
              },
            screens: {
                mini: '320px'
            }
        },
    },

    plugins: [require("@tailwindcss/forms")],
};
