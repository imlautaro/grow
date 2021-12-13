<template>
	<div class="bg-white">
		<section
			id="precios"
			class="flex flex-col space-y-12 sm:space-y-16 py-12 sm:py-24"
		>
			<container
				class="flex flex-col max-w-screen-sm space-y-4 text-center"
			>
				<span class="font-bold text-3xl sm:text-4xl">Precios</span>
				<p class="text-gray-600 text-sm sm:text-base">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Doloremque, alias molestiae reiciendis minima sunt quidem
					tempora?
				</p>
			</container>
			<container class="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
				<div
					class="bg-white ring-4 ring-gray-900/5 rounded-2xl flex flex-col p-12 sm:p-16 space-y-8 sm:space-y-12 text-center"
				>
					<span
						class="bg-gray-900/5 px-4 py-2 rounded-full mx-auto text-sm sm:text-base"
					>
						Starter
					</span>
					<div class="text-4xl sm:text-5xl">
						US$220
						<span class="text-xl sm:text-2xl text-gray-600"
							>/mes</span
						>
					</div>
					<div class="flex flex-col space-y-6">
						<div
							class="flex items-center space-x-4 text-sm sm:text-base"
						>
							<OkIcon />
							<span class="flex-1 w-full">
								Administración de redes sociales
							</span>
						</div>
						<div
							class="flex items-center space-x-4 text-sm sm:text-base"
						>
							<OkIcon />
							<span class="flex-1 w-full">
								Diseño de branding y publicaciones
							</span>
						</div>
					</div>
					<button
						class="text-lg px-7 py-4 border-gray-200 border-2 border font-semibold rounded-lg mx-auto w-min whitespace-nowrap"
					>
						Contacto
					</button>
				</div>
				<div
					class="rounded-2xl bg-white flex flex-col ring-4 ring-cyan-600 p-12 sm:p-16 space-y-8 sm:space-y-12 text-center"
				>
					<span
						class="bg-gray-900/5 text-sm sm:text-base px-4 py-2 rounded-full mx-auto"
					>
						Professional
					</span>
					<div class="text-4xl sm:text-5xl">
						US$499
						<span class="sm:text-2xl text-gray-600 text-xl"
							>/mes</span
						>
					</div>
					<div class="flex flex-col space-y-6">
						<div
							class="flex items-center space-x-4 text-sm sm:text-base"
						>
							<OkIcon />
							<span class="flex-1 w-full">
								Administración de redes sociales
							</span>
						</div>
						<div
							class="flex items-center space-x-4 text-sm sm:text-base"
						>
							<OkIcon />
							<span class="flex-1 w-full">
								Diseño de branding y publicaciones
							</span>
						</div>
						<div
							class="flex items-center space-x-4 text-sm sm:text-base"
						>
							<OkIcon />
							<span class="flex-1 w-full">
								Fotografía de productos
							</span>
						</div>
						<div
							class="flex items-center space-x-4 text-sm sm:text-base"
						>
							<OkIcon />
							<span class="flex-1 w-full">
								Creación de campañas de marketing
							</span>
						</div>
					</div>
					<button
						class="text-lg px-7 py-4 bg-cyan-600 text-white font-semibold rounded-lg mx-auto w-min whitespace-nowrap"
					>
						Contacto
					</button>
				</div>
				<div
					class="flex rounded-2xl bg-white ring-4 ring-gray-900/5 flex-col p-12 sm:p-16 space-y-8 sm:space-y-12 text-center"
				>
					<span
						class="bg-gray-900/5 text-sm sm:text-base px-4 py-2 rounded-full mx-auto"
					>
						Enterprise
					</span>
					<div class="text-4xl sm:text-5xl">
						US$1190
						<span class="text-xl sm:text-2xl text-gray-600"
							>/mes</span
						>
					</div>
					<div class="flex flex-col space-y-6">
						<div class="flex items-center space-x-4">
							<OkIcon />
							<span class="flex-1 w-full">
								Administración de redes sociales
							</span>
						</div>
						<div class="flex items-center space-x-4">
							<OkIcon />
							<span class="flex-1 w-full">
								Diseño de branding y publicaciones
							</span>
						</div>
						<div class="flex items-center space-x-4">
							<OkIcon />
							<span class="flex-1 w-full">
								Fotografía de productos
							</span>
						</div>
						<div class="flex items-center space-x-4">
							<OkIcon />
							<span class="flex-1 w-full">
								Creación de campañas de marketing
							</span>
						</div>
						<div class="flex items-center space-x-4">
							<OkIcon />
							<span class="flex-1 w-full">
								Seguimiento avanzado de campañas
							</span>
						</div>
						<div class="flex items-center space-x-4">
							<OkIcon />
							<span class="flex-1 w-full">
								Reuniones por videollamada
							</span>
						</div>
					</div>
					<button
						class="text-lg px-7 py-4 border-2 border font-semibold rounded-lg mx-auto w-min whitespace-nowrap"
					>
						Contacto
					</button>
				</div>
			</container>
		</section>
	</div>
</template>

<script>
import OkIcon from '~icons/flat-color-icons/ok'

export default {
	components: {
		OkIcon,
	},
}
</script>
