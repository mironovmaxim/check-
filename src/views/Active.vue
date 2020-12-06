<template>
  <div class="wrapper-content">
    <period />
    <current-list />
  </div>
</template>

<script>
import CurrentList from '@/components/CurrentList'
import Period from '@/components/Period'
export default {
  components: {
    Period,
    CurrentList
  }
}
</script>

<style>
</style>
