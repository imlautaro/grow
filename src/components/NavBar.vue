<template>
	<nav
		id="header"
		class="bg-white py-4 text-gray-900 shadow-lg sticky top-0 left-0"
	>
		<Menu :open="menuOpen" @close="menuOpen = false" />
		<div class="flex items-center justify-between container">
			<NuxtLink
				to="/"
				class="font-bold flex items-center space-x-2 text-3xl uppercase"
			>
				<PositiveDynamicIcon />
				<span>Grow</span>
			</NuxtLink>
			<div class="hidden md:flex items-center">
				<nav-bar-item to="servicios">
					<IdeaIcon />
					<span> Servicios </span>
				</nav-bar-item>
				<nav-bar-item to="nosotros">
					<ConferenceCallIcon />
					<span>Nosotros</span>
				</nav-bar-item>
				<nav-bar-item to="precios">
					<CurrencyExchangeIcon />
					<span>Precios</span>
				</nav-bar-item>
				<nav-bar-item to="contacto">
					<CommentsIcon />
					<span>Contacto</span>
				</nav-bar-item>
			</div>
			<button
				@click="menuOpen = true"
				class="flex md:hidden duration-100 rounded-md hover:bg-black/5 p-4"
			>
				<MenuIcon />
			</button>
		</div>
	</nav>
</template>

<script>
import MenuIcon from '~icons/flat-color-icons/menu'
import CommentsIcon from '~icons/flat-color-icons/comments'
import CurrencyExchangeIcon from '~icons/flat-color-icons/currency-exchange'
import ConferenceCallIcon from '~icons/flat-color-icons/conference-call'
import IdeaIcon from '~icons/flat-color-icons/idea'
import PositiveDynamicIcon from '~icons/flat-color-icons/positive-dynamic'

export default {
	components: {
		MenuIcon,
		CommentsIcon,
		CurrencyExchangeIcon,
		ConferenceCallIcon,
		IdeaIcon,
		PositiveDynamicIcon,
	},
	data() {
		return {
			menuOpen: false,
		}
	},
}
</script>
