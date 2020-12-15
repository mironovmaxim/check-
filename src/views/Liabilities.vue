<template>
  <div class="wrapper-content">
    <period @selectPeriod="getLiabilities"/>
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
