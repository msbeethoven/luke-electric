import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import PanelUpgrades from '../views/PanelUpgrades.vue'
import NewConstructionElectrical from '../views/NewConstructionElectrical.vue'
import ElectricalRepairs from '../views/ElectricalRepairs'
import OutdoorLighting from '../views/OutdoorLighting'
import Testimonials from '../views/Testimonials'
import Contact from '../views/Contact'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/panel-upgrades',
    name: 'PanelUpgrades',
    component: PanelUpgrades
  },
  {
    path: '/new-construction-electrical',
    name: 'NewConstructionElectrical',
    component: NewConstructionElectrical
  },
  {
    path: '/electrical-repairs',
    name: 'ElectricalRepairs',
    component: ElectricalRepairs
  },
  {
    path: '/outdoor-lighting',
    name: 'OutdoorLighting',
    component: OutdoorLighting
  },
  {
    path: '/testimonials',
    name: 'Testimonials',
    component: Testimonials
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  // hack to allow for forward slashes in path ids
  if (to.fullPath.includes('%2F')) {
    next(to.fullPath.replace('%2F', '/'));
  }
  next();
});

export default router
