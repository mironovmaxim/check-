<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import Default from './layouts/Default'
export default {
  computed: {
    layout () {
      return this.$route.meta.layout
    }
  },
  components: {
    Default
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/general.scss';
</style>
