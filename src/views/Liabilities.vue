<template>
  <div class="wrapper-content">
    <article class="period">
      <p class="period__title">
        Период с 10 по 15 числа месяца
      </p>
      <ul class="list">
        <li class="list__item item" :class="{done:isToggleOn}">
          <span class="item__name">Парикмахерская по японски</span>
          <span class="item__sum">300 &#8381;</span>
          <Toggle />
        </li>
        <li class="list__item item" :class="{done:isToggleOn}">
          <span class="item__name">Ипотека</span>
          <span class="item__sum">13 000 &#8381;</span>
          <div class="item__toggle" @click="toggle">
            <div class="item__ball" :class="{on:isToggleOn}"></div>
          </div>
          </li>
      </ul>
    </article>
    <article class="period">
      <p class="period__title">
        Период с 20 по 25 числа месяца
      </p>
      <ul class="list">
        <li class="list__item">
          <span>Бензин</span>
          <span>3 000</span>
        </li>
        <li class="list__item">
          <span>Бензин</span>
          <span>3 000</span>
          </li>
      </ul>
    </article>
  </div>
</template>

<script>
import Toggle from '../components/ui/Toggle'
export default {
  components: {
    Toggle
  }
}
</script>

<style lang="scss" scoped>
.period__title {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #919191;
  padding-bottom: 15px;
}

.list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.list__item {
  box-sizing: border-box;
  width: 100%;
  min-height: 48px;
  background: linear-gradient(0deg, #F87979, #F87979);
  border-radius: 3px;
  margin: 0;
  margin-bottom: 10px;
  padding: 0 10px 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &.done {
    background: linear-gradient(0deg, #8BD95B, #8BD95B), linear-gradient(180deg, rgba(123, 220, 107, 0.67) 0%, rgba(44, 162, 25, 0.54) 100%);
  }
}

.item__name {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #FFFFFF;
  padding: 8px 3px 8px 3px;
  width: 160px;

  @media (max-width: 405px) {
    font-size: 14px;
    width: 110px
  }

  @media (max-width: 360px) {
    font-size: 14px;
    width: 120px;
  }
}

.item__sum {
  color: #505050;
  height: 24px;
  min-width: 20px;
  padding: 0px 5px 0px 5px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;
  margin-left: auto;
  margin-right: 5px;

  @media (max-width: 360px) {
    font-size: 14px;
  }
}
</style>
