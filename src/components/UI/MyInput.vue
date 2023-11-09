<template>
	<input
		:value="modelValue"
		@input="updateInput"
		class="input"
		:type="type"
		:placeholder="placeholder"
	/>
</template>

<script>
export default {
	name: 'my-input',
	props: {
		modelValue: {
			modelValue: [String, Number],
		},
		type: {
			type: String,
			required: true,
		},
		placeholder: {
			type: String,
			required: false,
		},
	},
	methods: {
		updateInput(event) {
			this.$emit('update:modelValue', event.target.value)
		},
	},
}
</script>

<style scoped>
.input {
	width: 100%;
	padding: 10px 15px;
	border: 1px solid black;
}
</style>
