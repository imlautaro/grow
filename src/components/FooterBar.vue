<template>
	<footer class="bg-white py-8 text-gray-400 text-sm">
		<div
			class="flex flex-col md:flex-row space-y-8 md:space-y-0 items-center justify-between container"
		>
			<span
				>Grow &copy; {{ new Date().getFullYear() }} | Desarrollado por
				<a class="text-cyan-600" href="//imlautaro.com" target="_blank"
					>@imlautaro</a
				></span
			>
			<div class="flex items-center space-x-4">
				<span>Síguenos en</span>
				<FacebookIcon />
				<InstagramIcon />
				<TwitterIcon />
				<TikTokIcon />
			</div>
		</div>
	</footer>
</template>

<script>
import FacebookIcon from '~icons/fa-brands/facebook'
import InstagramIcon from '~icons/fa-brands/instagram'
import TwitterIcon from '~icons/fa-brands/twitter'
import TikTokIcon from '~icons/fa-brands/tiktok'

export default {
	components: {
		FacebookIcon,
		InstagramIcon,
		TwitterIcon,
		TikTokIcon,
	},
}
</script>
