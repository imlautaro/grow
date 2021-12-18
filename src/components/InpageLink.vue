<template>
	<button @click="navigate()">
		<slot />
	</button>
</template>

<script>
export default {
	props: ['to'],
	methods: {
		navigate() {
			const element = document.getElementById(this.to)
			const header = document.getElementById('header')
			if (element) {
				if (document.scrollingElement) {
					if (header) {
						document.scrollingElement.scrollTop =
							element.offsetTop - header.offsetHeight
					} else {
						document.scrollingElement.scrollTop = element.offsetTop
					}
					this.$emit('navigate')
				}
			}
		},
	},
}
</script>
