<template>
	<view class="restaurant-item">
		<!-- 左侧盒子 -->
		<view class="left-box">
			<view class="restaurant-name">{{item.title}}</view>
			<view class="restaurant-info-box">
				<view class="restaurant-tel">电话:<text selectable>{{item.tel || '暂无'}}</text></view>
				<view class="restaurant-distance">距离: {{item._distance}}m</view>
			</view>
			<view class="restaurant-address">地址:<text selectable>{{item.ad_info.province + item.ad_info.district + item.ad_info.city + item.address}}</text></view>
		</view>
		<!-- 右侧盒子 -->
		<view class="right-box">
			<radio :checked="item.type" color="#F3C892" v-if="isRadioShow" @click="radioClick"></radio>
		</view>
	</view>
</template>

<script>
	export default {
		name: "restaurant-item",
		props: {
			isRadioShow: {
				type: Boolean,
				default: true
			},
			item: {
				type: Object,
				default: {}
			}
		},
		data() {
			return {
				
			};
		},
		methods: {
			// 单选框点击事件传值给父组件
			radioClick() {
				this.$emit('radio-click', {
					id: this.item.id,
					state: !this.item.type
				})
				
			},
		}

	}
</script>

<style lang="scss">
	page {
		width: 100%;
	}

	.restaurant-item {
		position: relative;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20rpx 10rpx 20rpx 40rpx;
		margin: 15rpx 30rpx;
		background-color: #fff;
		boxShadow: 1px 4rpx 10rpx rgba(0, 0, 0, 0.3);
		border-left: 10rpx solid #C5D8A4;
		border-bottom: 8rpx solid #C5D8A4;
		border-radius: 15rpx;
		border-top-right-radius: 30rpx;

		.left-box {
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			width: 85%;
			text {
				padding-left: 6rpx;
			}

			.restaurant-name {
				color: #9f816e;
				font-size: 32rpx;
				padding: 10rpx;
			}

			.restaurant-info-box {
				display: flex;
				justify-content: space-between;
				align-items: center;
				font-size: 26rpx;
				padding: 10rpx;

				.restaurant-distance {
					padding-right: 10rpx;
				}

			}

			.restaurant-address {
				font-size: 26rpx;
				padding: 10rpx;
			}
		}

		.right-box {
			padding-left: 10rpx;
		}
	}
</style>
