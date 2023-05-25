<template>
  <header class="header">
    <router-link to="/" class="header__logo">
      <img src="./assets/logo.svg" alt="logo">
    </router-link>
    <div class="header__links">
      <router-link class="header__links-item" to="/" active-class="_active" exact>Форма</router-link>
      <router-link class="header__links-item" to="/preview" active-class="_active" exact>Превью</router-link>
    </div>
  </header>

  <main>
    <div class="container">
      <router-view />
    </div>
  </main>

  <footer class="footer">
    <div class="footer__copy">all rights reserved</div>
  </footer>
</template>

<script>
import { useStore } from 'vuex'
import { onMounted } from 'vue';

import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/700.css';

export default {
  setup() {
    const { dispatch } = useStore()

    onMounted(() => {
      fetchUserData()
    })

    function fetchUserData() {
      dispatch('userData/fetchUserData')
    }
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: 'Montserrat', sans-serif;
}

main {
  flex-grow: 1;
  padding: 30px 0;
}

.container {
  max-width: 616px;
  margin: 0 auto;
  padding: 0 15px;
}

.header {
  display: flex;
  align-items: center;
  padding: 24px 15px;
  box-shadow: 0px 1px 0px rgba(17, 17, 17, 0.1);

  @media (min-width: 768px) {
    padding: 24px 40px;
  }

  &__links {
    flex-grow: 1;
    text-align: center;

    &-item {
      margin: 0 12px;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      color: rgba(17, 17, 17, 0.48);
      text-decoration: none;

      &._active {
        color: rgba(17, 17, 17, 0.88);
      }
    }
  }
}

.footer {
  padding: 30px;
  background: #FAFAFA;
  box-shadow: 0px 1px 0px rgba(17, 17, 17, 0.1);

  &__copy {
    text-align: center;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    color: #000000;
  }
}
</style>
