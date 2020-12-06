<template>
  <div class="content__auth">
    <h1 class="title__auth">Привет, <br> давай <br> авторизируемся</h1>
    <slot/>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.title__auth {
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
}

.content__auth {
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #272240;
  padding: 30px;
}
</style>
