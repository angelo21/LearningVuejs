<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <server-status 
                :key="index" 
                v-for="(server, index) in servers" :server="server">
            </server-status>
        </ul>
    </div>
</template>

<script>
    import ServerStatus from "./Server-Status.vue"; 

    export default {
        data() {
            return {
                servers: [
                    { id: 1, status: "Normal"},
                    { id: 2, status: "Critical"},
                    { id: 3, status: "Unknown"},
                    { id: 4, status: "Normal"},
                ]
            }
        },
        components: {
            "server-status": ServerStatus
        }
    }
</script>

<style>

</style>
