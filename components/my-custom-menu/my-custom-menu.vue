<template>
	<view class="custom-btn-container">
		<view class="custom-btn">
			<view class="custom-menu" @click="toCustomMenuPage">
				<text>去自定义菜单</text>
				<uni-icons class="icon" type="forward" size="25"></uni-icons>
			</view>
			<view class="custom-restaurant" @click="getCurrentLocation">
				<text>去获取附近餐厅</text>
				<uni-icons class="icon" type="location" size="25"></uni-icons>
			</view>
			<view class="custom-restaurant-list" @click="getCurrentRestaurant">
				<text>查看已添加的餐厅</text>
				<uni-icons class="icon" type="forward" size="25"></uni-icons>
			</view>
		</view>
	</view>
</template>

<script>
	// 引入SDK核心类
	import QQMapWX from '../../libs/qqmap-wx-jssdk.js'
	export default {
		name: "my-custom-menu",
		data() {
			return {
				
			};
		},
		methods: {
			// 跳转到自定义菜单页面
			toCustomMenuPage() {
				uni.navigateTo({
					url: '../../subpkg/custom-menu/custom-menu',
				})
			},
			// 跳转到showMap页面
			getCurrentLocation() {
				uni.navigateTo({
					url: '/subpkg/show-map/show-map'
				})
			},
			// 跳转到已添加餐厅列表页面
			getCurrentRestaurant() {
				uni.navigateTo({
					url: '../../subpkg/custom-restaurant/custom-restaurant'
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
			height: 270rpx;
			margin: 30rpx;
			font-size: 30rpx;
			background-color: antiquewhite;
			box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.3);
			border-radius: 30rpx;
			border: 10rpx solid #fff;

			.custom-menu,
			.custom-restaurant,
			.custom-restaurant-list {
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
				// border-bottom-left-radius: 20rpx;
				// border-bottom-right-radius: 20rpx;
				// border-top-left-radius: 0;
				border-radius: 0;
			}
			.custom-restaurant-list {
				border-bottom-left-radius: 20rpx;
				border-bottom-right-radius: 20rpx;
				border-top-left-radius: 0;
				border-top-right-radius: 0;
			}
		}
	}
</style>
