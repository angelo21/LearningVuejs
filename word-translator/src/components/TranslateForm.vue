
<template>
  <div id="translate-form">
    <form @submit.prevent="formSubmit">
      <input 
        type="text" 
        v-model="textToTranslate" 
        placeholder="Enter a Word">
        <input type="submit" value="Translate">
    </form>
  </div>
</template>

<script>

export default {
  data() {
    return {
      textToTranslate: "",
    }
  },
  methods: {
    formSubmit() {
      this.$emit("formSubmit", this.textToTranslate)
    }
  }
}
</script>

<style>
</style>
