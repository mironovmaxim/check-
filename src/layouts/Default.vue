<template>
  <div class="wrapper">
    <Navbar />
    <main class="content">
      <transition name="component-fade">
        <router-view />
      </transition>
    </main>
    <Foo title="Итого"/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Foo from '@/components/Foo'
export default {
  name: 'default',
  components: {
    Navbar,
    Foo
  }
}
</script>

<style lang="scss" scope>
.wrapper {
  position: relative;
}

.content {
  padding-top: 20px;
  padding-left: 65px;
}

.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .2s ease-in;
}
.component-fade-enter, .component-fade-leave-to {
  opacity: 0;
}
</style>
