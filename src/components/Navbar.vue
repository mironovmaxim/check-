<template>
  <div class="wrapper-nav">
    <nav class="menu">
      <router-link to="/" exact-active-class="active" class="menu__item">
        <font-awesome-icon  icon="coins"/>
      </router-link>
      <router-link to="/liabilities" active-class="active" class="menu__item">
        <font-awesome-icon icon="wallet" />
      </router-link>
      <router-link to="/capital" active-class="active" class="menu__item">
        <font-awesome-icon icon="donate"/>
      </router-link>
      <router-link to="/capital" active-class="active" class="menu__item">
        <font-awesome-icon icon="sign-out-alt"/>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scope>
.wrapper-nav {
  position: fixed;
  display: flex;
  align-items: center;
  left: 30px;
  right: 30px;
  bottom: 30px;
  height: 60px;
  background-color: #444368;
  border-radius: 25px;
  z-index: 2;
  transition: width 0.5s ease-in-out;
}
.menu {
  padding: 0;
  padding-left: 23px;
  padding-right: 23px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  position: relative;
  transition: color 0.3s ease-in-out;
  outline: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  &:active {
    outline: none;
  }

  &.active {
    color: #F25415;
  }
}
</style>
