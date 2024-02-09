<script>
export default {
    name: 'eventList',
    data() {
        return {
            events: []
        }
    },
    mounted() {
        this.getEvents();
    },
    methods: {
        getEvents() {
            axios.get("http://localhost:8000/api/events").then(risultato => {
                console.log(risultato.data.payload);
                this.events = risultato.data;
            }).catch(errore => {
                console.error(errore);
            });
        }
    }
}
</script>
<template>
    <h1>ecco gli eventi</h1>
    <ul>
        <li v-for="event in events" :key="event.id">
            {{ event.name }}
        </li>
    </ul>
</template>
<style scoped lang="scss"></style>