import Vue from 'vue'
import Vuex from 'vuex'
// 引入菜单数据模块
import moduleMenu from '@/store/menu.js'
// 引入餐厅数据模块
// 引入用户数据模块

Vue.use(Vuex)

const store = new Vuex.Store({
	// 挂载模块
	modules: {
		'm_menu': moduleMenu
	}
})

export default store