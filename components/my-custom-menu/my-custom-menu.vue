<template>
	<view class="custom-btn-container">
		<view class="custom-btn">
			<view class="custom-menu" @click="toCustomMenuPage">
				<text>去自定义菜单</text>
				<uni-icons class="icon" type="forward" size="25"></uni-icons>
			</view>
			<view class="custom-restaurant" @click="toGetLocation">
				<text>去获取附近餐厅</text>
				<uni-icons class="icon" type="location" size="25"></uni-icons>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"my-custom-menu",
		data() {
			return {
				
			};
		},
		methods: {
			toCustomMenuPage() {
				uni.navigateTo({
					url: '../../subpkg/custom-menu/custom-menu',
				})
			}
		}
	}
</script>

<style lang="scss">
	.custom-btn-container {
		width: 100%;
		.custom-btn {
			display: flex;
			flex-direction: column;
			height: 180rpx;
			margin: 30rpx;
			font-size: 30rpx;
			background-color: antiquewhite;
			box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.3);
			border-radius: 30rpx;
			border: 10rpx solid #fff;
			.custom-menu, 
			.custom-restaurant {
				flex: 1;
				display: flex;
				justify-content: space-between;
				align-items: center;
				border-bottom: 2px solid #fff;
				background-color: #F4FCD9;
				border-top-left-radius: 20rpx;
				border-top-right-radius: 20rpx;
				text {
					padding-left: 20rpx;
				}
				.icon {
					padding-right: 20rpx;
				}
			}
			.custom-restaurant {
				background-color: #C5D8A4;
				// background-color: rgba(197, 216, 164, 0.7);
				border-bottom-left-radius: 20rpx;
				border-bottom-right-radius: 20rpx;
				border-top-left-radius: 0;
				border-top-right-radius: 0;
			}
		}
	}
	
</style>