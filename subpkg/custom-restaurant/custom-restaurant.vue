<template>
	<view>
		<!-- 标题区域 -->
		<view class="title">
			<text>喜欢的餐厅列表</text>
		</view>
		<!-- 展示区域 -->
		<view class="my-menu-container">
			<!-- 菜单列表区域 -->
			<scroll-view scroll-y="true" enhanced :show-scrollbar="false" class="scroll-view">
				<!-- 菜单标签区域 -->
				<view class="tag-view">
					<uni-tag :text="food" :class="isEdit ? 'my-tag del' : 'my-tag'" v-for="(food, index) in foodList" :key="index"
						custom-style="font-size: 26rpx; background-color: #C5D8A4; border-color: #C5D8A4; color: #333" @click="delFood(index)"></uni-tag>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
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
	.my-menu-container {
		.scroll-view {
			display: flex;
			position: absolute;
			bottom: 0;
			left: 5%;
			height: 75%;
			width: 90%;
			padding-bottom: 50rpx;
			overflow: hidden;
		
			.tag-view {
				display: flex;
				flex-wrap: wrap;
		
				.my-tag {
					margin: 15rpx;
					margin-top: 16rpx;
					position: relative;
					// .del类名用于动态控制伪元素的显示与隐藏
					&.del::before {
						position: absolute;
						right: -12rpx;
						top: -14rpx;
						content: '\e697';
						font-size: 24rpx;
						color: gray;
						font-family:"iconfont" !important;
						-webkit-font-smoothing: antialiased;
						-moz-osx-font-smoothing: grayscale;
					}
				}
			}
		}
	}
</style>
