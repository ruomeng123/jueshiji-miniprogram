<template>
	<view>
		<!-- 头部头像区域 -->
		<view class="avatar-container">
			<my-user-avatar :useDays="useDays" @getUserInfo="getUserInfo"></my-user-avatar>
		</view>
		<!-- 功能列表区域 -->
		<view class="list-container">
			<my-user-list @logout="logout"></my-user-list>
		</view>
		<!-- 底部信息区 -->
		<view class="my-footer-container">
			<my-footer></my-footer>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		data() {
			return {
				loginTime: 0,
				currentTime: 0
			};
		},
		computed: {
			...mapState('m_user', ['userInfo']),
			// 计算用户使用天数
			useDays() {
				return parseInt((this.currentTime - this.userInfo.loginTime) / (1000 * 60 * 60 * 24) + 1)
			}
		},
		onShow() {
			this.getCurrentTime()
		},
		methods: {
			...mapMutations('m_user', ['removeUserInfo', 'updateUserInfo']),
			// 获取用户信息
			async getUserInfo() {
				const res = await uni.getUserProfile({
					desc: '获取您的头像、昵称',
					lang: 'zh_CN'
				})
				if (res[0] && res[0].errMsg === 'getUserProfile:fail auth deny') {
					return uni.$showMsg('您取消了登录！')
				} else if (res[1] && res[1].errMsg === 'getUserProfile:ok') {
					this.loginTime = new Date().getTime()
					const info = {
						...res[1].userInfo,
						loginTime: this.loginTime
					}
					// console.log(this.loginTime);
					// console.log(res[1].userInfo);
					// this.userInfo = res[1].userInfo
					this.updateUserInfo(info)
				}
			},
			// 退出登录
			async logout() {
				const res = await uni.showModal({
					title: '提示',
					content: '确定退出登录吗？'
				})
				if (res[1] && res[1].confirm) {
					// 用户确定了要退出登录，需要清空用户信息
					this.removeUserInfo()
				}
			},
			// 获取当前时间
			getCurrentTime() {
				// 首次获取当前时间
				this.currentTime = new Date().getTime()
				// 隔1小时获取一次当前时间
				setInterval(() => {
					this.currentTime = new Date().getTime()
				}, 1000 * 60 * 60)
			}
		}
	}
</script>

<style lang="scss">
	.list-container {
		margin-top: 200rpx;
	}
</style>
