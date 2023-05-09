<template>
  <div class="template-container">
    <div class="options">
      <button @click="downloadHTML">downloadHTML</button>
      <input
        style="border: none; padding: 0; margin-top: 10px"
        accept=".html"
        type="file"
        id="file"
        ref="file"
        @change="selectFile"
      />
    </div>
    <div class="template">
      <div v-html="htmlTemplate" ref="ele"></div>
    </div>
    <div class="config">
      <div v-for="item in styleArr" :key="item.key" class="form-item">
        <div class="form-label">{{ item.label }}</div>
        <textarea
          style="width: 100%"
          v-if="item.key === 'text'"
          rows="10"
          v-model="formStyle[item.key]"
        ></textarea>
        <input
          v-else
          type="text"
          class="form-ipt"
          v-model="formStyle[item.key]"
        />
      </div>
      <div class="btn-list">
        <button class="btn second-btn" @click="addEle">增加当前项</button>
        <button class="btn second-btn" @click="removeEle">删除当前项</button>
      </div>
      <button class="btn primary-btn" @click="submit">submit</button>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";
import kore from "@/assets/template/kore.js";

const htmlTemplate = ref("");
htmlTemplate.value = kore;
// 左侧
const ele = ref(null);
// 下载
const downloadHTML = () => {
  const link = document.createElement("a");
  document.body.appendChild(link);
  const url = URL.createObjectURL(
    new Blob([ele.value.outerHTML], { type: "text/plain;charset='utf-8'" })
  );
  link.href = url;
  link.download = name + ".html";
  link.click();
  window.URL.revokeObjectURL(url);
};
// 上传
const file = ref(null);
const fileString = ref("");
const selectFile = () => {
  let reader = new FileReader();
  const files = file.value.files;
  reader.readAsText(files[0], "UTF-8");
  reader.onload = (e) => {
    e.target.result.includes("</style>")
      ? (fileString.value = e.target.result.split("</style>")[1])
      : (fileString.value = e.target.result);
    htmlTemplate.value = fileString.value;
  };
};

// 中间
const currentEle = ref(null);
const styleArr = reactive([
  {
    label: "图片地址/文字",
    key: "text",
  },
  {
    label: "背景色",
    key: "backgroundColor",
  },
  {
    label: "字体大小",
    key: "fontSize",
  },
  {
    label: "字体颜色",
    key: "color",
  },
]);
const formStyle = reactive({
  text: "",
  backgroundColor: "",
  fontSize: "",
  color: "",
});
window.addEventListener("click", (e) => {
  if (getTargetNode(e.target, "template")) {
    currentEle.value = e.target;
    const style = window.getComputedStyle(currentEle.value);
    styleArr.forEach((item) => {
      if (item.key === "text") return;
      formStyle[item.key] = style[item.key];
    });
    if (currentEle.value.tagName === "IMG") {
      formStyle.text = currentEle.value.getAttribute("src");
    } else {
      formStyle.text = currentEle.value.innerText;
    }
  }
});
const currentSelectedEle = ref(null);
window.addEventListener("mousemove", (e) => {
  if (getTargetNode(e.target, "template")) {
    if (currentSelectedEle.value === e.target) return
    if (currentSelectedEle.value !== null) {
      currentSelectedEle.value.classList.remove("is-selected");
    }
    currentSelectedEle.value = e.target
    currentSelectedEle.value.classList.add("is-selected");
    console.log(e.target);
  }
});
const getTargetNode = (currentNode, targetClassName) => {
  let current = currentNode;
  while (current !== null) {
    if (current.classList && current.classList.contains(targetClassName)) {
      return current;
    }
    current = current.parentNode;
  }
  return false;
};

// 右侧
const addEle = () => {
  if (currentEle.value && currentEle.value !== null) {
    const copyEle = currentEle.value.cloneNode(true);
    currentEle.value.parentNode.appendChild(copyEle);
  }
};
const removeEle = () => {
  if (currentEle.value && currentEle.value !== null) {
    currentEle.value.remove();
    currentEle.value = null;
    Object.keys(formStyle).forEach((key) => {
      formStyle[key] = "";
    });
  }
};
const submit = () => {
  if (currentEle.value && currentEle.value !== null) {
    styleArr.forEach((item) => {
      currentEle.value.style[item.key] = formStyle[item.key];
    });
    if (currentEle.value.tagName === "IMG") {
      currentEle.value.setAttribute("src", formStyle.text);
    } else {
      currentEle.value.innerText = formStyle.text;
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/css/kore.css";
.template-container {
  display: grid;
  grid-template-columns: 15% 70% 15%;
  height: 100vh;
  overflow: hidden;
  .template {
    cursor: pointer;
    overflow-y: auto;
  }
}
.container {
  width: auto !important;
}
.options,
.config {
  padding: 5px 10px;
}
.form-item {
  margin-bottom: 10px;
  font-size: 14px;
  .form-label {
    padding-bottom: 4px;
  }
  .form-ipt {
    width: 100%;
    border-top: none;
    border-left: none;
    border-right: none;
    border-radius: 0;
  }
}
.btn-list {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
}
.btn {
  margin-bottom: 5px;
}
.second-btn {
  width: 50%;
}
.primary-btn {
  width: 100%;
  margin-top: 5px;
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
}
.is-selected {
  transition: all .3s;
  background-color: #a0c5e8;
}
</style>
