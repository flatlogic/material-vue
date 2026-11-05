import { createRouter, createWebHashHistory } from 'vue-router';

import Layout from '@/components/Layout/Layout.vue';

// Pages
import Dashboard from '@/pages/Dashboard/Dashboard.vue';
import Typography from '@/pages/Typography/Typography.vue'
import Tables from '@/pages/Tables/Basic.vue'
import Notifications from '@/pages/Notifications/Notifications.vue'
import Icons from '@/pages/Icons/Icons.vue'
import Charts from '@/pages/Charts/Charts.vue'
import Maps from '@/pages/Maps/Google.vue'
import Error from "@/pages/Error/Error.vue";
import Login from "@/pages/Login/Login.vue";


export default createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
    path: '/',
    redirect: 'login',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard,
      },
      {
        path: 'typography',
        name: 'Typography',
        component: Typography,
      },
      {
        path: 'tables',
        name: 'Tables',
        component: Tables
      },
      {
        path: 'notifications',
        name: 'Notifications',
        component: Notifications
      },
      {
        path: 'icons',
        name: 'Icons',
        component: Icons
      },
      {
        path: 'charts',
        name: 'Charts',
        component: Charts
      },
      {
        path: 'maps',
        name: 'Maps',
        component: Maps
      },
    ],
  },
    {
      path: '/:pathMatch(.*)*',
      name: 'Error',
      component: Error
    }
  ],
});
