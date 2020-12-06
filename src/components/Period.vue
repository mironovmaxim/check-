<template>
    <article class="period">
      <p class="period__title">
        Выбери период в месяце
      </p>
      <ul class="period__items">
        <li class="period_item active">
          <span>10</span>
          <span>25</span>
        </li>
        <li class="period_item">
          <span>20</span>
          <span>25</span>
        </li>
      </ul>
    </article>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.period {
  margin-bottom: 47px;
}

.period__title {
  font-size: 18px;
  line-height: 22px;
  margin-bottom: 12px;
}

.period__items {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}

.period_item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: rgba(68, 67, 104, 0.25);
  border-radius: 15px;
  margin-right: 20px;

  & span {
    font-size: 14px;
    line-height: 17px;
    color: #9E9CC3;
  }

  &.active {
    border-bottom: 1px solid #F25415;
  }
}
</style>
