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
        console.log(this.store.tags)
    }
}
</script>
<template>
    <div v-if="event != null">
        <h2>{{ event.name }}</h2>
        <p v-for="tag in event.tags">{{ tag.name }}</p>
    </div>
</template>
<style scoped lang="scss"></style>