import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import bugdays from "../components/bugdays.vue";
import contact from "../components/contact.vue";
import proj from "../components/proj.vue";
import proj_etu from "../components/proj_etu.vue";
import proj_perso from "../components/proj_perso.vue";
import site_memo from "../components/site_memo.vue";
import trial from "../components/trial.vue";


Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Index', component: Index },
    { path: '/bugdays', name: 'bugdays', component: bugdays },
    { path: '/contact', name: 'contact', component: contact },
    { path: '/proj', name: 'proj', component: proj },
    { path: '/proj_etu', name: 'proj_etu', component: proj_etu },
    { path: '/proj_perso', name: 'proj_perso', component: proj_perso },
    { path: '/site_memo', name: 'site_memo', component: site_memo },
    { path: '/trial', name: 'trial', component: trial },
  ]
})
