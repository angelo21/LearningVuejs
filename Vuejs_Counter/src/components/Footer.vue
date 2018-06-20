
<template>
  <div>
    <footer>
      <span>Total:</span>
      <span>${{ total }}.00</span>
    </footer>
  </div>
</template>

<script>
  export default {
    props: ["total"]
  }
   
</script>

<style>
  footer {
    display: flex;
    justify-content: space-around;
    font-weight: bold;
    font-size: 1.8rem;
  }
</style>
