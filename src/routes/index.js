import { NoSidebarLayout } from '@/layouts';
import { Home, About, PageNotFound } from '@/pages';
import Projects from '@/pages/Projects/Projects';

const publicRoutes = [
    { path: '/', component: Home, layout: NoSidebarLayout },
    { path: '/about', component: About, layout: NoSidebarLayout, title: 'About' },
    { path: '/projects', component: Projects, title: 'Projects' },
    { path: '/*', component: PageNotFound, layout: null },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
