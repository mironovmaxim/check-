<template>
  <div class="wrap-form">
    <form class="form-add" @submit.prevent>
      <label class="form-add__title" for="Add">Добавление</label>
      <button @click="openSelect">
        <label></label>
        <div
          class="options"
          v-show="true"
        >
          <span>Выручка</span>
          <span>Платеж</span>
        </div>
      </button>
      <select id="Add" v-model="selectedWhat" @click="clickSelect">
        <option>Выручка</option>
        <option>Платеж</option>
      </select>
      <input
        class="form-add__name form-input"
        type="text"
        placeholder="Название"
        :disabled="sequence"
      >
      <input
        class="form-add__sum form-input"
        type="number"
        placeholder="Сумма"
        :disabled="sequence"
      >
      <select v-if="showPeriods">
        <option>10-15</option>
        <option>15-25</option>
      </select>
    </form>
    <button class="form-add__btn">
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
        <g clip-path="url(#clip0)">
        <path d="M16.9824 42.9105L0.732446 26.6605C-0.243823 25.6843 -0.243823 24.1014 0.732446 23.125L4.2679 19.5894C5.24417 18.6131 6.82717 18.6131 7.80344 19.5894L18.7502 30.5361L42.197 7.08944C43.1733 6.11317 44.7563 6.11317 45.7325 7.08944L49.268 10.625C50.2443 11.6013 50.2443 13.1842 49.268 14.1605L20.518 42.9106C19.5416 43.8869 17.9587 43.8869 16.9824 42.9105Z" fill="white"/>
        </g>
        <defs>
        <clipPath id="clip0">
        <rect width="50" height="50" fill="white"/>
        </clipPath>
        </defs>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectedWhat: null,
      formData: {}
    }
  },
  computed: {
    showPeriods () {
      if (this.selectedWhat === 'Платеж') {
        return true
      } else {
        return false
      }
    },
    sequence () {
      if (this.selectedWhat) {
        return false
      } else {
        return true
      }
    }
  },
  methods: {
    openSelect () {
      console.log(document.querySelector('#Add'))
      const select = document.querySelector('#Add')
      select.addEventListener('click', () => {})
    },
    clickSelect () {}
  }
}
</script>

<style lang="scss">
.wrap-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.form-add {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.form-input {
  background: rgba(68, 67, 104, 0.25);
  border-radius: 25px;
  padding: 12px 18px;
  border: none;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #F25415;
}

.form-add__btn {
  border: none;
  width: 80px;
  height: 80px;
  background: #F25415;
  border-radius: 50px;
}
</style>
