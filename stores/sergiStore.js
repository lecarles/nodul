import { defineStore } from 'pinia'

export const useSergiStore = defineStore('sergiStore', {
  state: () => { 
    return {
      windowSize: {x: 0, y: 0},
      smoother: null
    } 
  },
  actions: {
    setWindowSize(windowSize) {
      this.windowSize = windowSize
    },
  }
})