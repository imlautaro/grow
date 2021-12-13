<template>
	<NuxtLink
		class="duration-100 flex items-center space-x-2 hover:bg-black/5 rounded-md px-6 py-4"
		:to="to"
	>
		<slot />
	</NuxtLink>
</template>

<script>
export default {
	props: ['to'],
}
</script>
