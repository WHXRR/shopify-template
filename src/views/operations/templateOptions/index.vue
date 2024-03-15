<template>
  <el-form :model="form" label-width="auto" label-position="top">
    <template v-for="item in templateOptions" :key="item.field">
      <template
        v-if="['innerText', 'src', 'href', 'background'].includes(item.type)"
      >
        <formItem :form="form" :item="item" />
      </template>
      <!-- --------------------------------------------------kore模板------------------------------------------------------------- -->
      <template v-if="['productImg', 'productDesc'].includes(item.type)">
        <el-form-item
          label="产品链接(可用来一键获取产品图)"
          v-if="['productImg'].includes(item.type)"
        >
          <el-input
            type="textarea"
            placeholder="例如：https://www.xxxx.com/products/xxxxx"
            v-model="productLink"
            @input="handleInputProductImage"
          />
        </el-form-item>
        <template v-for="ele in item.children" :key="ele.field">
          <formItem :form="form" :item="ele" />
        </template>
      </template>
      <template v-if="['comment'].includes(item.type)">
        <template v-for="ele in item.children" :key="ele.field">
          <div
            style="padding-bottom: 10px; font-weight: bold; text-align: center"
          >
            {{ ele.label }}
          </div>
          <template v-for="comment in ele.children" :key="comment.field">
            <formItem :form="form" :item="comment" />
          </template>
        </template>
      </template>
      <template
        v-if="
          [
            'addProductImg',
            'delProductImg',
            'addProductDesc',
            'delProductDesc',
            'addComment',
            'delComment',
          ].includes(item.type)
        "
      >
        <el-button
          style="margin-bottom: 10px"
          @click="handleCustomOptions(item)"
          :type="
            ['addProductImg', 'addComment', 'addProductDesc'].includes(
              item.type
            )
              ? 'primary'
              : 'danger'
          "
          size="small"
          plain
          >{{ item.label }}</el-button
        >
      </template>
    </template>
  </el-form>
</template>

<script setup>
import { nextTick, ref, watchEffect } from "vue";
import { ElMessage } from "element-plus";
import koreOptions from "@/assets/js/kore.js";
import koreJar2Options from "@/assets/js/kore-jar2.js";
import formItem from "./formItem.vue";
import { templateStore } from "@/store/template";
import {
  debounce,
  generateGalleryHTML,
  generateProductImageOptions,
  generateProductImageHTML,
  generateCommentOptions,
  generateCommentHTML,
  generateDescOptions,
  generateDescHTML,
} from "@/utils/index.js";

const useTemplateStore = templateStore();
const form = ref({});
const templateOptions = ref([]);
const updateFormOption = (children, parent) => {
  const el = document.querySelector(children.targetElement);
  if (el) {
    if (children.type === "background") {
      const bg = el.style.background;
      const urlRegex = /url\((['"]?)(.*?)\1\)/;
      const matches = bg.match(urlRegex);
      form.value[children.field] = matches ? matches[2] : "";
    } else {
      form.value[children.field] = el[children.type];
    }
  } else {
    form.value[children.field] = "";
    parent.children = parent.children.filter(
      (child) => child.field !== children.field
    );
  }
};
const updateForm = (isInit) => {
  nextTick(() => {
    templateOptions.value.forEach((item) => {
      if (["innerText", "src", "href", "background"].includes(item.type)) {
        updateFormOption(item);
      } else if (["productImg", "productDesc"].includes(item.type)) {
        item.children.forEach((ele) => {
          updateFormOption(ele, item);
        });
      } else if (["comment"].includes(item.type)) {
        if (isInit) {
          item.children.forEach((ele) => {
            ele.children.forEach((comment) => {
              updateFormOption(comment, ele);
            });
          });
        } else {
          item.children.forEach((ele) => {
            updateFormOption(ele, item);
          });
        }
      }
    });
  });
};
watchEffect(() => {
  if (useTemplateStore.currentTemplate === "kore") {
    templateOptions.value = JSON.parse(JSON.stringify(koreOptions));
  } else if (useTemplateStore.currentTemplate === "kore-jar2") {
    templateOptions.value = JSON.parse(JSON.stringify(koreJar2Options));
  }
  updateForm(true);
});
// ----------------------------------------------------------------------kore模板-----------------------------------------------------------------------
const handleDom = (
  className,
  field,
  type,
  generateOptions,
  generateHTML,
  item
) => {
  const allEl = document.querySelectorAll(className);
  templateOptions.value.forEach((ele) => {
    if (ele.type === field) {
      if (item.type === type) {
        const options = generateOptions(allEl.length + 1);
        ele.children.push(options);
        generateHTML(allEl.length + 1);
        updateForm(true);
      } else {
        // 先删除dom
        const el = allEl[allEl.length - 1];
        el && el.remove();
        updateForm();
      }
    }
  });
};
const handleCustomOptions = (item) => {
  if (["addProductImg", "delProductImg"].includes(item.type)) {
    handleDom(
      "#gallery_nav a",
      "productImg",
      "addProductImg",
      generateProductImageOptions,
      generateProductImageHTML,
      item
    );
  } else if (["addComment", "delComment"].includes(item.type)) {
    handleDom(
      ".kore-customer-review .row .col-xs-12",
      "comment",
      "addComment",
      generateCommentOptions,
      generateCommentHTML,
      item
    );
  } else if (["addProductDesc", "delProductDesc"].includes(item.type)) {
    handleDom(
      ".right-content ul li",
      "productDesc",
      "addProductDesc",
      generateDescOptions,
      generateDescHTML,
      item
    );
  }
};
// 处理产品图
const productLink = ref("");
const productImages = ref([]);
const oneClickImage = (e) => {
  const callbackName = "jsonpCallback";
  const script = document.createElement("script");
  script.src = `${e}.json?callback=${callbackName}`;
  document.body.appendChild(script);
  window[callbackName] = (data) => {
    if (data?.product) {
      ElMessage.success({
        message: "获取成功",
        type: "success",
      });
      productImages.value = data.product.images.map((item) => item.src);
      const result = generateGalleryHTML(productImages.value);
      const targetElement = document.getElementById("gallery");
      targetElement.innerHTML = result;
      updateForm();
      document.body.removeChild(script);
      delete window[callbackName];
    }
  };
};
const handleInputProductImage = debounce(oneClickImage, 500);

defineExpose({ form, templateOptions });
</script>
<style scoped lang="scss"></style>
