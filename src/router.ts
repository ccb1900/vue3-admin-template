import { createRouter, createWebHistory, createWebHashHistory, RouterView } from 'vue-router';
import BasicLayout from './layouts/BasicLayout.vue';

// only githubpages preview site used, if use template please remove this check
// and use `createWebHistory` is recommend
const hasGithubPages = import.meta.env.VITE_GHPAGES;

export default createRouter({
  history: hasGithubPages ? createWebHashHistory() : createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'index',
      meta: { title: 'Home' },
      component: BasicLayout,
      redirect: '/welcome',
      children: [
        {
          path: '/user',
          name: 'user-index',
          meta: { title: '用户', icon: 'icon-icon-test' },
          component: RouterView,
          redirect: '/user/welcome',
          children: [
            {
              path: 'welcome',
              name: 'user-welcome',
              meta: { title: '用户欢迎', icon: 'icon-icon-test' },
              component: () => import('./views/page1.vue'),
            },
            {
              path: 'version',
              name: 'user-version',
              meta: { title: '用户版本', icon: 'icon-antdesign' },
              component: () => import('./views/detail.vue'),
            },
          ],
        },
        {
          path: '/welcome',
          name: 'welcome',
          meta: { title: 'Welcome', icon: 'icon-icon-test' },
          component: () => import('./views/page1.vue'),
        },
        {
          path: '/version',
          name: 'version',
          meta: { title: 'Version', icon: 'icon-antdesign' },
          component: () => import('./views/detail.vue'),
        }
      ],
    },
    
  ],
});
