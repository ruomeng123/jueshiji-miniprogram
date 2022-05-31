<template>
	<view>
		<view class="list-box">
			<button class="list-item suggestion" open-type="feedback">
				<view class="left">
					<uni-icons custom-prefix="iconfont" type="icon-jueshiEditDocument" size="18" color="#BB9981">
					</uni-icons>
					<text>意见反馈</text>
				</view>
				<uni-icons type="forward" size="18" color="#9ca3a6"></uni-icons>
			</button>
			<button class="list-item online" open-type="contact">
				<view class="left">
					<uni-icons custom-prefix="iconfont" type="icon-jueshismile" size="18" color="#BB9981"></uni-icons>
					<text>在线客服</text>
				</view>
				<uni-icons type="forward" size="18" color="#9ca3a6"></uni-icons>
			</button>
			<view class="list-item support" @click="showImg">
				<view class="left">
					<uni-icons custom-prefix="iconfont" type="icon-jueshiSavings" size="20" color="#BB9981"></uni-icons>
					<text>赞赏支持</text>
				</view>
				<uni-icons type="forward" size="18" color="#9ca3a6"></uni-icons>
			</view>
			<view class="list-item about" @click="goToAbout">
				<view class="left">
					<uni-icons custom-prefix="iconfont" type="icon-jueshiInfo" size="18" color="#BB9981"></uni-icons>
					<text>关于抉食记</text>
				</view>
				<uni-icons type="forward" size="18" color="#9ca3a6"></uni-icons>
			</view>
			<button class="list-item share" open-type="share">
				<view class="left">
					<uni-icons custom-prefix="iconfont" type="icon-jueshishare-square" size="16" color="#BB9981">
					</uni-icons>
					<text>推荐给好友</text>
				</view>
				<uni-icons type="forward" size="18" color="#9ca3a6"></uni-icons>
			</button>
			<view class="list-item logout" @click="logout" v-if="userInfo.nickName">
				<view class="left">
					<uni-icons custom-prefix="iconfont" type="icon-jueshipower-switch" size="18" color="#BB9981">
					</uni-icons>
					<text>退出登录</text>
				</view>
				<uni-icons type="forward" size="18" color="#9ca3a6"></uni-icons>
			</view>
		</view>
	</view>
</template>

<script>
	import { mapState } from 'vuex'
	export default {
		name: "my-user-list",
		data() {
			return {

			};
		},
		computed: {
			...mapState('m_user', ['userInfo'])
		},
		methods: {
			// 赞赏支持点击事件：展示赞赏码
			showImg() {
				let imgArr = ['https://daxi-image-1311562881.cos.ap-nanjing.myqcloud.com/jueshiji%2Fsupport.jpg']
				uni.previewImage({
					urls: imgArr,
					current: imgArr[0]
				})
			},
			// 关于抉食记点击事件：跳转到my-about页面
			goToAbout() {
				uni.navigateTo({
					url: '../../subpkg/my-about/my-about'
				})
			},
			logout() {
				this.$emit('logout')
			}
		}
	}
</script>

<style lang="scss">
	// 去除button按钮的默认样式
	button {
	  background-color: #fff;
	  border-radius: 0;
	  padding: 0;
	  &::after {
	    border: none;
	  }
	}
	
	.list-box {
		display: flex;
		flex-direction: column;
		background-color: #fff;
		width: 100%;

		.list-item {
			margin: 0 30rpx;
			height: 100rpx;
			border-bottom: 1px solid #d0d9dc;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.left {
				display: flex;
				align-items: center;

				text {
					margin-left: 20rpx;
					font-size: 28rpx;
				}
			}
		}

		.logout {
			border-bottom: none;
		}
	}
</style>
