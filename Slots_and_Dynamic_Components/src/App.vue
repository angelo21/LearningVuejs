<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button @click="isDisplayed = 'appBlue'" class="btn btn-primary">Load Blue Template</button>
                <button @click="isDisplayed = 'appGreen'" class="btn btn-success">Load Green Template</button>
                <button @click="isDisplayed = 'appRed'" class="btn btn-danger">Load Red Template</button>
                <hr>
                <component :is="isDisplayed">
                    <h3>This is the content</h3>
                </component>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data() {
            return {
                isDisplayed: "appBlue"
            }
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        }
    }
</script>

<style>
</style>
