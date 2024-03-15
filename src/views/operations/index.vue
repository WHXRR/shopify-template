<template>
  <div class="select-template-container">
    <div class="select-template-btn">
      <el-button type="primary" plain @click="$router.push('/shopify-template')" size="small"
        >返回首页</el-button
      >
      <el-button type="success" plain @click="generateCode" size="small"
        >生成代码</el-button
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
import { ref } from "vue";
import { ElMessage } from "element-plus";
import { templateStore } from "@/store/template";
import TemplateHTML from "@/views/template/index.vue";
import TemplateOptions from "./templateOptions/index.vue";

const useTemplateStore = templateStore();
const changeTemplate = (template) => {
  useTemplateStore.currentTemplate = template;
};

const templateLeft = ref(null);
const generateCode = () => {
  const formValue = templateLeft.value.form;
  const obj = {};
  templateLeft.value.templateOptions.forEach((item) => {
    if (["productImg", "productDesc"].includes(item.type)) {
      const arr = [];
      item.children.forEach((ele) => {
        arr.push(formValue[ele.field]);
        obj[item.type] = arr;
      });
    } else if (item.type === "comment") {
      const arr = [];
      item.children.forEach((comment) => {
        const params = {};
        comment.children.forEach((ele) => {
          params[ele.field] = formValue[ele.field];
        });
        arr.push(params);
      });
      obj[item.type] = arr;
    } else if (["src", "background", "innerText", "href"].includes(item.type)) {
      if (formValue[item.field]) {
        obj[item.field] = formValue[item.field];
      }
    }
  });
  const result = JSON.stringify(obj);
  navigator.clipboard.writeText(result).then(() => {
    ElMessage.success({
      message: "复制成功",
      type: "success",
    });
  });
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
