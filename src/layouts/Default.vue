<template>
  <div class="wrapper">
    <Navbar />
    <Header title="Планирование" mounth/>
    <main class="content">
        <router-view />
    </main>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Header from '@/components/Header'
export default {
  name: 'default',
  components: {
    Navbar,
    Header
  }
}
</script>

<style lang="scss" scope>
.wrapper {
  padding: 30px 30px 0px 30px;
}

.content {
  padding-bottom: 100px;
}
</style>
