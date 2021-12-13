export default {
	buildModules: [
		'nuxt-windicss',
		'@nuxtjs/google-fonts',
		[
			'unplugin-icons/nuxt',
			{
				scale: 1.5,
			},
		],
	],
	components: true,
	css: ['~/assets/css/main.css'],
	googleFonts: {
		display: 'swap',
		families: {
			'Readex+Pro': [400, 600, 700],
		},
	},
	head: {
		title: 'Grow | Agencia de Marketing Digital',
		meta: [
			{
				name: 'viewport',
				content:
					'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0',
			},
		],
		link: [
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '32x32',
				href: '/favicon-32x32.png',
			},
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '16x16',
				href: '/favicon-16x16.png',
			},
		],
	},
	srcDir: 'src',
	target: 'static',
}
