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
				<img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="" />
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
