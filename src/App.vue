<template>
  <Display/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Display from './components/Display/Display.vue'

@Options({
  components: {
    Display
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #a9a9a9;
}
</style>
