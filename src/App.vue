<template>
	<div class="app">
		<post-form @create="createPost"/>
		<post-list :posts="posts"/>
	</div>
</template>

<script>
// Импортируем компоненты
import PostForm from "@/components/PostForm"
import PostList from "@/components/PostList"

export default {
	// Регистрируем компоненты
	components: {
		PostList, PostForm,
	},
	data() {
		return {
			posts: [
				{ id: 1, title: 'JavaScript', body: 'Post description 1' },
				{ id: 2, title: 'Python', body: 'Post description 2' },
				{ id: 3, title: 'Java', body: 'Post description 3' },
			],
		}
	},
	methods: {
		createPost(post) {
			this.posts.push(post)
		},
	},
}
</script>

<style>
* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}
.app {
	padding: 15px;
}
</style>
