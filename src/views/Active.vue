<template>
  <div class="wrapper-content">
    <period
      :items=""
      @selectPeriod="getActive"
    />
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
  data: {
    periods: []
  },
  computed: {
    active () {
      return this.$store.getters.active
    }
  },
  created () {

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
