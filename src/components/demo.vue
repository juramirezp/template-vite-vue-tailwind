<script>
export default {
	props: {
		msg: String,
	},
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
};
</script>

<template>
	<div class="tw-container tw-text-center tw-pb-[100px]">
		<h1 class="tw-font-700 tw-text-4xl">{{ count }}</h1>
		<button @click="suma()" class="tw-border tw-px-3 tw-py-1 tw-rounded-1 hover:tw-bg-brand-lighter">suma 1</button>
	</div>

	<div class="tw-container">
		<div
			class="tw-bg-primary tw-text-white tw-border tw-border-red-400 tw-text-red-700 tw-px-4 tw-py-3 tw-rounded tw-relative color"
			role="alert"
		>
			<strong class="tw-font-bold">Holy smokes!</strong>
			<span class="tw-block sm:tw-inline">Something seriously bad happened.</span>
			<span class="tw-absolute tw-top-0 tw-bottom-0 tw-right-0 tw-px-4 tw-py-3">
				<svg
					class="tw-fill-current tw-h-6 tw-w-6 tw-text-red-500"
					role="button"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
				>
					<title>Close</title>
					<path
						d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
					/>
				</svg>
			</span>
		</div>
	</div>
</template>

<style scoped></style>
