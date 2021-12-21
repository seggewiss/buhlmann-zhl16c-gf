import { reactive } from 'vue'

const state = reactive({
  time: 0,
  depth: 0
})

let interval = 0

export default state

export function start (): void {
  interval = setInterval(() => {
    state.time += 1
  }, 1000)
}

export function stop (): void {
  if (interval === 0) {
    return
  }

  clearInterval(interval)
}

export function ascend (distance: number): void {
  state.depth += distance
}

export function descend (distance: number): void {
  state.depth -= distance
}
