import { defineConfig } from 'windicss/helpers'
import native from 'windi-native'

export default defineConfig({
	plugins: [native],
	theme: {
		container: {
			center: true,
			padding: '1rem',
		},
		fontFamily: {
			sans: ['"Readex Pro"', 'sans-serif'],
		},
	},
})
