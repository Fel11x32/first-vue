<template>
	<div class="donut"></div>
</template>

<script>
export default {
	name: 'my-donut'
}
</script>

<style scoped>
.donut {
	border: 4px solid rgba(0, 0, 0, 0.1);
	border-left-color: black;
	border-radius: 50%;
	width: 30px;
	height: 30px;
	animation: donut-spin 1.2s linear infinite;
}

@keyframes donut-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
