import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  meta: [
    { name: "format-detection", content: "email=no" },
    { name: "format-detection", content: "telephone=no" },
    { "http-equiv=": "Content-Language", content: "zh-CN" },
    { "http-equiv=": "X-UA-Compatible", content: "IE=edge,chrome=1" },
  ],
  build: {
    cache: true,
    parallel: true,
    extractCSS: true,
    publicPath: 'https://static.rmzj.me/',
  }
})