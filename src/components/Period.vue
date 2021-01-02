<template>
    <article class="period">
      <p class="period__title">
        Выбери период в месяце
      </p>
      <ul class="period__items">
        <li
          v-for="period in items"
          :key="period.id"
          class="period__item"
          :class="{active: selectedPeriod === period}"
          @click="selectPeriod(period)"
        >
          <span>{{period.from}}</span>
          <span>{{period.to}}</span>
        </li>
      </ul>
    </article>
</template>

<script>
export default {
  props: {
    items: Array,
    default () {
      return []
    }
  },
  data () {
    return {
      selectedPeriod: null
    }
  },
  methods: {
    selectPeriod (period) {
      this.selectedPeriod = period
      this.$emit('selectPeriod', { id: period.id })
    }
  }
}
</script>

<style lang="scss">
.period {
  margin-bottom: 7px;
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
  flex-wrap: wrap;
}

.period__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  box-sizing: border-box;
  background: rgba(68, 67, 104, 0.25);
  border-radius: 15px;
  margin-right: 20px;
  margin-bottom: 20px;

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
