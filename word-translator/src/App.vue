<template>
  <div id="app">
    <h1>Word Translator</h1>
    <h5>Powered by Vue.js</h5>
    <app-translate-form   
      v-on:formSubmit="translateText">
    </app-translate-form>
    <app-translate-output   
      :translatedText="translatedText">
    </app-translate-output>
  </div>
</template>

<script>
import AppTranslateForm from "./components/TranslateForm";
import AppTranslateOutput from "./components/TranslateOutput";

export default {
  data() {
    name: "App"
    return {
      translatedText: "",
    }
  },
  components: {
    AppTranslateForm,
    AppTranslateOutput
  },
  methods: {
    translateText(value, lang) {
      this.$http.get(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180702T150202Z.6fc71af78012a72d.defa3e73ef20326936745e20e39c6490fd2f8a9e&lang=${lang}&text= + ${value}`)
      .then((res) => this.translatedText = res.body.text[0])
    }
  }
}
</script>

<style>
</style>
