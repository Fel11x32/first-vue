<template>
	<div class="nav-bar">
		<div @click="$router.push('/')" style="cursor: pointer;">Vue 3 Start</div>
		<div class="nav-bar__buttons">
			<my-button @click="$router.push('/posts')">Posts</my-button>
			<my-button @click="$router.push('/about')" style="margin-left: 1rem;">About</my-button>
			<my-button @click="$router.push('/stores')" style="margin-left: 1rem;">Stores</my-button>
		</div>
	</div>
</template>
<script>
export default {
	
}
</script>
<style scoped>
	.nav-bar {
		height: 4rem;
		background-color: rgb(176, 20, 20);
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 1rem;
	}
</style>