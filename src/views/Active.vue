<template>
  <div class="wrapper-content">
    <current-list
      title="Выручка"
      :items="active"
      />
  </div>
</template>

<script>
import CurrentList from '@/components/CurrentList'
export default {
  components: {
    CurrentList
  },
  computed: {
    active () {
      return this.$store.state.active
    },
    periods () {
      return this.$store.state.periods
    }
  },
  beforeMount () {
    this.$store.dispatch('getPeriods')
    this.$store.dispatch('getActive')
    this.$store.dispatch('getLiabilities')
  },
  methods: {
    getActive ({ id }) {
      console.log(id)
    }
  }
}
</script>

<style>
</style>
