<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!server">Please Select a Server</p>
        <p v-else>Server #{{ server.id }} selected, Status: {{ server.status }}</p>
        <hr>
        <button @click="resetStatus">Change to Normal</button>
    </div>
</template>

<script>
    import { serverBus } from "../../main.js";

    export default {
        data() {
            return {
                server: null
            }
        },
        methods: {
            resetStatus() {
                this.server.status = "Normal"
            }
        },
        created() {
            serverBus.$on("serverSelected", (data) => {
                this.server = data;
            })
        }
    }
</script>

<style>

</style>
