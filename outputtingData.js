new Vue({
    el: "#exercise",
    data: {
      name: "Tom LanFranca",
      age: 36,
      link: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Google-Logo.svg/2000px-Google-Logo.svg.png"
    },
    methods: {
      randomNumber() {
        return Math.round(Math.random());
      },
  
      randomBetweenOneAndOneHundred() {
        return Math.floor(Math.random() * 100) + 1;
      }
    }
  }) 