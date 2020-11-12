<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
export default {
  computed: {
    layout () {
      return this.$route.meta.layout || 'default'
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/general.scss';
</style>
