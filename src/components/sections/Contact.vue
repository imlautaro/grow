<template>
	<section
		id="contacto"
		class="py-12 sm:py-24 px-4 space-y-8 sm:space-y-16 bg-gray-100"
	>
		<container class="max-w-screen-sm flex flex-col space-y-4 text-center">
			<span class="font-bold text-3xl sm:text-4xl">Contacto</span>
			<p class="text-gray-600 text-sm sm:text-base">
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Reprehenderit eos odit facilis perspiciatis, quaerat hic omnis.
			</p>
		</container>
		<container
			class="flex p-6 ring-4 ring-gray-900/5 sm:p-12 bg-white rounded-3xl flex-col max-w-screen-sm space-y-4 md:space-y-8"
		>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
				<div class="flex flex-col space-y-1">
					<label class="text-sm">Nombre</label>
					<input class="px-5 py-3 rounded-md border" />
				</div>
				<div class="flex flex-col space-y-1">
					<label class="text-sm">Apellido</label>
					<input class="px-5 py-3 rounded-md border" />
				</div>
			</div>
			<div class="flex flex-col space-y-1">
				<label class="text-sm">Nombre del negocio / Compañía</label>
				<input class="px-5 py-3 rounded-md border" />
			</div>
			<div class="flex flex-col space-y-1">
				<label class="text-sm">Correo electrónico</label>
				<input class="px-5 py-3 rounded-md border" />
			</div>
			<div class="flex flex-col space-y-1">
				<label class="text-sm">Mensaje</label>
				<textarea class="px-5 py-3 rounded-md border"></textarea>
			</div>
			<button class="bg-cyan-600 px-4 py-3 rounded-lg text-white">
				Enviar
			</button>
		</container>
	</section>
</template>
