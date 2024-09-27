import { helloWorld } from './utils/util'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((_nuxtApp) => {
  console.log('Plugin injected by my-module!')
  console.log(helloWorld())
})
