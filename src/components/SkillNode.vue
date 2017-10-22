<template lang="html">
  <div class="skill-node" :style="{flex: `${links}`}">
    <div class="node-container"></div>
    <NodeLinks :links="links" />
  </div>
</template>

<script>
import NodeLinks from './NodeLinks'

export default {
  props: ['links'],
  components: {
    NodeLinks
  }
}
</script>

<style lang="scss" scoped>
.node-container {
  width: 60px;
  height: 60px;
  border: 5px solid black;
}
.skill-node {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
