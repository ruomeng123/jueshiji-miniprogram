<template>
	<view class="avatar-container">
		<view class="card">
			<view class="top">
				<image class="top-avatar" :src="userInfo.avatarUrl || 'https://daxi-image-1311562881.cos.ap-nanjing.myqcloud.com/jueshiji%2Fjueshiji-zz%20(12).png'" mode="aspectFill" @click="getUserInfo"></image>
				<view class="name" @click="getUserInfo">
					{{userInfo.nickName || '登录'}}
				</view>
			</view>
			<view class="bottom-data">
				<view class="left">
					<view class="value">
						{{useDays}}
					</view>
					<view class="key">
						使用天数
					</view>
				</view>
				<view class="right">
					<view class="value">
						20
					</view>
					<view class="key">
						打卡次数
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { mapState } from 'vuex'
	export default {
		name:"my-user-avatar",
		props: {
			useDays: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				
			};
		},
		computed: {
			...mapState('m_user', ['userInfo']),
			
		},
		methods: {
			// 触发获取用户信息方法
			getUserInfo() {
				this.$emit('getUserInfo')
			},
			
		}
	}
</script>

<style lang="scss">
	.avatar-container {
		position: relative;
		height: 300rpx;
		// background-color: #F4FCD9;
		background-image: linear-gradient(180deg, #F4FCD9 0%, #CEE5D0 100%);
		display: flex;
		flex-direction: column;
		align-items: center;
		.card {
			position: absolute;
			top: 150rpx;
			width: 92%;
			height: 300rpx;
			background-color: #fff;
			border-radius: 15rpx;
			box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
			.top {
				position: absolute;
				top: -120rpx;
				height: 300rpx;
				width: 100%;
				// background-color: #ffaaff;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				.top-avatar {
					width: 160rpx;
					height: 160rpx;
					border: 6rpx solid #fff;
					border-radius: 50%;
					box-shadow: 4px 4px 8px rgba(197, 216, 164, 0.6);
					// box-shadow: 4px 4px 8px rgba(255, 255, 255, 0.6);
					background-color: #fff;
				}
				.name {
					margin-top: 15rpx;
					font-size: 34rpx;
					color: #534340;
					max-width: 60%;
					text-align: center;
				}
			}
			
			.bottom-data {
				position: absolute;
				bottom: 30rpx;
				flex: 1;
				display: flex;
				justify-content: space-around;
				align-items: center;
				width: 100%;
				.left,
				.right {
					height: 100rpx;
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					align-items: center;
					.value {
						color: #b49376;
						font-size: 38rpx;
					}
					.key {
						font-size: 30rpx;
					}
				}
			}
		}
		
	}
</style>