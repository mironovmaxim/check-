<template>
  <div class="wrapper-content">
    <period
      :items="periods"
      @selectPeriod="getLiabilities"/>
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
    periods () {
      return this.$store.state.periods
    },
    liabilities () {
      return this.$store.state.liabilities
    }
  },
  beforeMount () {
    this.$store.dispatch('getPeriods')
    this.$store.dispatch('getLiabilities')
  },
  methods: {
    getLiabilities ({ id }) {
      console.log(id)
    }
  }
}
</script>

<style lang="scss">
</style>
