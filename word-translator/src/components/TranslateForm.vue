
<template>
  <div id="translate-form">
    <form @submit.prevent="formSubmit">
      <input 
        type="text" 
        v-model="textToTranslate" 
        placeholder="Enter a Word">
        <select v-model="language">
          <option value="es">Spanish</option>
          <option value="ru">Russian</option>
          <option value="fr">French</option>
        </select>
        <input type="submit" value="Translate">
    </form>
  </div>
</template>

<script>

export default {
  name: "Translate-form",
  data() {
    return {
      textToTranslate: "",
      language: "es",
    }
  },
  methods: {
    formSubmit() {
      this.$emit("formSubmit", this.textToTranslate, this.language)
    }
  }
}
</script>

<style>
</style>
