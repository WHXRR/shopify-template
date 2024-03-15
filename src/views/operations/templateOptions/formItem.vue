<template>
  <el-form-item :label="item.label">
    <el-input
      @click="positionedElement(item)"
      type="textarea"
      v-model="form[item.field]"
      @input="(e) => handleInput(e, item)"
    />
  </el-form-item>
</template>

<script setup>
import { templateStore } from "@/store/template";

const props = defineProps({
  item: Object,
  form: Object,
});

const useTemplateStore = templateStore();
const handleInput = (e, item) => {
  if (item.type === "background") {
    const el = document.querySelector(item.targetElement);
    if (el) {
      el.style.background = `url(${e}) center/cover no-repeat`;
    }
  } else {
    const el = document.querySelector(item.targetElement);
    if (el) {
      el[item.type] = e;
    }
  }
};

const positionedElement = (item) => {
  addSelectedClass(item);
  useTemplateStore.timer = setTimeout(() => {
    removeSelectedClass(item);
  }, 1500);
};
const addSelectedClass = (item) => {
  if (useTemplateStore.timer) {
    clearTimeout(useTemplateStore.timer);
  }
  const selectEl = document.querySelector(".is-selected");
  if (selectEl) {
    selectEl.classList.remove("is-selected");
    setTimeout(() => {
      el && el.classList.remove("scale");
    }, 200);
  }
  const el = document.querySelector(item.targetElement);
  const templateContainer = document.querySelector(".template-content");
  if (el) {
    el.classList.add("scale");
    el.classList.add("is-selected");
    templateContainer && templateContainer.classList.add("template-mask");
    el.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  }
};
const removeSelectedClass = (item) => {
  const templateContainer = document.querySelector(".template-content");
  const el = document.querySelector(item.targetElement);
  el && el.classList.remove("is-selected");
  setTimeout(() => {
    el && el.classList.remove("scale");
  }, 200);
  templateContainer && templateContainer.classList.remove("template-mask");
};
</script>
<style scoped lang="scss"></style>
