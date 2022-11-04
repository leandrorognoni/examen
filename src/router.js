import Vue from 'vue'
import VueRouter from 'vue-router'
 
 import FormularioAv from './componentes/FormularioAv.vue'
import Respuestas from './componentes/Respuestas.vue'
 
Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', redirect: '/binding' }, 
         { path: '/formulario-av', component: FormularioAv },
        { path: '/respuestas', component: Respuestas },
    ]
})

