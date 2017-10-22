import Vue from 'vue'
import Router from 'vue-router'
import SkillTree from '@/components/SkillTree'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: SkillTree
    }
  ]
})
