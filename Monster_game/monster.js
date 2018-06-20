
new Vue({
  el: "#app",
  data: {
    //SETS INITIAL STATE
    newGame: false,
    playerHealth: 100,
    monsterHealth: 100,
    actionArr: [],
    timer: false,
    regularAttack: 0,
    healTimer: false,
    healed: 0,

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
      this.newGame = true;
      this.actionArr = [];
    },

    randomAttackNumber(num) {
      return Math.floor(Math.random() * num);
    },

    attack() {
      let ranNumPlayer = this.randomAttackNumber(15);
      let ranNumMonster = this.randomAttackNumber(10)
      this.playerHealth -= ranNumPlayer;
      this.monsterHealth -= ranNumMonster;
      this.updateProgressBar();
      this.actionArr.unshift(`Monster hits player for ${ranNumPlayer}`);
      this.actionArr.unshift(`Player hits monster for ${ranNumMonster}`); 
      this.regularAttack++;
      this.healed++;
      //DISABLES SPECIAL ATTACK FOR 5 MOVES
      if (this.regularAttack >= 5) {
        this.timer = false;
        this.regularAttack = 0;
      }
      //DISABLES HEAL FOR 5 MOVES
      if (this.healed >= 5) {
        this.healTimer = false;
        this.healed = 0;
      }
    },

    specialAttack() {
      let ranNumSpecial = this.randomAttackNumber(20);
      let ranNumPlayer = this.randomAttackNumber(10);
      this.monsterHealth -= ranNumSpecial;
      this.playerHealth -= ranNumPlayer;
      this.updateProgressBar()
      this.actionArr.unshift(`Monster hits player for ${ranNumPlayer}`)
      this.actionArr.unshift(`Player hits monster hard for ${ranNumSpecial}`)
      this.timer = true;
    },

    heal() {
      let heal = this.randomAttackNumber(15);
      let monsterAttack = this.randomAttackNumber(10)
      if (this.playerHealth + heal <= 100) {
        this.playerHealth += heal;
        this.playerHealth -= monsterAttack;
      }
      this.actionArr.unshift(`Player heals ${heal} points`)
      this.updateProgressBar();
      this.healTimer = true;
    },

    reset() {
      this.newGame = false;
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