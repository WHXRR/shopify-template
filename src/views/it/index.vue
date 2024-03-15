<template>
  <div class="select-template-container">
    <div class="select-template-btn">
      <el-button
        type="primary"
        plain
        @click="$router.push('/shopify-template')"
        size="small"
        >返回首页</el-button
      >
      <el-button type="primary" plain @click="downloadHTML" size="small"
        >下载</el-button
      >
      <el-button
        type="warning"
        plain
        @click="changeTemplate('kore')"
        size="small"
        >kore</el-button
      >
      <!-- <el-button type="danger" plain @click="changeTemplate('kore-jar2')"
        >kore-jar2</el-button
      > -->
    </div>
    <div class="template-container">
      <div class="options">
        <TemplateOptions ref="templateLeft" />
      </div>
      <div class="template">
        <TemplateHTML />
      </div>
    </div>
  </div>
</template>

<script setup>
import TemplateHTML from "@/views/template/index.vue";
import TemplateOptions from "./templateOptions/index.vue";
import { templateStore } from "@/store/template";

const useTemplateStore = templateStore();
const downloadHTML = () => {
  const link = document.createElement("a");
  document.body.appendChild(link);
  const url = URL.createObjectURL(
    new Blob([useTemplateStore.currentTemplateHTML.outerHTML], {
      type: "text/plain;charset='utf-8'",
    })
  );
  link.href = url;
  link.download = useTemplateStore.currentTemplate + ".html";
  link.click();
  window.URL.revokeObjectURL(url);
};

const changeTemplate = (template) => {
  useTemplateStore.currentTemplate = template;
};
</script>
<style scoped lang="scss">
.select-template-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  .select-template-btn {
    z-index: 1;
    padding: 10px;
    box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2);
  }
  .template-container {
    flex: 1;
    display: flex;
    overflow: hidden;
    overflow: hidden;
    height: 100%;
    .options {
      width: 30%;
      padding: 10px;
      padding-right: 30px;
      overflow-y: auto;
    }
    .template {
      padding: 50px;
      flex: 1;
      overflow-y: auto;
      background-color: #e8e8e8;
    }
  }
}
</style>
