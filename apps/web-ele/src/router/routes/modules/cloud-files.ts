import type { RouteRecordRaw } from 'vue-router';

import { BasicLayout } from '#/layouts';

const routes: RouteRecordRaw[] = [
  {
    component: BasicLayout,
    meta: {
      icon: 'material-symbols:cloud-outline',
      iframeSrc: 'http://d8.tpddns.cn:5244/',
      order: -3,
      title: '云文件',
    },
    name: 'Cloud Files',
    path: '/Cloud-Files',
  },
];

export default routes;
