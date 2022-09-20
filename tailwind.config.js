/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [],
    theme: {
        extend: {
            colors: {
                ourwhite: '#F6F6F6',
                ourblack: '#0B132A',
                ourred: '#F53838',
                ourgrey: '#F8F8F8',
                lightgrey: '#4F5665'

            }
        },
    },
    plugins: [],
    safelist: [{
        pattern: /.*/,
    }, ],
}