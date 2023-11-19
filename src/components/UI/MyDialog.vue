<template>
	<div class="dialog-menu" v-if="show" @click="hideDialog">
		<div @click.stop class="dialog-menu__content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
import toggleMixin from '@/mixins/toggleMixin';

export default {
	name: 'my-dialog',
	mixins: [toggleMixin]
}
</script>

<style scoped>
.dialog-menu {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.5);
	display: flex;
}
.dialog-menu__content {
	margin: auto;
	background: #fff;
	border-radius: 1rem;
	padding: 1rem 2rem;
}
</style>
