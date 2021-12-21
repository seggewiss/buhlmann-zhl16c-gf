<template>
  <Display msg="Welcome to Your Vue.js + TypeScript App"/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Display from './components/Display.vue'

@Options({
  components: {
    Display
  }
})
export default class App extends Vue {}
</script>
