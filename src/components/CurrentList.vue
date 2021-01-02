<template>
    <article class="current-list">
      <div class="current-list__header">
        <p class="current-list__title">
          {{title}}
        </p>
        <router-link to="/add" class="add">
          <svg class="add__icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <rect y="7" width="16" height="2" fill="white"/>
            <rect x="7" y="16" width="16" height="2" transform="rotate(-90 7 16)" fill="white"/>
          </svg>
        </router-link>
      </div>
      <ul class="current-list__items">
        <li
          v-for="item in items"
          :key="item.id"
          class="current-list_item item"
          :class="{done: item.allocated}"
        >
          <span>{{item.name}}</span>
          <div class="item__footer">
            <span class="item__amount">{{item.amount | capacity}} ₽</span>
            <toggle v-if="toggle" @changeState="itemDone($event, item.id)"/>
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
  methods: {
    itemDone (stateToggle, id) {
      this.$store.commit('toggleItem', {
        stateToggle,
        id
      })
    }
  }
}
</script>

<style lang="scss">
.current-list__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.current-list__items {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
}

.done {
  order: 1;
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

.add {
  display: block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: #ffffff;
  font-size: 40px;
  background-color: #F25415;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
