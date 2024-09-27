import type { RouteRecordRaw } from 'vue-router';

import { BasicLayout } from '#/layouts';

const routes: RouteRecordRaw[] = [
  {
    component: BasicLayout,
    meta: {
      icon: 'emojione-monotone:school-backpack',
      order: -5,
      title: '学习',
    },
    name: 'Study',
    path: '/study',
    children: [
      {
        name: 'Chinese',
        path: '/study/ch',
        meta: {
          icon: 'mdi:ideogram-chinese-japanese-korean',
          title: '语文',
        },
        children: [
          {
            name: 'Poetry',
            path: '/study/ch/poetry',
            component: BasicLayout,
            meta: {
              link: 'https://www.gushicimingju.com/gushi/xiaoxuegushi/#:~:text=%E5%B0%8F%E5%AD%A6%E7%94%9F%E5%BF%85%E8%83%8C%E5%8F%A4%E8%AF%9770%E9%A6%96',
              title: '古诗',
            },
          },
          {
            name: 'Word',
            path: '/study/ch/word',
            component: () => import('#/views/study/ch/word/index.vue'),
            meta: {
              title: '字宝宝',
            },
          },
        ],
      },
      {
        name: 'Math',
        path: '/study/math',
        component: () => import('#/views/study/math/index.vue'),
        meta: {
          icon: 'fluent:math-symbols-16-regular',
          title: '数学',
        },
      },
      {
        name: 'English',
        path: '/study/en',
        component: () => import('#/views/study/en/index.vue'),
        meta: {
          icon: 'icon-park-outline:english',
          title: '英语',
        },
      },
    ],
  },
];

export default routes;
