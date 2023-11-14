<template>
	<!--Директива v-if полностью удаляет объект из DOM дерева, если же нам этого не нужно есть v-show-->
	<div v-if="posts.length > 0">
		<h3>List of posts</h3>

		<!--Добавление анимации для списков-->
		<transition-group name="post-list">
			<!--Перебираем массив-->
			<post-item
				v-for="post in posts"
				:post="post"
				:key="post.id"
				@remove="$emit('remove', post)"
			/>
		</transition-group>
	</div>

	<h2 v-else style="color: red">There are no posts</h2>
</template>

<script>
import PostItem from '@/components/PostItem.vue'

export default {
	components: { PostItem },

	props: {
		posts: {
			type: Array,
			required: true,
		},
	},
}
</script>

<style scoped>
.post {
	padding: 15px;
	margin-top: 15px;
	border: 2px solid black;
}
.post-list-item {
  display: inline-block;
  margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active {
  transition: all .5s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(150px);
}
.post-list-move {
  transition: transform 0.7s ease;
}
</style>
