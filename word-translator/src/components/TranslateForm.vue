
<template>
  <div id="translate-form">
    <form 
      @submit.prevent="formSubmit"
      class="well">
      <input 
        class="form-control"
        type="text" 
        v-model="textToTranslate" 
        placeholder="Enter a Word">
        <br>
        <select 
          v-model="language"
          class="form-control">
          <option value="es">Spanish</option>
          <option value="ru">Russian</option>
          <option value="fr">French</option>
        </select>
        <br><br>
        <input 
          type="submit" 
          value="Translate"
          class="btn btn-primary">
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
  #translate-form {
    max-width: 500px;
    margin: auto;
  }
</style>
