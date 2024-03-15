<template>
  <div v-html="kore" ref="ele"></div>
</template>

<script setup>
import { nextTick, ref } from "vue";
import { templateStore } from "@/store/template";
import kore from "@/assets/template/kore.js";

const ele = ref(null)
const useTemplateStore = templateStore();
nextTick(() => {
  useTemplateStore.currentTemplateHTML = ele.value
})
</script>
<style lang="scss">
@import "@/assets/css/kore.css";
</style>
