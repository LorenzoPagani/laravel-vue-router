<script>
import { store } from "../store.js" //state management
import register from "../debug" //per debuggare il componente da console
import { RouterLink } from 'vue-router';

export default {
    name: "singleEvent",
    data() {
        return {
            store,
            event: null
        }
    },
    methods: {

    },
    mounted() {
        this.event = this.store.events.find(item => item.id == this.$route.params.id);
        register(this); //per debuggare il componente da console
        console.log("evento: ", this.store.events.find(item => item.id == this.$route.params.id))
        console.log("eventolocale: ", this.event.name)
    }
}
</script>
<template>
    <h2 v-if="event != null">{{ event.name }}</h2>
</template>
<style scoped lang="scss"></style>