<template>
	<div
		class="flex sm:flex-col space-x-4 sm:space-x-0 sm:space-y-4 items-center text-gray-900 sm:justify-center"
	>
		<div class="w-20 sm:w-24 h-20 sm:h-24 rounded-full overflow-hidden">
			<img
				class="object-cover w-full h-full object-top bg-white"
				:src="photo"
			/>
		</div>
		<div class="flex flex-col text-left sm:text-center">
			<span class="font-semibold text-xl">{{ name }}</span>
			<span class="text-gray-600 text-sm">{{ description }}</span>
		</div>
	</div>
</template>

<script>
export default {
	props: ['name', 'description', 'photo'],
}
</script>
