<template>
  <div class="wrapper-nav">
    <nav class="menu">
      <router-link to="/" exact-active-class="active" class="menu__item">Активы</router-link>
      <router-link to="/liabilities" exact-active-class="active" class="menu__item">Пассивы</router-link>
      <router-link to="/capital" exact-active-class="active" class="menu__item">Капитал</router-link>
      <button class="menu__button">
        FontAwesome
      </button>
    </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.wrapper-nav {
  position: fixed;
  height: 100vh;
  width: 50px;
  background-color: #505050;
}
.menu {
  margin: 0;
  padding: 0;
  outline: none;
}

.menu__item {
  display: block;
  font-size: 20px;
  color: #ffffff;
  text-decoration: none;
  transform: scale(-1);
  margin: 30px 0px 50px 10px;
  // margin-top: 50px;
  writing-mode:vertical-rl;
  position: relative;
  font-family: 'Roboto', sans-serif;
}

.active::before {
  content: '';
  position: absolute;
  border-radius: 50%;
  top: calc(50% - 5px);
  right: 24px;
  width: 10px;
  height: 10px;
  background-color: #A2CBFD;
}

.menu__button {
  border: none;
  background-color: #A2CBFD;
  width: 35px;
  height: 35px;
}
</style>
