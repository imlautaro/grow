<template>
	<section
		id="contacto"
		class="py-12 sm:py-24 px-4 space-y-8 sm:space-y-16 bg-cyan-600 text-white"
	>
		<container class="max-w-screen-sm flex flex-col space-y-4 text-center">
			<span class="font-bold text-3xl sm:text-4xl">Contacto</span>
			<p class="text-sm sm:text-base">
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Reprehenderit eos odit facilis perspiciatis, quaerat hic omnis.
			</p>
		</container>
		<container class="flex flex-col max-w-screen-sm space-y-4 md:space-y-8">
			<div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
				<div class="flex flex-col space-y-1">
					<label class="text-sm">Nombre</label>
					<input
						class="px-5 py-3 rounded-md bg-white/10 placeholder-white/25"
						placeholder="Homero"
					/>
				</div>
				<div class="flex flex-col space-y-1">
					<label class="text-sm">Apellido</label>
					<input
						class="px-5 py-3 rounded-md bg-white/10 placeholder-white/25"
						placeholder="Simpson"
					/>
				</div>
			</div>
			<div class="flex flex-col space-y-1">
				<label class="text-sm">Nombre del negocio / Compañía</label>
				<input
					class="px-5 py-3 rounded-md bg-white/10 placeholder-white/25"
					placeholder="CompuMundoHiperMegaRed"
				/>
			</div>
			<div class="flex flex-col space-y-1">
				<label class="text-sm">Correo electrónico</label>
				<input
					class="px-5 py-3 rounded-md bg-white/10 placeholder-white/25"
					placeholder="homero@mail.com"
				/>
			</div>
			<div class="flex flex-col space-y-1">
				<label class="text-sm">Mensaje</label>
				<textarea
					placeholder="Me interesa contratar el plan..."
					class="px-5 py-3 rounded-md bg-white/10 placeholder-white/25"
				></textarea>
			</div>
			<button
				class="bg-white px-7 py-4 font-semibold rounded-lg text-cyan-600 text-lg"
			>
				Enviar
			</button>
		</container>
	</section>
</template>
