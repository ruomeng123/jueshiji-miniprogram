export default {
	namespaced: true,
	status: () => ({
		// 用户的当前位置信息
		currentLocationInfo: JSON.parse(uni.getStorageSync('currentLocationInfo') || '{}'),
		// 自选附近餐厅列表
		RestaurantInfo: JSON.parse(uni.getStorageSync('RestaurantInfo') || '{}'),
	}),
	mutations: {
		// 更新用户当前位置信息
		updateCurrentLocationInfo(state, LocationInfo) {
			state.currentLocationInfo = LocationInfo
			this.commit('m_restaurant/saveCurrentLocationInfo')
		},
		// 存储用户当前位置信息
		saveCurrentLocationInfo(state) {
			uni.setStorageSync('currentLocationInfo', JSON.stringify(state.currentLocationInfo))
		},
		// 更新附近餐厅信息
		updateRestaurantInfo(state, RestaurantInfo) {
			state.RestaurantInfo = RestaurantInfo
			this.commit('m_restaurant/saveRestaurantInfo')
		},
		// 存储附近餐厅信息
		saveRestaurantInfo(state) {
			uni.setStorageSync('RestaurantInfo', JSON.stringify(state.RestaurantInfo))
		}
	},
	getters: {
		// 获取到的餐厅总数量
		count(state) {
			return state.count
		},
		// // 每个餐厅的具体信息
		// restaurantData(state) {
		// 	return state.data
		// }
	}
}