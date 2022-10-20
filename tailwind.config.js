/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "card": "hsl(var(--cardBG))",
        "very-dark-blue-line": "hsl(var(--very-dark-blue-line))",
        "soft-blue": "hsl(var(--soft-blue))",
        "cyan": "hsl(var(--cyan))",
        "pale-violet": "hsl(var(--pale-violet))",
        "very-dark-desaturated-violet-main-heading": "hsl(var(--very-dark-desaturated-violet-main-heading))",
        "dark-Grayish-violet-paragraph": "hsl(var(--dark-Grayish-violet-paragraph))",
        "light-grayish-violet-app-background": "hsl(var(--light-grayish-violet-app-background))",
        "light-violet": "hsl(var(--light-violet))",
        "light-magenta": "hsl(var(--light-magenta))",
        "moderate-violet-chat-on-the-left": "hsl(var(--moderate-violet-chat-on-the-left))",
        "desaturated-ark-violet-chat-on-the-right": "hsl(var(--desaturated-ark-violet-chat-on-the-right))",
        "very-light-magenta-radio-button-outline": "hsl(var(--very-light-magenta-radio-button-outline))",
        "very-dark-desaturated-violet-submit-button-background": "hsl(var(--very-dark-desaturated-violet-submit-button-background))",
      }
    },
  },
  plugins: [],
}
