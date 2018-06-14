
new Vue({
  el: "#exercise",
  data: {
    //SETS ORIGINAL STATE
    isActive: false,

    //SETTING STYLES FOR ARRAY CHALLENGE
    green: "green",
    orangeRed: "orangered",
    color: "teal",

    progressBar: {
      width: "0px",
      height: "20px",
      blue: "blue",
    }
  },

  //SETS HIGHLIGHT AND SHRINK CLASSES TO TRUE OR FALSE
  computed: {
    bigOrSmall() {
      return {
        highlight: this.isActive,
        shrink: !this.isActive
      }
    },

    changeColor() {
      return {
        backgroundColor: this.color,
      }
    },

    bar() {
      return {
        backgroundColor: this.progressBar.blue,
        height: this.progressBar.height,
        width: this.progressBar.width,
      }
    },

    
  },

  //FLIPS TRUE AND FALSE EVERY 2 SECONDS
  methods: {
    startEffect() {
      setInterval(() => {
        this.isActive = !this.isActive;
      }, 2000)
    },

    //INCREMENT STATUS BAR BY TEN EVERY SECOND
    load() {
      let width = 0;
      setInterval(() => {
        width = width + 10;
        this.progressBar.width = width + "px";
      }, 1000)
    }
  },
});