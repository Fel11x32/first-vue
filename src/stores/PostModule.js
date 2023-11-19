import { defineStore } from 'pinia'
// Подключение библиотек
import axios from 'axios'

export const usePostStore = defineStore('post', {
	state: () => ({
		posts: [],
		isPostLoading: false,

		selectedSort: '',
		searchQuery: '',

		page: 1,
		limit: 10,
		totalPages: 0,

		sortOptions: [
			{ value: 'title', name: 'by title' },
			{ value: 'body', name: 'by body' },
			{ value: 'id', name: 'by id' },
		],
	}),
	getters: {
		sortedPost() {
			return [...this.posts].sort((post1, post2) => {
				if (this.selectedSort === 'id') {
					return post1.id - post2.id
				} else {
					return (post1[this.selectedSort] ?? '').localeCompare(
						post2[this.selectedSort] ?? ''
					)
				}
			})
		},
		sortedAndSearchedPosts() {
			return this.sortedPost.filter(post => {
				return post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
			})
		},
	},
	actions: {
		async fetchPosts() {
			try {
				this.isPostLoading = true

				const response = await axios.get(
					'https://jsonplaceholder.typicode.com/posts',
					{
						params: {
							_page: this.page,
							_limit: this.limit,
						},
					}
				)
				this.totalPages = Math.ceil(
					response.headers['x-total-count'] / this.limit
				)
				this.posts = response.data
			} catch (e) {
				console.log(e)
			} finally {
				this.isPostLoading = false
			}
		},
		async loadMorePosts() {
			try {
				this.page += 1

				const response = await axios.get(
					'https://jsonplaceholder.typicode.com/posts',
					{
						params: {
							_page: this.page,
							_limit: this.limit,
						},
					}
				)
				this.totalPages = Math.ceil(
					response.headers['x-total-count'] / this.limit
				)
				this.posts = [...this.posts, ...response.data]
			} catch (e) {
				console.log(e)
			}
		},
	},
})
