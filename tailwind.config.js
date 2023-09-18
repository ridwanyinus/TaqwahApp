/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./dist/**/*.{html,js}"],
   theme: {
      extend: {
         fontFamily: {
            body: ["Rubik"],
         },

         colors: {
            primary: {
               200: ["rgba(248, 246, 237, 0.00)"],
               100: ["rgba(248, 246, 237, 1)"],
            },
            seconadary: ["#F5F9FC"],
            green: ["#1DA599"],
            text: ["#212830"],
            gray: ["#737780"],
            grayborder: ["rgba(231, 231, 231, 1)"],
            footerText: ["rgba(255, 255, 255, 0.70)"],
         },
      },
   },
   plugins: [],
};
