<template>
  <div class="template-relative">
    <div class="template-content"></div>
    <KoreTemplate v-if="useTemplateStore.currentTemplate === 'kore'" />
    <KoreJar2Template v-if="useTemplateStore.currentTemplate === 'kore-jar2'" />
  </div>
</template>

<script setup>
import KoreTemplate from "./kore/index.vue";
import KoreJar2Template from "./kore-jar2/index.vue";
import { templateStore } from "@/store/template";
const useTemplateStore = templateStore();

</script>
<style lang="scss">
.scale {
  transform: scale(1);
  transition: all 0.3s;
}
.is-selected {
  position: relative;
  display: block;
  padding: 5px;
  transform: scale(1.05);
  z-index: 3;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.7);
}
.container {
  width: auto;
}
.template-relative {
  position: relative;
  background-color: #fff;
}
.template-content {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  transition: all 0.3s;
  background-color: transparent;
}
.template-mask {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
