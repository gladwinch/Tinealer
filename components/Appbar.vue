<template>
	<div class="app-bar bg-red-400 dark:bg-black">
		<div>logo</div>
		<div>
			<button class="btn border border-white capitalize" @click="changeMode">
				Theme {{ btnLabel }}
			</button>
		</div>
	</div>
</template>

<script>
	export default {
		computed: {
			btnLabel() {
				return this.$colorMode.preference === 'light' ? 'dark' : 'light'
			}
		},
		methods: {
			changeMode() {
				this.$colorMode.preference = 
					this.$colorMode.preference === 'light' ? 'dark' : 'light'
			}
		}
	}
</script>

<style scoped>
	.app-bar {
		padding: 1.4rem 1rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		/* position: absolute; */
		top: 0;
		left: 0;
		z-index: 10;
	}
</style>