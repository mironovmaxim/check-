<template>
  <div class="balance">
    <p class="balance__title">Прибыль</p>
    <span class="balance__sum">{{balance | capacity}} ₽</span>
    <p class="balance__info">
      {{textInfo}}
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      info: [
        { text: 'Отлично потрудились! Еще чуть-чуть и выбирайте себе новенькую BMW :)' },
        { text: 'Чуть больше усилий и сможете купить Mercedes-Benz :)' },
        { text: 'Ой, кажется вы должны денег :(' }
      ]
    }
  },
  computed: {
    balance () {
      const profit = this.$store.getters.profit
      const expenses = this.$store.getters.expenses
      return profit - expenses
    },
    textInfo () {
      if (this.balance < 0) {
        return this.info[2].text
      } else if (this.balance === 0) {
        return this.info[1].text
      } else {
        return this.info[0].text
      }
    }
  }
}
</script>

<style lang="scss">
.balance__title {
  padding-bottom: 5px;
}

.balance__sum {
  font-size: 48px;
  line-height: 59px;
}

.balance__info {
  margin-top: 12px;
}
</style>
