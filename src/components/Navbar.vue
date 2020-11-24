<template>
  <div class="wrapper-nav" :class="{ open:isOpenMenu }">
    <nav class="menu">
      <button class="menu__open" :class="{ iconClose:isOpenMenu }" @click="openMenu">
        <font-awesome-icon icon="arrow-circle-right" />
      </button>
      <router-link to="/" exact-active-class="active" class="menu__item">
        <font-awesome-icon  icon="hand-holding-usd" @click="isOpenMenu=false"/>
        <span class="menu__name" @click="isOpenMenu=false">Доходы</span>
      </router-link>
      <router-link to="/liabilities" active-class="active" class="menu__item">
        <font-awesome-icon icon="credit-card" @click="isOpenMenu=false" />
        <span class="menu__name" @click="isOpenMenu=false">Платежи</span>
      </router-link>
      <router-link to="/capital" active-class="active" class="menu__item">
        <font-awesome-icon icon="chart-pie" @click="isOpenMenu=false" />
        <span class="menu__name" @click="isOpenMenu=false">Капитал</span>
      </router-link>
      <router-link to="/add">
        <button class="menu__button" @click="$emit('click-add')">
          <font-awesome-icon icon="plus" />
        </button>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isOpenMenu: false
    }
  },
  methods: {
    openMenu () {
      this.isOpenMenu = !this.isOpenMenu
    }
  }
}
</script>

<style lang="scss" scope>
.wrapper-nav {
  position: fixed;
  height: 100vh;
  width: 60px;
  background-color: #505050;
  z-index: 2;
  transition: width 0.5s ease-in-out;
  overflow: hidden;

  @media (max-width: 360px) {
    width: 45px;
  }

  &.open {
    width: 200px;
    transition: width 0.5s ease-in-out;
  }
}
.menu {
  margin: 0;
  padding: 0;
  height: 300px;
}

.menu__open {
  border: none;
  background: none;
  padding: 0;
  width: 60px;
  height: 60px;
  color: #ffffff;
  font-size: 35px;
  transition: transform 0.5s ease-in-out;
  outline: none;

  @media (max-width: 360px) {
    width: 45px;
    height: 60px;
  }
}

.iconClose {
  transform: translate(140px) rotate(180deg);
  transition: transform 0.5s ease-in-out;
}

.menu__item {
  display: block;
  display: flex;
  justify-content: space-between;
  font-size: 27px;
  color: #ffffff;
  max-width: 30px;
  max-height: 30px;
  text-decoration: none;
  padding: 15px;
  position: relative;
  transition: color 0.3s ease-in-out;
  outline: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  @media (max-width: 360px) {
    padding: 15px 7px 15px 7px;
  }

  & span {
    padding-left: 25px;
    font-size: 20px;
  }

  &:active {
    outline: none;
  }

  &.active {
    color: #be5757;
  }
}

.menu__button {
  border: none;
  border-radius: 50%;
  background-color: #A2CBFD;
  width: 35px;
  height: 35px;
  color: #ffffff;
  margin-left: 11px;
  margin-top: 50px;
}
</style>
