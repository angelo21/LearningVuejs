
new Vue({
  el: "#app",
  data: {
    //SETS INITIAL STATE
    newGame: true,
    scoreboard: false,
    playerHealth: 100,
    monsterHealth: 100,
    actionArr: [],

    playerProgressBar: {
      width: "100%",
      backgroundColor: "green",
      margin: 0,
      color: "white"
    },

    monsterProgressBar: {
      width: "100%",
      backgroundColor: "green",
      margin: 0,
      color: "white"
    },
  },

  methods: {
    startNewGame() {
      this.newGame = false;
      this.scoreboard = true;
      this.actionArr = [];
    },

    attack() {
      let ranNumPlayer = Math.floor(Math.random() * 10)
      let ranNumMonster = Math.floor(Math.random() * 10)
      this.playerHealth -= ranNumPlayer;
      this.monsterHealth -= ranNumMonster;
      this.updateProgressBar();
      this.actionArr.push(`Monster hits player for ${ranNumPlayer}`);
      this.actionArr.push(`Player hits monster for ${ranNumMonster}`); 
    },

    specialAttack() {
      let ranNumSpecial = Math.floor(Math.random() * 20);
      let ranNumPlayer = Math.floor(Math.random() * 10);
      this.monsterHealth -= ranNumSpecial;
      this.playerHealth -= ranNumPlayer;
      this.updateProgressBar()
      this.actionArr.push(`Monster hits player for ${ranNumPlayer}`)
      this.actionArr.push(`Player hits monster for ${ranNumSpecial}`)
    },

    heal() {
      let heal = Math.floor(Math.random() * 15);
      let monsterAttack = Math.floor(Math.random() * 10)
      if (this.playerHealth + heal <= 100) {
        this.playerHealth += heal;
        this.playerHealth -= monsterAttack;
      }
      this.updateProgressBar();
    },

    reset() {
      this.newGame = true;
      this.playerProgressBar.width = "100%";
      this.monsterProgressBar.width = "100%";
      this.playerHealth = 100;
      this.monsterHealth = 100;
    },

    playerWins() {
      this.monsterHealth = 0;
      this.monsterProgressBar.width = "0%";
      alert("Player Won!");
      this.reset();
    },

    monsterWins() {
      this.playerHealth = 0;
      this.playerProgressBar.width = "0%";
      alert("Monster Won!");
      this.reset();
    },

    updateProgressBar() {
      this.playerProgressBar.width = this.playerHealth + "%";
      this.monsterProgressBar.width = this.monsterHealth + "%";
    }
  }
});