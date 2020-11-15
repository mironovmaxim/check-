<template>
  <div class="wrapper-content">
    <article class="period">
      <p class="period__title">
        Период с 10 по 15 числа месяца
      </p>
      <ul class="period__items">
        <li class="period_item">
          <span>Maxim</span>
          <span>35 000</span>
        </li>
        <li class="period_item">
          <span>Anastasia</span>
          <span>35 000</span>
          </li>
      </ul>
    </article>
    <article class="period">
      <p class="period__title">
        Период с 20 по 25 числа месяца
      </p>
      <ul class="period__items">
        <li class="period_item">
          <span>Maxim</span>
          <span>35 000</span>
        </li>
        <li class="period_item">
          <span>Anastasia</span>
          <span>35 000</span>
          </li>
      </ul>
    </article>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.period__title {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #919191;
  padding-bottom: 15px;
}

.period__items {
  margin: 0;
  padding: 0;
  list-style: none;
}

.period_item {
  background: #FFFFFF;
  border: 1px solid #A2CBFD;
  border-radius: 3px;
  padding: 12px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
}
</style>
