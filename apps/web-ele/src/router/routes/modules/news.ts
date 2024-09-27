import type { RouteRecordRaw } from 'vue-router';

import { BasicLayout } from '#/layouts';

const routes: RouteRecordRaw[] = [
  {
    component: BasicLayout,
    meta: {
      icon: 'fluent-mdl2:news-search',
      link: 'https://tophub.today/c/news',
      order: -2,
      title: '新闻',
      // 一般网站设置了X-frame-Options，不能iframe嵌套
      // iframeSrc: 'https://tophub.today/c/news',
    },
    name: 'News',
    path: '/news',
  },
];

export default routes;
