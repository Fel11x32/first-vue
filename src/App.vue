<template>
	<div class="app">
		<form @submit.prevent>
			<h2>Create Post</h2>
			<!--Реализовываем двухстороннее связывание при помощи v-bind и $event.target.value-->
			<input
				v-bind:value="title"
				@input="title = $event.target.value"
				class="input"
				type="text"
				placeholder="Name"
			/>
			<!--Реализовываем двухстороннее связывание при помощи v-bind и $event.target.value-->
			<input
				v-bind:value="body"
				@input="body = $event.target.value"
				class="input"
				type="text"
				placeholder="Body"
			/>
			<button class="btn" @click="createPost">Create</button>
		</form>
		<div class="post" v-for="post in posts">
			<!--Перебираем массив-->
			<div><strong>Name:</strong>{{ post.title }}</div>
			<div><strong>Body:</strong>{{ post.body }}</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			posts: [
				{ id: 1, title: 'JavaScript', body: 'Post description 1' },
				{ id: 2, title: 'Python', body: 'Post description 2' },
				{ id: 3, title: 'Java', body: 'Post description 3' },
			],

			title: '',
			body: '',
		}
	},
	methods: {
		createPost() {
			if (this.body === '' || this.title === '') return

			const newPost = {
				id: Date.now(),
				title: this.title,
				body: this.body,
			}
			this.posts.push(newPost)

			this.title = ''
			this.body = ''
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
form {
	display: flex;
	flex-direction: column;
}
.input {
	width: 100%;
	padding: 10px 15px;
	margin-top: 15px;
	border: 1px solid black;
}
.btn {
	cursor: pointer;
	display: flex;
	align-self: flex-end;
	margin-top: 15px;
	padding: 10px 15px;
	background: none;
	color: black;
	border: 1px solid black;
}
.post {
	padding: 15px;
	margin-top: 15px;
	border: 2px solid black;
}
</style>
