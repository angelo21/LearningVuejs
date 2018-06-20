
<template>
  <div>
    <h1>Services</h1>
    <app-body>
      <app-cards v-for="(item) of card" :key="item.title" :card="item"></app-cards>
    </app-body>
    <hr>
    <appFooter :total="total"></appFooter>
  </div>
</template>

<script>
  import appFooter from "./components/Footer.vue"
  import appBody from "./components/AppBody.vue"
  import appCards from "./components/Cards.vue"
  import { eventBus } from "./main.js"

  export default {
    data() {
      return {
        total: 0.00,
        card: [
          {title: "Web Development", cost: 300},
          {title: "Design", cost: 400},
          {title: "Integration", cost: 250},
          {title: "Training", cost: 220},
        ]
      }
    },
    created() {
      eventBus.$on("changeTotal", (total, clicked) => {
        if (clicked === false) {
          this.total += total;
        } else {
          this.total -= total;
        }
      })
    },
    components: {
    appFooter,
    appBody,
    appCards
    }
  }
</script>

<style>
  /*GLOBAL*/
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  html {
    font-size: 62.5%;
    box-sizing: inherit;
  }
  body {
    font-size: 1.8rem;
    font-family: sans-serif;
  }
  h1 {
    text-align: center;
    font-family: cursive;
  }
  div {
    width: 80%;
    padding: 1rem;
    margin: 2rem auto;
    background-color: #61A1BC;
    color: white;
  }
</style>
