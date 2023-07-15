/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',

        // Or if using `src` directory:
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'gray-0': '#f7f9fc',
                'gray-50': '#e9edf5',
                'gray-100': '#d5dbe5',
                'gray-400': '#868fa0',
                'gray-700': '#464f60',
                'brand-500': "#3b82f6"
            }
        }
    },
    plugins: [],
}
