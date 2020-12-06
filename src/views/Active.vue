<template>
  <div class="wrapper-content">
    <period />
    <current-list
      title="Текущие активы"
      :items="active"
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
    active () {
      return this.$store.getters.active
    }
  }
}
</script>

<style>
</style>
