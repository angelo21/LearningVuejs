<template>
  <div class="container">
    <app-new-quote @quoteAdded="newQuote"></app-new-quote>
    <app-grid :quotes="quotes" @quoteDeleted="deleteQuote"></app-grid>
    <div class="row">
      <div class="col-sm-12 text-center">
        <div class="alert alert-info">Info: Click on a Quote to delete it</div>
      </div>
    </div>
  </div>
</template>

<script>
  import appQuote from "./components/Quote.vue";
  import appGrid from "./components/QuoteGrid.vue";
  import appNewQuote from "./components/NewQuote.vue";

  export default {
    data() {
      return {
      quotes: [],
      maxQuotes: 10,
      }
    },
    methods: {
      newQuote(event) {
        this.quotes.push(event)
      },
      deleteQuote(index) {
        this.quotes.splice(index, 1);
      }
    },
    components: {
      appQuote,
      appGrid,
      appNewQuote
    }
  }
</script>

<style>
</style>
