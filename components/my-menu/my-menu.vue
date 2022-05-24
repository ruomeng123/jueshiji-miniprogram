<template>
	<view class="my-menu-container">
		<!-- 我的菜单 -->
		<view class="my-menu">
			<!-- 编辑按钮 -->
			<view class="edit-btn" @click="editBtn">{{isEdit ? '保存' : '编辑'}}</view>
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
		name: "my-menu",
		data() {
			return {
				foodList: ['番茄炒蛋', '辣椒炒肉', '猪肉炖粉条', '酸辣土豆丝', '地锅鸡', '大盘鸡', '红烧带鱼', '泡面', '番茄炒蛋', '辣椒炒肉', '猪肉炖粉条', '酸辣土豆丝',
					'地锅鸡', '大盘鸡', '红烧带鱼', '泡面', '番茄炒蛋', '辣椒炒肉', '猪肉炖粉条', '酸辣土豆丝', '地锅鸡', '大盘鸡', '红烧带鱼', '泡面', '番茄炒蛋',
					'辣椒炒肉', '猪肉炖粉条', '酸辣土豆丝', '地锅鸡', '大盘鸡', '红烧带鱼', '泡面'
				], // 抽取的食物列表
				isEdit: false, // 控制编辑状态的切换
			};
		},
		methods: {
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
					this.foodList.splice(index, 1)
				}
				
			}
			
		}
	}
</script>

<style lang="scss">
	.my-menu-container {
		width: 100%;

		.my-menu {
			position: relative;
			height: 500rpx;
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

			.edit-btn {
				position: absolute;
				right: 40rpx;
				top: -15rpx;
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
	}
</style>
