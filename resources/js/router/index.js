import { createRouter, createWebHistory } from "vue-router";

import Home from "../components/Home.vue";
import About from "../components/About.vue";    
import Projects from "../components/Projects.vue";
import Contact from "../components/Contact.vue";

const routes = [ 
    {
        path: '/:pathMatch(.*)*',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/projects',
        component: Projects
    },
    {
        path: '/contact',
        component: Contact
    }
];

const router = createRouter({
    history: createWebHistory(),
    linkExactActiveClass: 'active',
    routes, 
});

export default router;
