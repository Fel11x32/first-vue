<template>
	<form @submit.prevent>
		<h2>Create Post</h2>
		<!--Реализовываем двухстороннее связывание при помощи v-model (v-bind и $event.target.value)-->
		<input v-model="post.title" class="input" type="text" placeholder="Name" />
		<!--Реализовываем двухстороннее связывание при помощи v-model (v-bind и $event.target.value)-->
		<input v-model="post.body" class="input" type="text" placeholder="Body" />
		<button class="btn" @click="createPost">Create</button>
	</form>
</template>

<script>
export default {
	data() {
		return {
			post: {
				title: '',
				body: '',
			},
		}
	},
	methods: {
		createPost() {
			this.post.id = Date.now()
			
			// Генерируем событие
			this.$emit('create', this.post)

			this.post = {
				title: '',
				body: '',
			}
		},
	},
}
</script>

<style scoped>
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
</style>
