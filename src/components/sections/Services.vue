<template>
	<div class="bg-white">
		<section
			id="servicios"
			class="container py-20 sm:py-24 text-center space-y-12 sm:space-y-16 flex flex-col justify-center"
		>
			<span class="text-3xl sm:text-4xl font-bold"
				>Nuestros servicios</span
			>
			<div
				class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 sm:gap-8"
			>
				<div
					class="p-8 flex flex-col space-y-4 items-center justify-center text-center"
				>
					<StackOfPhotosIcon class="text-5xl sm:text-6xl" />
					<span class="font-semibold text-xl sm:text-2xl">
						Diseño y creación de contenido
					</span>
					<p class="text-gray-600 text-sm sm:text-base">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Molestiae, aperiam.
					</p>
				</div>
				<div
					class="p-8 flex flex-col space-y-4 items-center justify-center text-center"
				>
					<CollaborationIcon class="text-5xl sm:text-6xl" />
					<span class="font-semibold text-xl sm:text-2xl">
						Administración de redes sociales
					</span>
					<p class="text-gray-600 text-sm sm:text-base">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Molestiae, aperiam.
					</p>
				</div>
				<div
					class="p-8 flex flex-col space-y-4 items-center justify-center text-center"
				>
					<CameraIcon class="text-5xl sm:text-6xl" />
					<span class="font-semibold text-xl sm:text-2xl">
						Fotografía profesional de productos
					</span>
					<p class="text-gray-600 text-sm sm:text-base">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Molestiae, aperiam.
					</p>
				</div>
				<div
					class="p-8 flex flex-col space-y-4 items-center justify-center text-center"
				>
					<ComboChartIcon class="text-5xl sm:text-6xl" />
					<span class="font-semibold text-xl sm:text-2xl">
						Creación de campañas de marketing
					</span>
					<p class="text-gray-600 text-sm sm:text-base">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Molestiae, aperiam.
					</p>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import StackOfPhotosIcon from '~icons/flat-color-icons/stack-of-photos'
import CollaborationIcon from '~icons/flat-color-icons/collaboration'
import CameraIcon from '~icons/flat-color-icons/camera'
import ComboChartIcon from '~icons/flat-color-icons/combo-chart'

export default {
	components: {
		StackOfPhotosIcon,
		CollaborationIcon,
		CameraIcon,
		ComboChartIcon,
	},
}
</script>
