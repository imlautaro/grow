<template>
	<transition name="menu">
		<div
			v-if="open"
			class="bg-white dark:bg-gray-800 z-20 w-screen flex flex-col right-0 h-screen fixed shadow-2xl top-0"
		>
			<div class="flex items-center justify-between px-8 py-8">
				<button class="icon-btn" @click="$emit('close')">
					<svg
						class="w-6"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</div>
			<InpageLink
				@navigate="$emit('close')"
				class="px-8 py-4 hover:bg-black hover:bg-opacity-5 dark:hover:bg-white dark:hover:bg-opacity-5"
				to="servicios"
			>
				Servicios
			</InpageLink>
			<InpageLink
				@navigate="$emit('close')"
				class="px-8 py-4 hover:bg-black hover:bg-opacity-5 dark:hover:bg-white dark:hover:bg-opacity-5"
				to="nosotros"
			>
				Nosotros
			</InpageLink>
			<InpageLink
				@navigate="$emit('close')"
				class="px-8 py-4 hover:bg-black hover:bg-opacity-5 dark:hover:bg-white dark:hover:bg-opacity-5"
				to="precios"
			>
				Precios
			</InpageLink>
			<InpageLink
				@navigate="$emit('close')"
				class="px-8 py-4 hover:bg-black hover:bg-opacity-5 dark:hover:bg-white dark:hover:bg-opacity-5"
				to="contacto"
			>
				Contacto
			</InpageLink>
		</div>
	</transition>
</template>

<style lang="postcss" scoped>
.menu-enter-active,
.menu-leave-active {
	@apply duration-300 transform translate-x-0;
}
.menu-enter,
.menu-leave-to {
	@apply transform translate-x-full;
}
</style>

<script>
export default {
	props: ['open'],
	model: {
		prop: 'open',
		event: 'close',
	},
}
</script>
