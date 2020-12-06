<template>
  <header class="header">
    <div class="wrapper-header">
      <h1 class="header__title">Планирование</h1>
      <span class="header__avatar">
        <!-- <img src="" alt="Ваш аватар"> -->
      </span>
    </div>
    <p class="header__mounth">{{data}}</p>
  </header>
</template>

<script>
export default {
  computed: {
    data () {
      const options = { month: 'long' }
      const mount = new Intl.DateTimeFormat('ru-RU', options).format(new Date())
      return mount.charAt(0).toUpperCase() + mount.slice(1)
    }
  }

}
</script>

<style lang="scss">
.header {
  margin-bottom: 43px;
}
.wrapper-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header__title {
  margin: 0;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 29px;
}
.header__avatar {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background-color: #C4C4C4;
}

.header__mounth {
  font-size: 14px;
  line-height: 17px;
}
</style>
