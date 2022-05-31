export default {
	namespaced: true,
	state: () => ({
		userInfo: JSON.parse(uni.getStorageSync('userInfo') || '{}')
	}),
	mutations: {
		// 更新用户信息
		updateUserInfo(state, info) {
			state.userInfo = {...state.userInfo, ...info }
			this.commit('m_user/saveUserInfo')
		},
		// 清空用户信息
		removeUserInfo(state) {
			state.userInfo = {}
			this.commit('m_user/saveUserInfo')
		},
		// 存储到本地
		saveUserInfo(state) {
			uni.setStorageSync('userInfo', JSON.stringify(state.userInfo))
		}
	},
	getters: {
		
	}
}