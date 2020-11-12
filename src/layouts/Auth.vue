<template>
  <div class="content__auth">
    <slot/>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.content__auth {
  position: relative;
  width: 100vw;
  height: 100vh;
  background:  linear-gradient(180deg, rgba(16, 64, 136, 0.71) 0%, rgba(67, 180, 146, 0.49) 53%, rgba(97, 145, 216, 0.7) 100%), #FFFFFF;
}
</style>
