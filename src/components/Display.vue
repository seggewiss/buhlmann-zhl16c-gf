<template>
  <div class="display">
    {{ state.time }}s
    {{ state.depth }}m

    <button @click="startDive">Start</button>
    <button @click="endDive">Stop</button>
    <input type="number" min="0.1" step="0.1" v-model="distance"/>
    <button @click="ascendByDistance">Ascend</button>
    <button @click="descendByDistance">Descend</button>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
import state, { start, stop, ascend, descend } from '../store'

export default class Display extends Vue {
  distance = 1
  state = state

  startDive (): void {
    start()
  }

  endDive (): void {
    stop()
  }

  ascendByDistance (): void {
    ascend(this.distance)
  }

  descendByDistance (): void {
    descend(this.distance)
  }
}
</script>

<style scoped lang="scss">
.display {
  display: flex;
}
</style>
