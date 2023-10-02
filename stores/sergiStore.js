import { defineStore } from 'pinia'

export const useSergiStore = defineStore('sergiStore', {
  state: () => { 
    return {
      windowSize: {x: 0, y: 0},
      activeArtist: '',
      activeBio: ''
    } 
  },
  actions: {
    setWindowSize(windowSize) {
      this.windowSize = windowSize
    },
  }
})