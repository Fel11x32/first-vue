<template>
	<div>
		<h1>Posts page with stores</h1>
		<h2>{{ likeStore.doubleLikes }}</h2>
		<div>
			<my-button @click="likeStore.increment">Like</my-button>
			<my-button @click="likeStore.decrement">Dislike</my-button>
		</div>
		<my-input v-focus type="text" v-model="postStore.searchQuery" placeholder="Search..."></my-input>

		<div class="app-buttons">
			<my-button @click="showDialog">Create Post</my-button>
			<my-select v-model="postStore.selectedSort" :options="postStore.sortOptions"></my-select>
		</div>

		<my-dialog v-model:show="dialogVisible">
			<post-form @create="createPost" />
		</my-dialog>

		<post-list
			:posts="postStore.sortedAndSearchedPosts"
			@remove="removePost"
			v-if="!postStore.isPostLoading"
		/>
		<my-donut v-else></my-donut>
		<div v-intersection="postStore.loadMorePosts"></div>
		<!-- <my-pagination
			:page="page"
			:total="totalPages"
			@swap="changePage"
		></my-pagination> -->
	</div>
</template>

<script>
import { useLikeStore } from '@/stores/LikeStore.js'
import { usePostStore } from '@/stores/PostModule'
import { mapStores } from 'pinia'

// Импортируем компоненты
import PostForm from '@/components/PostForm'
import PostList from '@/components/PostList'

export default {
	// Регистрируем компоненты
	components: {
		PostList,
		PostForm,
	},

	data() {
		return {
			dialogVisible: false,
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
	},
	mounted() {
		// this.fetchPosts()
	},
	computed: {
		//! Отображаем хранилище в виде вычисляемого свойства
		...mapStores(useLikeStore, usePostStore),
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
