<template>
	<view class="home-container">
		<!-- 随机菜单选择区域 -->
		<uni-section title="随机选择" type="line">
			<my-blackboard></my-blackboard>
		</uni-section>
		<!-- 自定义菜单区域 -->
		<uni-section title="自定义菜单" type="line">
			<my-custom-menu></my-custom-menu>
		</uni-section>
		
		<!-- 底部信息区 -->
		<view class="my-footer-container">
			<my-footer></my-footer>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		// 下拉刷新
		onPullDownRefresh() {
			
		}
		
	}
</script>

<style lang="scss">
	
</style>
