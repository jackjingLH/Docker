import Vue from 'vue'
import Router from 'vue-router'
import MMain from 'components/m-main/m-main'
import Card from 'components/card/card'
import Card1 from 'components/card/card1'
import Card2 from 'components/card/card2'
import Card3 from 'components/card/card3'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: MMain,
      children: [
        {
          path: '/',
          component: Card
        },
        {
          path: '/card1',
          component: Card1
        },
        {
          path: '/card2',
          component: Card2
        },
        {
          path: '/card3',
          component: Card3
        }
      ]
    }
  ]
})
