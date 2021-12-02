<template>
  <div class="computer">
    <div class="first-row">
      <Depth/>
      <DiveTime/>
    </div>
    <div class="second-row"></div>
    <div class="third-row"></div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Depth from './parts/Depth.vue'
import DiveTime from '@/components/Display/parts/DiveTime.vue'
import { mapState } from 'vuex'

@Options({
  components: {
    DiveTime,
    Depth
  },

  computed: {
    ...mapState({
      depth: 'depth'
    })
  }
})

export default class Computer extends Vue {
}
</script>

<style scoped lang="scss">
.computer {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  width: 600px;
  height: 400px;
  background-color: #000;
  color: #2AACE3;

  .first-row {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
}
</style>
