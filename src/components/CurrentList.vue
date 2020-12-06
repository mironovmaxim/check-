<template>
    <article class="current-list">
      <p class="current-list__title">
        {{title}}
      </p>
      <ul class="current-list__items">
        <li v-for="item in items" :key="item.id" class="current-list_item item">
          <span>{{item.name}}</span>
          <div class="item__footer">
            <span class="item__amount">{{item.amount | bitness}} ₽</span>
            <toggle v-if="toggle"/>
          </div>
        </li>
      </ul>
    </article>
</template>

<script>
import Toggle from '@/components/ui/Toggle'
export default {
  props: {
    title: {
      type: String,
      default: function () {
        return 'Заголовок'
      }
    },
    toggle: {
      type: Boolean,
      default: function () {
        return false
      }
    },
    items: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  components: {
    Toggle
  },
  filters: {
    bitness: function (value) {
      if (!value) return ''
      return value.toLocaleString('ru')
    }
  }
}
</script>

<style lang="scss">
.current-list__title {
  margin-bottom: 8px;
}
.current-list__items {
  margin: 0;
  padding: 0;
  list-style: none;
}

.current-list_item {
  width: 100%;
  height: 70px;
  background: rgba(68, 67, 104, 0.25);
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  box-sizing: border-box;

  & span {
    font-size: 18px;
    line-height: 22px;
  }

  & .item__footer {
    display: flex;
    justify-content: space-between;
  }

  & .item__amount {
    font-size: 14px;
  }
}

</style>
