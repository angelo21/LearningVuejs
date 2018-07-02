<template>
  <div id="app">
    <h1>Word Translator</h1>
    <h5>Powered by Vue.js</h5>
    <app-translate-form   
      v-on:formSubmit="translateText">
    </app-translate-form>
  </div>
</template>

<script>
import AppTranslateForm from "./components/TranslateForm";

export default {
  components: {
    AppTranslateForm,
  },
  methods: {
    translateText(value) {
      console.log(value)
    }
  }
}
</script>

<style>
</style>
