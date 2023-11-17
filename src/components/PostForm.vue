<template>
	<form @submit.prevent>
		<h2>Create Post</h2>
		<!--Реализовываем двухстороннее связывание при помощи v-model (v-bind и $event.target.value)-->
		<my-input v-focus class="input" v-model="post.title" type="text" placeholder="Title"/>
		<!--Реализовываем двухстороннее связывание при помощи v-model (v-bind и $event.target.value)-->
		<my-input class="input" v-model="post.body" type="text" placeholder="Body"/>
		<my-button class="btn" @click="createPost">Create</my-button>
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
	margin-top: 15px;
}
.btn {
	align-self: end;
	margin-top: 15px;
}
</style>
