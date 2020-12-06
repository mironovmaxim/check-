<template>
  <ul class="total-list">
    <li class="total-list__item">
      <span>Прибыль</span>
      <span> 100 000 ₽</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'TotalList',
  props: {
    items: {
      type: Array,
      default: function () {
        return []
      }
    }
  }
}
</script>

<style>

</style>
