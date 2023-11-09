<template>
	<div class="post">
		<div>
			<div><strong>Name:</strong><span>{{ post.title }}</span></div>
			<div><strong>Body:</strong><span>{{ post.body }}</span></div>
		</div>
		<div class="post__buttons">
			<my-button>Delete</my-button>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		post: {
			type: Object,
			required: true,
		},
	},
}
</script>
<style scoped>
.post {
	border: 2px solid black;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
</style>
