<template>
	<section
		id="nosotros"
		class="bg-blue-gray-100 py-12 sm:py-24 text-center text-gray-900"
	>
		<div class="container px-8 flex flex-col space-y-8 sm:space-y-16">
			<div class="max-w-screen-sm flex flex-col space-y-4 mx-auto">
				<span class="font-bold text-3xl sm:text-4xl"
					>Nuestro equipo</span
				>
				<p class="text-gray-600 text-sm sm:text-base">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Reprehenderit eos odit facilis perspiciatis, quaerat hic
					omnis.
				</p>
			</div>
			<div class="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-5 gap-8">
				<team-member
					name="Richard Hendricks"
					description="Community Manager"
					photo="https://images.mubicdn.net/images/cast_member/217466/cache-139800-1463179389/image-w856.jpg?size=800x"
				/>
				<team-member
					name="Erlich Bachman"
					description="Diseñador e Ilustrador"
					photo="https://bodysize.org/wp-content/uploads/2018/02/T.J.-Miller-300x400.jpg"
				/>
				<team-member
					name="Gilfoyle"
					description="Fotógrafo"
					photo="https://es.web.img3.acsta.net/r_1280_720/pictures/18/03/29/15/28/2589808.jpg"
				/>
				<team-member
					name="Jared Dunn"
					description="Diseñador y copywriter"
					photo="https://images.moviefit.me/p/o/4993-zach-woods.jpg"
				/>
				<team-member
					name="Mónica"
					description="Marketer y copywriter"
					photo="https://www.cnet.com/a/img/Hw3Sw39gqyRfBWLKFqFC-Jj3r-8=/940x0/2017/04/13/2fc5cbfe-7f5c-4073-99f5-e452d1b85608/silicon-valley-hbo-amanda-crew-monica-6.jpg"
				/>
			</div>
		</div>
	</section>
</template>
