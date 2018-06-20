
new Vue({
  el: "#exercises",
  data: {
    value: 0
  },

  computed: {
    result() {
      return this.value !== 37 ? "Not there yet" : "done"
    }
  },

  watch: {
    result() {
      setTimeout(() => {
        this.value = 0
      }, 5000);
    }
  }
});