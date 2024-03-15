<script setup>
</script>

<template>
  <div class="main">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<style scoped>
.main {
  height: 100vh;
  overflow: hidden;
}
</style>
