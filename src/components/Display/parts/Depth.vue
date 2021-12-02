<template>
  <div class="depth">
    <span id="depth-value">{{ depth }}</span>m
  </div>
</template>

<script lang="ts">

import { Options, Vue } from 'vue-class-component'
import { mapState } from 'vuex'

@Options({
  computed: {
    ...mapState({
      depth: 'depth'
    })
  }
})

export default class Depth extends Vue {
}
</script>

<style scoped lang="scss">
.depth {
  #depth-value {
    font-size: 100px;
  }
  font-size: 30px;
}
</style>
