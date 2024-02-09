<script>
import AppComponent from "./components/AppComponent.vue"

import axios from 'axios'; //importo Axios
import { store } from "./store.js" //state management

export default {
	components: {
		AppComponent
	},
	data() {
		return {
			store
		}
	},
	mounted() {
		this.getEvents();
	},
	methods: {
		getEvents() {
			axios.get("http://localhost:8000/api/events").then(risultato => {
				console.log(risultato.data.payload);
				this.store.events = risultato.data;
			}).catch(errore => {
				console.error(errore);
			});
		}
	}
}
</script>

<template>
	<main>

		<router-link :to="{ name: 'eventList' }" class="nav-link">Lista eventi</router-link>

		<Router-view></Router-view>
	</main>
</template>

<style lang="scss">
// importo il foglio di stile generale dell'applicazione, non-scoped
@use './styles/general.scss';
</style>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;

// ...qui eventuale SCSS di App.vue
main {
	padding: 1rem;
}
</style>