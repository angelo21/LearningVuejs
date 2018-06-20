
<template>
  <div class="row">
    <app-quote  
      v-for="(item, index) of quotes" 
      :key="item"
      @click.native="deleteQuote(index)">
      {{ item }}
    </app-quote>
  </div>
</template>

<script>
import appQuote from "./Quote.vue";

  export default {
  props: ["quotes"],
  components: {
      appQuote
    },
    methods: {
      deleteQuote(index) {
        this.$emit("quoteDeleted", index)
      }
    }
  }
</script>

<style>
</style>
