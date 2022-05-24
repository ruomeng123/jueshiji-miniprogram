<template>
	<view class="blackboard-container">
		<view class="blackboard">
			<!-- 黑板头部部分 -->
			<view class="blackboard-header" @click="switchModeBtn">
				<!-- 当前模式标题 -->
				<view class="header-title">
					<!-- <text>出门吃</text> -->
					<text>{{atHome ? '在家吃' : '出门吃'}}</text>
				</view>
				<!-- 切换按钮 -->
				<view class="header-toggle-button">
					点击切换
				</view>
			</view>
			<!-- 黑板主体部分 -->
			<view class="blackboard-body">
				<!-- 左侧人物部分 -->
				<view class="body-left-person">
					<!-- <image src="https://daxi-image-1311562881.cos.ap-nanjing.myqcloud.com/jueshiji/jueshiji-zz%20%284%29.png" mode="widthFix"></image> -->
					<image :src="atHome ? 'https://daxi-image-1311562881.cos.ap-nanjing.myqcloud.com/jueshiji%2Fjueshiji-zz%20(3).png' : 'https://daxi-image-1311562881.cos.ap-nanjing.myqcloud.com/jueshiji/jueshiji-zz%2815%29.png'" mode="widthFix"></image>
				</view>
				<!-- 右侧抽取菜单部分 -->
				<view class="body-right-search-menu">
					<!-- 随机菜单内容 -->
					<view class="top-text">
						等会{{atHome ? '吃' : '去'}}<text>{{atHome ? checkedFood : checkedRestaurant}}</text>?
					</view>
					<!-- 抽取按钮 -->
					<view class="btn" :style="{backgroundColor: isStart ? '#83BD75' : '#F3C892', boxShadow: isStart ? '4px 4px 8px rgba(243, 200, 146, 0.6)' : '4px 4px 8px rgba(131, 189, 118, 0.5)'}" @click="actionBtn">
						{{isStart ? '开始' : '停!'}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "my-blackboard",
		data() {
			return {
				checkingList: [], // 当前抽取的列表
				foodList: ['番茄炒蛋', '辣椒炒肉', '猪肉炖粉条', '酸辣土豆丝', '地锅鸡', '大盘鸡', '红烧带鱼', '泡面'], // 抽取的食物列表
				checkedFood: '什么', // 抽取食物结果内容展示
				isStart: true, // 切换开始/停止状态
				timer: null, // 定时器ID
				atHome: true, // 切换"在哪吃"模式
				checkedRestaurant: '哪吃', // 抽取餐厅结果内容展示
				restaurantList: ['老乡鸡', '青禾日料', '喜姐炸串', '卤人甲卤炸鸡爪', '鸡鸣汤包', '正新鸡排', '杨国福麻辣烫', '沙县小吃'], // 抽取的餐厅列表
			}
		},
		methods: {
			// 随机抽取开始按钮
			actionBtn() {
				// this.isStart = false
				if(this.isStart) {
					// 注意!!需要先给"当前抽取的列表"一个默认
					this.checkingList = this.foodList
					// 开始抽取
					this.timer = setInterval(() => {
						if(this.atHome) {
							this.selectedFood(this.foodList)
						} else {
							this.selectedFood(this.restaurantList)
						}
						// this.selectedFood(this.checkingList)
					}, 100)
					// 切换按钮状态
					this.isStart = false
					
				} else {
					// 停止抽取
					// 清除定时器
					clearInterval(this.timer)
					// 切换按钮状态
					this.isStart = true
				}
				
			},
			// 封装随机抽取食物方法
			selectedFood(arr) {
				const index = Math.floor(Math.random() * arr.length)
				if(this.atHome) {
					// 在家吃的抽取结果
					this.checkedFood = arr[index]
				} else {
					// 出门吃的抽取结果
					this.checkedRestaurant = arr[index]
				}
			},
			// "在哪吃"模式切换按钮
			switchModeBtn() {
				if(!this.atHome) {
					// 在家吃
					this.checkingList = this.foodList
					this.checkedFood = '什么'
					this.atHome = true
				} else {
					// 出门吃
					this.checkingList = this.restaurantList
					this.checkedRestaurant = '哪吃'
					this.atHome = false
				}
			}
		}
	}
</script>

<style lang="scss">
	.blackboard-container {
		width: 100%;
		box-sizing: border-box;
	}
	.blackboard {
		display: flex;
		flex-direction: column;
		margin: 30rpx;
		// padding: 5px;
		height: 500rpx;
		background-color: rgba(197, 216, 164, 0.7);
		// background: repeating-linear-gradient(90deg, #fff 0%, #c5d8a4 100%);
		box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.3);
		border-radius: 30rpx;
		border: 10rpx solid #fff;
		.blackboard-header {
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 15%;
			font-size: 32rpx;
			background-color: rgba(187, 153, 129, 0.7);
			padding: 10rpx;
			// border-bottom: 1px solid #fff;
			border-top-left-radius: 20rpx;
			border-top-right-radius: 20rpx;
			box-shadow: 0 6rpx 10rpx rgba(187, 153, 129, 0.5);
			.header-title {
				padding-left: 20rpx;
				color: #fff;
			}
			.header-toggle-button {
				padding: 10rpx;
				color: #efefef;
				font-size: 24rpx;
			}
		}
		.blackboard-body {
			flex: 1;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.body-left-person {
				height: 100%;
				width: 45%;
				position: relative;
				image {
					position: absolute;
					bottom: 0;
					left: 0;
					width: 100%;
				}
			}
			.body-right-search-menu {
				display: flex;
				flex: 1;
				height: 100%;
				flex-direction: column;
				justify-content: space-evenly;
				align-items: center;
				.top-text {
					font-size: 32rpx;
					text {
						font-size: 36rpx;
						line-height: 60rpx;
						margin: 0 10rpx;
						padding: 6rpx 0;
						border-bottom: 2px solid #fff;
					}
				}
				.btn {
					width: 120rpx;
					height: 120rpx;
					font-size: 32rpx;
					line-height: 120rpx;
					text-align: center;
					border-radius: 50%;
					// background-color: #F3C892;
					// background-color: #83BD75;
					// box-shadow: 4px 4px 8px rgba(243, 200, 146, 0.6);
					// box-shadow: 4px 4px 8px rgba(131, 189, 118, 0.5);
					z-index: 999;
					
				}
			}
		}
	}
</style>
