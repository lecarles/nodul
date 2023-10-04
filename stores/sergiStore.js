import { defineStore } from 'pinia'

export const useSergiStore = defineStore('sergiStore', {
  state: () => { 
    return {
      windowSize: {x: 0, y: 0},
      activeArtist: 'dbabeff7-dad8-4acf-b493-e023b30047e8',
      activeBio: ''
    } 
  },
  actions: {
    setWindowSize(windowSize) {
      this.windowSize = windowSize
    },
  }
})