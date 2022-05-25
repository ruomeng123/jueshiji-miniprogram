<template>
	<view class="add-food-container">
		<view class="add-food">
			<view class="add-input">
				<input class="uni-input" @input="input" v-model="inputValue" type="text" focus maxlength="18" placeholder="请输入您最近学会的拿手菜!" />
			</view>
			<view class="add-btn" @click="addFoodBtn">添加</view>
		</view>
	</view>
</template>

<script>
	import { mapState, mapMutations } from 'vuex'
	export default {
		name:"my-add-food",
		data() {
			return {
				inputValue: '', // 输入框输入内容
				timer: null, // 定时器ID
			};
		},
		computed: {
			...mapState('m_menu', ['foodList'])
		},
		methods: {
			...mapMutations('m_menu', ['addFoodToMenu']),
			// 输入框输入事件
			input(e) {
				// 输入框防抖功能
				clearTimeout(this.timer)
				this.timer = setTimeout(() => {
					if(e.target.value.length === 18) {
						return uni.$showMsg('字数太长了哦!')
					}
					// 拿到用户输入的内容
					this.inputValue = e.target.value
				}, 700)
			},
			// 添加按钮点击事件
			addFoodBtn() {
				if(this.foodList.indexOf(this.inputValue) !== -1) {
					// 代表用户输入的食物有重复的
					return uni.$showMsg('食物已存在,勿重复添加!')
				}
				this.addFoodToMenu(this.inputValue)
				uni.$showMsg('添加成功!')
				this.inputValue = ''
			}
		}
	}
</script>

<style lang="scss">
	.add-food-container {
		width: 100%;
		.add-food {
			margin: 30rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			border: 10rpx solid #fff;
			border-radius: 30rpx;
			box-shadow: 2px 2px 10rpx rgba(0, 0, 0, 0.5) inset;
			.add-input {
				width: 80%;
				.uni-input {
					padding-left: 30rpx;
					font-size: 28rpx;
				}
			}
			.add-btn {
				// position: relative;
				// top: -1px;
				width: 100rpx;
				height: 60rpx;
				line-height: 60rpx;
				text-align: center;
				border-top-right-radius: 20rpx;
				border-bottom-right-radius: 20rpx;
				background-color: #F3C892;
				font-size: 26rpx;
				box-shadow: 1px 1px 10rpx rgba(0, 0, 0, 0.5);
			}
		}
	}
	
</style>