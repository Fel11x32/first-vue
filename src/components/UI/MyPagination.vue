<template>
	<div class="page__wrapper">
		<div
			class="page"
			v-for="pageNumber in total"
			:key="pageNumber"
			:class="{
				'current-page': page === pageNumber,
			}"
			@click="swapPage(pageNumber)"
		>
			{{ pageNumber }}
			
		</div>
	</div>
</template>

<script>
export default {
	name: 'my-pagination',
	props: {
		total: {
			type: Number,
			required: true,
		},
		page: {
			type: Number,
			required: true,	
		},
	},
	methods: {
		swapPage(pageNumber) {
			this.$emit('swap', pageNumber)
		}
	}
}
</script>

<style scoped>
.page__wrapper {
	display: flex;
	margin-top: 15px;
}
.page {
	border: 1px solid black;
	padding: 10px;
}
.current-page {
	border: 2px solid rgb(135, 8, 8);
}
</style>
