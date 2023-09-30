import { createRouter, createWebHistory } from 'vue-router';
import MainRoutes from './MainRoutes';
export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/:pathMatch(.*)*',
            component: () => import('@/views/pages/Error.vue')
        },
        MainRoutes
    ]
});
