<template>
	<header class="bg-cyan-600 header">
		<div
			class="container h-2xl flex-col text-white text-center items-center flex justify-center"
		>
			<div class="flex flex-col space-y-4 sm:space-y-8 text-white">
				<h1 class="text-5xl sm:text-6xl font-bold">
					Agencia de Marketing Digital
				</h1>
				<p class="text-xl sm:text-2xl">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				</p>
				<InpageLink
					class="bg-white text-cyan-600 font-semibold w-min whitespace-nowrap mx-auto text-xl px-7 sm:px-8 py-4 sm:py-5 rounded-lg sm:rounded-xl"
					to="contacto"
				>
					Contacto
				</InpageLink>
			</div>
		</div>
	</header>
</template>

<style lang="postcss" scoped>
.header {
	/* background-image: url(https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80);
	*/
	background-size: cover;
	background-position: center;
	/*
	background-image: url(https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1147&q=80);
	*/
	/*
	background-image: url(https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80);
	*/

	background-image: url(/hero.png);
}
</style>
