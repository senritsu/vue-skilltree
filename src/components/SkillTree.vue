<template lang="html">
  <div class="skill-tree">
    <input type="range" min="1" max="3" v-model.number="links">
    <div class="skill-row">
      <SkillNode :links="links" />
    </div>
    <div class="skill-row">
      <SkillNode v-for="i in links" :links="links" :key="i" />
    </div>
    <div class="skill-row">
      <SkillNode v-for="i in (links*links)" :links="1" :key="i" />
    </div>
  </div>
</template>

<script>
import SkillNode from './SkillNode'
export default {
  data () {
    return {
      links: 3
    }
  },
  components: {
    SkillNode
  }
}
</script>

<style lang="scss" scoped>
.skill-tree {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  margin: auto;
}
.skill-row {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>
