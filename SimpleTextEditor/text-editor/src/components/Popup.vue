
<template>
  <div>
    <input 
      type="text" 
      class="popup__input"
      :value="text"
      @input="$emit('update:text', $event.target.value)">
  </div>
</template>

<script>
export default {
  props: ["text"]
}
</script>


<style lang="scss">
  .popup__input {
    border: 7px solid #5B9AB6;
    border-radius: 6px;
    font-size: 18px;
    font-weight: bold;
    color: #6D8088;
    outline: none;
    padding: 10px;
    width: 300px;
  }
</style>
