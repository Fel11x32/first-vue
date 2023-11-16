import Main from '@/pages/Main'
import PostsPage from '@/pages/PostsPage'
import AboutPage from '@/pages/AboutPage'
import PostIdPage from '@/pages/PostIdPage'

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
]

const router = createRouter({
	routes,
	history: createWebHashHistory(),
})

export default router
