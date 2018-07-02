<template>
  <div id="app" class="main" @click="popup">
    <app-popup 
      v-if="show" 
      :text.sync="textContent">
    </app-popup>
    
    <div class="main__contain">
      <p class="main__heading">Hello World</p>
      <p class="main__subheading">Click Anywhere</p>
    </div>
  </div>
</template>

<script>
import AppPopup from "./components/Popup";

export default {
  name: 'app',
  data () {
    return {
      show: false,
      textContent: "",
    }
  },
  methods: {
    popup() {
      this.show = !this.show;
    }
  },
  components: {
    AppPopup,
  }
}
</script>

<style lang="scss">
  .main {
    cursor: default;

    &__contain {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      color: #6D8088;
      font-size: 25px;
      font-weight: bold;
      font-family: sans-serif;
      text-align: center;
    }

    &__subheading {
      font-size: 12px;
    }
  }
  
</style>
