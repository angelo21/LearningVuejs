<template>
  <div>
    <div class="list">
          <div class="list__group">
              <ul class="list__ul">
                  <li class="list__item" :key="index" v-for="index in 5">
                      <span class="list__span">Server #{{ index }}</span>
                  </li>
              </ul>
          </div>
            <p>Server Details are currently not updated</p>
      </div>
  </div>
</template>

<style lang="scss">
  html {
      padding: 0;
      margin: 0;
      font-size: 62.5%;
  }
  body {
    font-size: 1.6rem;
  }

  //VARIABLES
  $border: 1px solid lightGray;

  .list {
    display: flex;
    justify-content: space-around;
    
    &__ul {
      padding-left: 0;
    }

    &__group {
      flex-basis: 50%;
    }

    &__item {
      list-style-type: none;
      padding: 1rem 0;
      border-bottom: $border;
      border-left: $border;
      border-right: $border;
    }

    &__item:first-of-type {
      border-top: $border;
    }

    &__span {
      margin-left: 1.5rem;
    }
  }
</style>