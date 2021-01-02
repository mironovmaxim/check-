<template>
  <ul class="total-list">
    <li class="total-list__item">
      <span>Выручка</span>
      <span class="total-list__sum">{{profit | capacity}} ₽</span>
    </li>
    <li class="total-list__item">
      <span>Расходы</span>
      <span class="total-list__expenses">{{expenses | capacity }} ₽</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'TotalList',
  computed: {
    profit () {
      return this.$store.getters.profit
    },
    expenses () {
      return this.$store.getters.expenses
    }
  }
}
</script>

<style lang="scss">
.total-list {
  list-style: none;
  margin: 0;
  padding: 12px 0px 27px 0px;
}

.total-list__item {
  background: rgba(68, 67, 104, 0.25);
  border-radius: 25px;
  padding: 8px 10px 8px 15px;
  margin-bottom: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.total-list__sum {
  border-radius: 15px;
  padding: 5px 10px;
  background-color: #0d9201;
}

.total-list__expenses {
  border-radius: 15px;
  padding: 5px 10px;
  background-color: #F25415;
}
</style>
