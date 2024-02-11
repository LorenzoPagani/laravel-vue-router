<script>
import { RouterLink } from 'vue-router';
import { store } from "../store.js" //state management

export default {
    name: 'eventList',
    data() {
        return {
            store
        };
    },
    mounted() {

    },
    methods: {

    },
    components: { RouterLink }
}
</script>
<template>
    <h1>ecco gli eventi</h1>

    <ul>
        <li v-for="event in store.events" :key="event.id">
            <router-link :to="{ name: 'single-event', params: { id: event.id } }" class="btn btn-primary">

                {{ event.name }}
            </router-link>
        </li>
    </ul>
</template>
<style scoped lang="scss"></style>