
new Vue({
  el: "#exercise",
  data: {
    value: "",
  },
  methods: {
    clicked() {
      alert("You clicked me");
    },

    getValue(event) {
      this.value = event.target.value;
    }
  }
});