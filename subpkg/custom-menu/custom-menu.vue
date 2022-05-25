<template>
	<view>
		<!-- 标题区域 -->
		<view class="title">
			<text>我的菜单</text>
		</view>
		<!-- 菜单区域 -->
		<view class="my-menu-container">
			<my-menu></my-menu>
		</view>
		<!-- 添加菜单区域 -->
		<view class="add-food">
			<my-add-food></my-add-food>
		</view>
		<!-- 背景图区域 -->
		<view class="bgc-zz">
			<!-- <image src="https://daxi-image-1311562881.cos.ap-nanjing.myqcloud.com/jueshiji%2Fjueshiji-zz(16).png" mode="aspectFit"></image> -->
			<!-- <image src="https://daxi-image-1311562881.cos.ap-nanjing.myqcloud.com/jueshiji%2Fjueshiji-zz%20(11).png" mode="aspectFit"></image> -->
			<image src="https://daxi-image-1311562881.cos.ap-nanjing.myqcloud.com/jueshiji%2Fjueshiji-zz(17).png" mode="aspectFit"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	page {
		margin: 0;
		padding: 0;
	}
	.title {
		width: 100%;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		font-size: 34rpx;
		color: #333;
		font-weight: 600;
		text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.7);
		// background-color: antiquewhite;
	}
	.bgc-zz {
		image {
			width: 100%;
			height: 40%;
			position: fixed;
			bottom: 0rpx;
			left: 0;
		}
	}
</style>
