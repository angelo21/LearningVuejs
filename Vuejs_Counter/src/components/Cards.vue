
<template>
    <p @click="cardClicked(card.cost, clicked)" :class="{active: clicked}">
      <span>{{ card.title }}</span> 
      <span>${{ card.cost }}.00</span>
    </p>
</template>

<script>
import { eventBus } from "../main.js";
  export default {
    data() {
      return  {
        clicked: false
      }
    },
    props: ["card"],

    methods: {
      cardClicked(total, clicked) {
        eventBus.$emit("changeTotal", total, clicked)
        this.clicked = !this.clicked;
      }
    }
  }
</script>

<style>
  p {
    display: flex;
    justify-content: space-between;
    background-color: #E35885;
    border-radius: .5rem;
    padding: 2rem;
    font-weight: bold;
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
  p:hover {
    cursor: pointer;
  }
  .active {
    background-color: green 
  }
</style>
