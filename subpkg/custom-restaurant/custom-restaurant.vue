<template>
	<view>
		<!-- 标题区域 -->
		<view class="title">
			<text>喜欢的餐厅列表</text>
		</view>
		<!-- 展示区域 -->
		<view class="my-menu-container" v-if="restaurantInfo.length !== 0">
			<!-- 菜单列表区域 -->
			<scroll-view scroll-y="true" enhanced :show-scrollbar="false" class="scroll-view">
				<!-- 菜单标签区域 -->
				<view class="tag-view">
					<uni-tag :text="item" :class="isEdit ? 'my-tag del' : 'my-tag'" v-for="(item, index) in restaurantInfo" :key="index"
						custom-style="font-size: 26rpx; background-color: #C5D8A4; border-color: #C5D8A4; color: #333" @click="delFood(index)"></uni-tag>
				</view>
			</scroll-view>
			<!-- 编辑按钮 -->
			<view class="edit-btn" @click="editBtn">{{isEdit ? '保存' : '编辑'}}</view>
		</view>
		<!-- 没有数据时展示 -->
		<view class="black" v-else>
			<text>您还未添加餐厅哦~</text>
			<image src="https://daxi-image-1311562881.cos.ap-nanjing.myqcloud.com/jueshiji%2Fjueshiji-zz(16).png" mode="aspectFit"></image>
		</view>
	</view>
</template>

<script>
	import { mapState, mapMutations } from 'vuex'
	export default {
		data() {
			return {
				isEdit: false,
			};
		},
		computed: {
			...mapState('m_restaurant', ['restaurantInfo'])
		},
		methods: {
			...mapMutations('m_restaurant', ['updateRestaurantInfo']),
			// 编辑按钮点击事件
			editBtn() {
				if(!this.isEdit) {
					// 在编辑状态
					this.isEdit = true
				} else {
					// 在正常状态
					this.isEdit = false
				}
			},
			// 删除某个菜单项
			delFood(index) {
				if(this.isEdit) {
					// 在编辑状态
					this.restaurantInfo.splice(index, 1)
					this.updateRestaurantInfo(this.restaurantInfo)
				}
				
			}
		}
	}
</script>

<style lang="scss">
	page {
		margin: 0;
		padding: 0;
		width: 100%;
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
		position: relative;
		height: 800rpx;
		margin: 30rpx;
		background-color: #FBFAE1;
		border: 10rpx solid #fff;
		border-radius: 30rpx;
		box-shadow: 2px 2px 10rpx rgba(0, 0, 0, 0.5) inset;
		.scroll-view {
			display: flex;
			position: absolute;
			bottom: 0;
			left: 5%;
			height: 90%;
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
		.edit-btn {
			position: absolute;
			right: 40rpx;
			bottom: -30rpx;
			width: 100rpx;
			height: 60rpx;
			font-size: 26rpx;
			line-height: 60rpx;
			text-align: center;
			background-color: #F3C892;
			border-radius: 10rpx;
			box-shadow: 0 2px 10rpx rgba(243, 200, 146, 0.5);
		}
	}
	.black {
		// width: 100%;
		// height: 100%;
		margin-top: 40%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		image {
			flex: 1;
		}
		text {
			padding: 50rpx;
			font-size: 32rpx;
		}
	}
</style>
