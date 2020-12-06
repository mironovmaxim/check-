<template>
  <div class="wrapper-content">
    <period />
    <current-list
      title="Текущие платежи"
      toggle
      :items="liabilities"
    />
  </div>
</template>

<script>
import CurrentList from '@/components/CurrentList'
import Period from '@/components/Period'
export default {
  components: {
    Period,
    CurrentList
  },
  computed: {
    liabilities () {
      return this.$store.state.liabilities
    }
  }
}
</script>

<style lang="scss">
</style>
