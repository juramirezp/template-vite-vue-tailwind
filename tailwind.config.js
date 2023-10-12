/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	presets: [require("tw-blue")],
	// presets: [require("tw-green")],
	prefix: "tw-",
};
