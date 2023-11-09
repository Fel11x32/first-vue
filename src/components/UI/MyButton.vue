<template>
	<button>
		<slot></slot>
	</button>
</template>
<script>
export default {
	// Название UI компонента
	name: 'my-button'
}
</script>
<style scoped>
button {
	cursor: pointer;
	padding: 10px 15px;
	background: none;
	color: black;
	border: 1px solid black;
}
</style>
