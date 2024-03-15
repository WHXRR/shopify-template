import { defineStore } from 'pinia'
export const templateStore = defineStore('template', {
  state: () => {
    return {
      currentTemplate: 'kore',
      currentTemplateOptions: [],
      currentTemplateHTML: '',
      timer: null
    }
  },
  actions: {
  }
})