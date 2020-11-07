<template>
  <div class="wrapper">
    <Navbar />
    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  name: 'default',
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
.wrapper {
  // display: flex;
  position: relative;
}

.content {
  padding-left: 50px;
}
</style>
