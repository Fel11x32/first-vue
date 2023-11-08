<template>
	<div>
		<div>
			<button @click="addLikes">Like</button>
			<button @click="addDislikes">dislike</button>
		</div>
		<div>Number of likes: {{ likes }}</div>
		<div>Number of dislikes: {{ dislikes }}</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			likes: 0,
			dislikes: 1,
		}
	},
	methods: {
		addLikes() {
			this.likes += 1
		},
		addDislikes() {
			this.dislikes += 1
		}
	},
}
</script>

<style></style>
