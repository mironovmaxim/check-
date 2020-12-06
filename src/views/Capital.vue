<template>
  <div class="wrapper-content">
    <article class="total">
      <p class="total__title">
        Итоги месяца
      </p>
      <TotalList />
      <Balance />
    </article>
  </div>
</template>

<script>
import TotalList from '@/components/Capital/TotalList'
import Balance from '@/components/Capital/Balance'
export default {
  components: {
    TotalList,
    Balance
  }
}
</script>

<style>

</style>
