<template>
  <div id="app" class="main">
    <div class="main__contain">
      <app-popup 
        v-if="show"
        :text.sync="textContent">
      </app-popup>
      <p class="main__heading">{{ textContent }}</p>
      <p 
        class="main__subheading" 
        @click="popup">Click me to begin</p>
    </div>
  </div>
</template>

<script>
import AppPopup from "./components/Popup";

export default {
  name: "app",
  data() {
    return {
      show: false,
      textContent: "Hello World"
    };
  },
  methods: {
    popup() {
      this.show = !this.show;
    }
  },
  components: {
    AppPopup
  }
};
</script>

<style lang="scss">
.main {
  cursor: default;

  &__contain {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: #6d8088;
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
