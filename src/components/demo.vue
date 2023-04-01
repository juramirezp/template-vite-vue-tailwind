<script>
import axios from "axios";

// Instancia de la app debe formatearse de esta forma para uqe funcione en Modyo 8
// var app = new Vue({
// 	el: "#demo",
// 	delimiters: ["${", "}"],
// 	data() {
// 		return {
// 			count: 0,
// 		};
// 	},
// 	methods: {
// 		suma() {
// 			this.count++;
// 		},
// 	},
// 	mounted() {
// 		axios.get("url").then((response) => {});
// 	},
// });

export default {
	data() {
		return {
			count: 0,
		};
	},
	methods: {
		suma() {
			this.count++;
		},
	},
	mounted() {
		axios.get("url").then((response) => {});
	},
};
</script>

<template>
	<div id="demo">
		<div class="tw-container tw-flex tw-min-h-screen tw-items-center tw-justify-center tw-flex-col tw-relative">
			<a
				href="https://github.com/juramirezp/template-vite-vue-tailwind"
				class="tw-absolute tw-w-6 tw-h-6 hover:tw-cursor-pointer tw-top-6 tw-right-0"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 -3.5 256 256"
					preserveAspectRatio="xMinYMin meet"
					class="hover:tw-cursor-pointer"
				>
					<g fill="#161614">
						<path
							d="M127.505 0C57.095 0 0 57.085 0 127.505c0 56.336 36.534 104.13 87.196 120.99 6.372 1.18 8.712-2.766 8.712-6.134 0-3.04-.119-13.085-.173-23.739-35.473 7.713-42.958-15.044-42.958-15.044-5.8-14.738-14.157-18.656-14.157-18.656-11.568-7.914.872-7.752.872-7.752 12.804.9 19.546 13.14 19.546 13.14 11.372 19.493 29.828 13.857 37.104 10.6 1.144-8.242 4.449-13.866 8.095-17.05-28.32-3.225-58.092-14.158-58.092-63.014 0-13.92 4.981-25.295 13.138-34.224-1.324-3.212-5.688-16.18 1.235-33.743 0 0 10.707-3.427 35.073 13.07 10.17-2.826 21.078-4.242 31.914-4.29 10.836.048 21.752 1.464 31.942 4.29 24.337-16.497 35.029-13.07 35.029-13.07 6.94 17.563 2.574 30.531 1.25 33.743 8.175 8.929 13.122 20.303 13.122 34.224 0 48.972-29.828 59.756-58.22 62.912 4.573 3.957 8.648 11.717 8.648 23.612 0 17.06-.148 30.791-.148 34.991 0 3.393 2.295 7.369 8.759 6.117 50.634-16.879 87.122-64.656 87.122-120.973C255.009 57.085 197.922 0 127.505 0"
						/>
					</g>
				</svg>
			</a>

			<h1 class="tw-text-[80px] tw-uppercase tw-font-900 tw-mt-[100px]">
				<span class="tw-text-[#42b883]">VueJs</span>
				<span class="tw-text-gray-lighter">+</span>
				<span class="tw-text-[#7dd3fc]">TailwindCss</span>
			</h1>
			<h2 class="tw-text-2xl tw-font-100 tw-uppercase tw-text-gray-lighter">Template base</h2>

			<pre
				class="comand tw-border-2 tw-border-gray-background tw-rounded-2 tw-py-5 tw-px-6 tw-flex tw-flex-col tw-text-2 tw-gap-1 tw-mt-7"
			>
    <p>degit juramirezp/template-vite-vue-tailwind my-proyect</p>
    <p>cd my-proyect</p>
    <p>npm i</p>
  </pre>

			<div class="tw-flex tw-w-full tw-gap-5 tw-mt-[100px]">
				<div class="paquetes tw-w-1/2 tw-border-2 tw-border-gray-background tw-rounded-2 tw-py-5 tw-px-6">
					<h3 class="tw-font-600 tw-text-gray-dark tw-mb-4 tw-text-2">Paquetes incluidos</h3>
					<ul class="tw-border-l-1 tw-border-gray-background tw-pl-4 tw-text-2 tw-font-300">
						<li>Vite</li>
						<li>Vuejs 3</li>
						<li>TailwindCss 3</li>
						<li>Axios</li>
						<li>Bch-icons</li>
					</ul>
				</div>
				<div class="extensiones tw-w-1/2 tw-border-2 tw-border-gray-background tw-rounded-2 tw-py-5 tw-px-6">
					<h3 class="tw-font-600 tw-text-gray-dark tw-mb-4 tw-text-2">Extensiones recomendadas VSCode</h3>
					<ul class="tw-border-l-1 tw-border-gray-background tw-pl-4 tw-text-2 tw-font-300">
						<li>Headwind</li>
						<li>Tailwind CSS IntelliSense</li>
						<li>Tailwind Documentation</li>
						<li>Vetur</li>
						<li>Vue Language Features (Volar)</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
