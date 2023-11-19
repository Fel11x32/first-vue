import Main from '@/pages/Main'
import PostsPage from '@/pages/PostsPage'
import AboutPage from '@/pages/AboutPage'
import PostIdPage from '@/pages/PostIdPage'
import PostsPageWithStores from '@/pages/PostsPageWithStores'

import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
	{
		path: '/',
		component: Main,
	},
	{
		path: '/posts',
		component: PostsPage,
	},
	{
		path: '/about',
		component: AboutPage,
	},
	{
		path: '/posts/:id',
		component: PostIdPage,
	},
	{
		path: '/stores',
		component: PostsPageWithStores,
	},
]

const router = createRouter({
	routes,
	history: createWebHashHistory(),
})

export default router
