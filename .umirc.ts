import { defineConfig } from 'dumi';

export default defineConfig({
    title: 'interview-learn',
    //   favicon: '',
    //   logo: '',
    outputPath: 'docs-dist',
    mode: 'site',
    links: [{ rel: 'stylesheet', href: '/style.css' }],
    navs: [
        {
            title: '前端基础',
            path: '/base',
        },
        {
            title: '前端框架',
            path: '/framework',
        },
        {
          title: '手写系列',
          path: '/write',
        },
        {
          title: '浏览器',
          path: '/browser',
        },
        {
          title: '前端工程',
          path: '/engineering',
        },
        {
          title: '后端知识',
          path: '/node',
        },
        {
          title: '项目实战',
          path: '/project',
        },
        {
          title: '资源',
          path: '/resource',
        },
    ],
    menus: {
        // 需要自定义侧边菜单的路径，没有配置的路径还是会使用自动生成的配置
        '/Base': [],
        '/Framework': [],
        '/Write': [],
        '/Browser': [],
        '/Engineering': [],
        '/Node': [],
        '/Project': [],
        '/Resource': [],
    },
});
