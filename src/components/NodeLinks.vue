<template lang="html">
  <svg class="links" viewBox="0 0 100 100" preserveAspectRatio="none" >
    <polyline points="50 0 50 50" vector-effect="non-scaling-stroke"/>
    <polyline v-for="points in lines" :points="points" vector-effect="non-scaling-stroke"/>
  </svg>
</template>

<script>
export default {
  props: ['links'],
  computed: {
    lines () {
      const base = new Array(parseInt(this.links)).fill(50)
      const dx = 100 / base.length
      const xValues = base.map((x, i) => dx / 2 + i * dx)
      return xValues.map(x => `50 50 ${x} 50 ${x} 100`)
    }
  }
}
</script>

<style lang="scss" scoped>
.links {
  width: 100%;
  height: 100px;
}
.links polyline {
  fill: none;
  stroke: black;
  stroke-width: 5;
}
</style>
