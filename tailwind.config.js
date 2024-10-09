const {
    nextui
} = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                base: '#FFFFFF',
                white: '#FFFFFF',
                highlight: '#FF7300',
                primary: '#1E90FF',
                grayPrimary: '#F5F5F5',
                graySecondary: '#E0E0E0',
                pinkSecondary: '#FF69B4',
                accent: '#32CD32',
                background: '#FDF2E4',
                textMain: '#212121',
                textSecondary: '#555555',
                border: '#E0E0E0',
                success: '#28A745',
                error: '#DC3545',
                warning: '#FFC107',
                info: '#17A2B8',
            },
        },
    },
    darkMode: "class",
    plugins: [nextui()],
};