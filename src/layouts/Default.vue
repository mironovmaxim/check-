<template>
  <div class="wrapper">
    <Navbar />
    <main class="content">
        <router-view />
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
  padding-right: 20px;
  padding-top: 20px;
  padding-left: 75px;
}
</style>
