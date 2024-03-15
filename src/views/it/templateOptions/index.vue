<template>
  <el-input type="textarea" v-model="value" :rows="20" />
</template>

<script setup>
import { ref, watchEffect } from "vue";
import koreOptions from "@/assets/js/kore.js";
import koreJar2Options from "@/assets/js/kore-jar2.js";
import { templateStore } from "@/store/template";
import {
  generateProductImageHTML,
  generateDescHTML,
  generateCommentHTML,
} from "@/utils/index.js";

const useTemplateStore = templateStore();
const value = ref("");
watchEffect(() => {
  if (value.value) {
    const templateValue = JSON.parse(value.value);
    if (useTemplateStore.currentTemplate === "kore") {
      updateHTML(koreOptions, templateValue);
    } else if (useTemplateStore.currentTemplate === "kore-jar2") {
      updateHTML(koreJar2Options, templateValue);
    }
  }
});

const updateHTML = (optionProps, formValue) => {
  // 修改普通dom元素
  optionProps.forEach((item) => {
    if (["src", "background", "innerText", "href"].includes(item.type)) {
      const el = document.querySelector(item.targetElement);
      if (!formValue[item.field] && el) {
        // el.remove();
        el.style.display = "none";
      } else if (el && formValue[item.field]) {
        if (el.style.display === "none") {
          el.style.removeProperty("display");
        }
        if (item.type === "background") {
          el.style.background = `url(${
            formValue[item.field]
          }) center/cover no-repeat`;
        } else {
          el[item.type] = formValue[item.field];
        }
      }
    }
  });
  // 修改产品图
  const productImageNode = document.querySelector("#gallery_nav");
  removeNode(productImageNode);
  replaceNode(formValue, "productImg", generateProductImageHTML);
  // 修改产品简介
  const productDescNode = document.querySelector(".right-content ul");
  removeNode(productDescNode);
  replaceNode(formValue, "productDesc", generateDescHTML);
  // 修改产品简介
  const productCommentNode = document.querySelector(
    ".kore-customer-review .row"
  );
  removeNode(productCommentNode);
  replaceNode(formValue, "comment", generateCommentHTML);
};

const removeNode = (parentElement) => {
  while (parentElement.firstChild) {
    parentElement.removeChild(parentElement.firstChild);
  }
};
const replaceNode = (formValue, node, generateHTML) => {
  formValue[node].forEach((item, index) => {
    let params;
    typeof item === "object"
      ? (params = Object.values(item))
      : (params = [item]);
    generateHTML(index + 1, ...params);
  });
};
</script>
<style scoped lang="scss"></style>
