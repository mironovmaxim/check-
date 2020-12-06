<template>
  <div class="content__auth">
    <div class="wrapper__header-auth">
      <h1 class="title__auth">Привет, <br> давай <br> авторизируемся</h1>
      <img src="../assets/img/avatar-auth.svg">
    </div>
    <slot/>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.wrapper__header-auth {
  padding: 30px 30px 90px 30px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.title__auth {
  margin: 0;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
}

.content__auth {
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #272240;
}
</style>
