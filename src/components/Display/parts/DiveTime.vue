<template>
  <div class="dive-time">
    <label>DiveTime</label>
    <span id="dive-time-value">{{ getDisplayTime() }}</span>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { mapState } from 'vuex'

@Options({
  computed: {
    ...mapState({
      diveTime: 'diveTime'
    })
  }
})
export default class DiveTime extends Vue {
  diveTime!: number

  getDisplayTime (): string {
    const date = new Date()
    date.setMinutes(0)
    date.setSeconds(this.diveTime)

    return date.toISOString().substr(14, 5)
  }
}
</script>

<style scoped lang="scss">
.dive-time {
  display: flex;
  flex-direction: column;
  align-items: center;

  label {
    color: #fff;
    font-size: 20px;
  }

  #dive-time-value {
    font-size: 100px;
  }
}
</style>
