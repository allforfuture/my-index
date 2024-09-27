import type { RouteRecordRaw } from 'vue-router';

import { BasicLayout } from '#/layouts';

const routes: RouteRecordRaw[] = [
  {
    component: BasicLayout,
    meta: {
      hideChildrenInMenu: true,
      icon: 'emojione-monotone:hotel',
      order: -4,
      title: '酒店数据库',
    },
    name: 'Hotel-Database',
    path: '/hotel-database',
    children: [
      {
        name: 'Hotel-Search',
        path: '/hotel-database/index',
        component: () => import('#/views/hotel-database/index.vue'),
        meta: {
          icon: 'emojione-monotone:hotel',
          title: '酒店数据库',
        },
      },
    ],
  },
];

export default routes;
