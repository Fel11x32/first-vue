<template>
	<div class="app">
		<h1>Posts page</h1>
		<my-button class="button-modal" @click="showDialog">Create Post</my-button>

		<my-dialog v-model:show="dialogVisible">
			<post-form @create="createPost" />
		</my-dialog>

		<post-list class="post-list-second" :posts="posts" @remove="removePost" />
	</div>
</template>

<script>
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
			posts: [
				{ id: 1, title: 'JavaScript', body: 'Post description 1' },
				{ id: 2, title: 'Python', body: 'Post description 2' },
				{ id: 3, title: 'Java', body: 'Post description 3' },
			],
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
.button-modal {
	margin-top: 1rem;
}
.post-list-second {
	margin-top: 2rem;
}
</style>
