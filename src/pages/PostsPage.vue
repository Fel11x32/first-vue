<template>
	<div>
		<h1>Posts page</h1>
		<my-input v-focus v-model="searchQuery" placeholder="Search..."></my-input>

		<div class="app-buttons">
			<my-button @click="showDialog">Create Post</my-button>
			<my-select v-model="selectedSort" :options="sortOptions"></my-select>
		</div>

		<my-dialog v-model:show="dialogVisible">
			<post-form @create="createPost" />
		</my-dialog>

		<post-list
			:posts="sortedAndSearchedPosts"
			@remove="removePost"
			v-if="!isPostLoading"
		/>
		<my-donut v-else></my-donut>
		<div v-intersection="loadMorePosts"></div>
		<!-- <my-pagination
			:page="page"
			:total="totalPages"
			@swap="changePage"
		></my-pagination> -->
	</div>
</template>

<script>
// Импортируем компоненты
import PostForm from '@/components/PostForm'
import PostList from '@/components/PostList'

// Подключение библиотек
import axios from 'axios'

export default {
	// Регистрируем компоненты
	components: {
		PostList,
		PostForm,
	},

	data() {
		return {
			posts: [],
			dialogVisible: false,
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
		}
	},

	methods: {
		createPost(post) {
			if (post.title === '' || post.body === '') return
			this.posts.push(post)
			this.dialogVisible = false
		},
		removePost(post) {
			this.posts = this.posts.filter(p => p.id !== post.id)
		},

		showDialog() {
			this.dialogVisible = true
		},

		// changePage(pageNumber) {
		// 	this.page = pageNumber
		// },

		// Создание запроса на сервер
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
				alert('error')
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
				alert('error')
			}
		},
	},
	mounted() {
		this.fetchPosts()
	},
	computed: {
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
	watch: {
		// page() {
		// 	this.fetchPosts()
		// },
	},
}
</script>

<style>
.app-buttons {
	margin: 1.5rem 0;
	display: flex;
	justify-content: space-between;
}
</style>
