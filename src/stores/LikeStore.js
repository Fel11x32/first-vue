import { defineStore } from 'pinia'

export const useLikeStore = defineStore('like', {
	state: () => ({
		likes: 4,
	}),
	getters: {
		doubleLikes(state) {
			return state.likes * 2
		}
	},
	actions: {
		increment() {
			this.likes += 1
		},
		decrement() {
			this.likes -= 1
		}
	}
})
