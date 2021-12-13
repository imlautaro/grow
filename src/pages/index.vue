<template>
	<div>
		<div class="flex flex-col top-0 sticky">
			<div
				v-if="false"
				class="bg-red-600 text-white p-4 text-center text-sm"
			>
				Esta es una web de ejemplo y los datos que se muestran son
				ficticios.
			</div>
			<nav-bar />
		</div>
		<sections-hero />
		<sections-services />
		<sections-team />
		<sections-pricing />
		<sections-contact />
		<footer-bar />
	</div>
</template>
