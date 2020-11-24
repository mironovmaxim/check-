<template>
  <div class="item__toggle" @click="toggle">
    <div class="item__ball" :class="{on:isToggleOn}"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isToggleOn: false
    }
  },
  methods: {
    toggle () {
      this.isToggleOn = !this.isToggleOn
    }
  }
}
</script>

<style lang="scss">
.item__toggle {
  flex-shrink: 0;
  position: relative;
  width: 40px;
  height: 21px;
  background-color: #FFFFFF;
  border-radius: 10px;
}

.item__ball {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  background-color: #F87979;
  transition: transform 0.3s ease, background-color 0.2s ease;

  &.on {
    transform: translateX(19px);
    background-color: #8BD95B;
    transition: transform 0.3s ease, background-color 0.2s ease;
  }
}
</style>
