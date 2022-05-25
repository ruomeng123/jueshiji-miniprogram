export default {
	namespaced: true,
	state: () => ({
		// 抽取的食物列表
		foodList:  uni.getStorageSync('foodList') || ['番茄炒蛋', '辣椒炒肉', '猪肉炖粉条', '酸辣土豆丝', '地锅鸡', '大盘鸡', '红烧带鱼', '泡面']
	}),
	mutations: {
		
		// 更新菜单
		updateMenu(state, foodList) {
			state.foodList = foodList
			this.commit('m_menu/saveMenuToStorage')
		},
		// 本地存储菜单
		saveMenuToStorage(state) {
			uni.setStorageSync('foodList', state.foodList)
		},
		// 添加食物进入菜单
		addFoodToMenu(state, food) {
			state.foodList.unshift(food)
			this.commit('m_menu/saveMenuToStorage')
			console.log(111);
		}
	},
	getters: {
		
	}
}