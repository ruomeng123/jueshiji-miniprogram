<template>
	<view class="container">
		<!-- 头部:当前位置 -->
		<view class="title-box">
			<view class="address" @click="Reselect">
				{{currentLocation.name || '当前定位'}} 
				<uni-icons class="icon" type="forward" size="16"></uni-icons>
			</view>
			<label class="radio" @click="changeAllState" v-if="isShowRes">
				<text>全选</text>
				<radio color="#F3C892" :checked="isFullChecked" />
			</label>
		</view>
		<!-- 附近餐厅列表 -->
		<view class="restaurant-list" v-if="isShowRes" v-for="(item, index) in restaurantList" :key="index">
			<restaurant-item :item="item" :isRadioShow="true" @radio-click="radioClick"></restaurant-item>
		</view>

		<!-- 提交区域 -->
		<view class="my-submit-container" v-if="isShowRes">
			<!-- 确定按钮 -->
			<view class="btn-submit">
				选好了({{checkedCount || 0}})
				<view class="btn-submit2" @click="submitRestaurant">选好了({{checkedCount || 0}})</view>
			</view>
		</view>
		
		<!-- 页面空白情况 -->
		<view class="black" v-else>
			<text>啊哦,暂时没有数据呢~</text>
			<image src="https://daxi-image-1311562881.cos.ap-nanjing.myqcloud.com/jueshiji%2Fjueshiji-zz%20(2).png" mode="aspectFit"></image>
		</view>
	</view>
</template>

<script>
	// 引入SDK核心类
	import QQMapWX from '../../libs/qqmap-wx-jssdk.js'
	import {
		mapState,
		mapMutations,
	} from 'vuex'
	export default {
		data() {
			return {
				isShowRes: false, // 控制餐厅列表是否显示
				// isFullChecked: true,
				restaurantList: [], // 餐厅数据列表
				currentLocation: {} , // 当前位置信息
				page_index: 1, // 当前请求餐厅的页数
				page_size: 20, // 请求餐厅每页的数据
				total: 0,
				isLoading: false, // 节流阀
			};
		},
		onLoad() {
			this.getaddress()
		},
		computed: {
			...mapState('m_restaurant', ['currentLocationInfo', 'RestaurantInfo']), 
			checkedCount() {
				return this.restaurantList.filter(item => item.type).length
			},
			// 全选状态
			isFullChecked(e) {
				// 过滤出选中的餐厅,将它们的数量进行叠加,与已经加载的餐厅总数量进行对比,相等就返回true,为选中状态
				return this.page_index * this.page_size === this.checkedCount
			}
		},
		methods: {
			// ...mapMutations('m_restaurant', ['updateCurrentLocationInfo', 'updateRestaurantInfo']),
			// 获取选择地址
			getaddress() {
				let that = this
				uni.authorize({
					scope: 'scope.userLocation',
					success() {
						that.getLocation()
					},
					fail(err) {
						that.openAuthSetting()
					}
				})

			},

			//成功以后获取位置信息
			getLocation() {
				let that = this
				// 选择位置
				uni.chooseLocation({
					// longitude: res.longitude,
					// latitude: res.latitude,
					success: function(res) {
						// console.log('选择的位置是：' + JSON.stringify(res));
						if (res.errMsg === 'chooseLocation:ok') {
							that.currentLocation = res
							// 调用搜索餐厅接口
							that.searchRestaurant()
							// 更新当前位置信息到store
							// that.updateCurrentLocationInfo(res)
						}
					},
					fail(err) {
						uni.$showMsg('您取消了获取位置信息!')
					},

				});

			},

			// 重新获取位置授权
			openAuthSetting() {
				let that = this
				uni.getSetting({
					success: (res) => {
						// console.log(res, JSON.stringify(res, "getSetting"));
						if (
							res.authSetting["scope.userLocation"] != undefined &&
							res.authSetting["scope.userLocation"] != true
						) {
							uni.showModal({
								title: "请求授权当前位置",
								content: "需要获取您的地理位置，请确认授权",
								success: function(res) {
									if (res.cancel) {
										uni.$showMsg('已取消！')
										// 回到首页
										uni.switchTab({
											url: '../../pages/home/home'
										})
									} else if (res.confirm) {
										uni.openSetting({
											success(dataAu) {
												// console.log(dataAu, "openSetting");
												if (dataAu.authSetting[
														"scope.userLocation"] == true) {
													uni.showToast({
														title: "授权成功",
														icon: "none"
													});
													//再次授权，调用wx.getLocation的API
													that.getLocation();
												} else {
													uni.showToast({
														title: "授权失败",
														icon: "none"
													});
												}
											},
										});
									}
								},
							});
							// 首次授权
						} else if (res.authSetting["scope.userLocation"] == undefined) {
							//调用wx.getLocation的API
							console.log("首次授权");
							this.getLocation();
						} else {
							//调用wx.getLocation的API
							this.getLocation();
						}
					}
				});
			},
			
			// 附近餐饮搜索
			searchRestaurant(callback) {
				let that = this
				//引入腾讯地图对象
				let qqmapsdk = new QQMapWX({
					key: 'IWIBZ-BG5E3-COK3S-Y2RPR-2M2QK-5YFUZ'
				});
				// 打开节流阀
				this.isLoading = true
				uni.showLoading({
					title: '附近餐厅寻找中...'
				})
				// 调用搜索接口
				qqmapsdk.search({
					keyword: '餐饮',
					location: {
						latitude: that.currentLocation.latitude,
						longitude: that.currentLocation.longitude
					},
					address_format: 'short',
					page_index: that.page_index,
					page_size: that.page_size,
					// 调取成功
					success(res) {
						that.isLoading = false
						uni.hideLoading()
						// 只要数据请求完毕,就立即按需调用callback回调函数
						callback && callback()
						if (res.status === 0 && res.message === 'query ok') {
							// 获取附近餐厅信息成功!
							console.log(res);
							// 将获取到的一页结果拼接到餐厅列表中
							that.restaurantList = [...that.restaurantList, ...res.data]
							// 餐厅总数量
							that.total = res.count
							// 显示列表页面
							that.isShowRes = true
							// 更新数据到本地
							// that.RestaurantInfo = that.restaurantList
						} else {
							// 获取失败!
							uni.$showMsg('发生异常,请稍后再试!')
						}

					},
					// 调取失败
					fail(res) {
						// console.log(res);
						uni.$showMsg('服务端发生异常,请稍后再试!')
					}
				});
			},
			
			// 重新选择定位点击事件
			Reselect() {
				this.getLocation()
			},
			// 单选框点击事件
			radioClick(e) {
				// console.log(e);
				// 修改选中状态(渲染到视图)
				const findResult = this.restaurantList.find(item => item.id === e.id)
				if(findResult) {
					// 找到并返回了对应的餐厅findResult
					findResult.type = e.state
					console.log(findResult.type);
					// console.log(this.restaurantList);
				}
			},
			// 全选框的点击事件,更新所有餐厅的选中状态(渲染到视图)
			changeAllState() {
				//console.log(e);
				if(this.isFullChecked) {
					// 已经全选了,再点击就是取消全选
					this.restaurantList.forEach(item => item.type = false)
				} else {
					// 未全选状态
					this.restaurantList.forEach(item => item.type = true)
				}
				// this.isFullChecked = !this.isFullChecked
				// console.log(this.checkedCount);
				// console.log(this.page_index * this.page_size);
				// console.log(this.restaurantList);
			},
			submitRestaurant() {
				// 判断是否勾选了
				if(!this.checkedCount) {
					uni.showModal({
						title: '提示',
						content: '您还未选择餐厅,是否直接查看已添加的餐厅列表',
						success: function (res) {
							if (res.confirm) {
								console.log('用户点击确定');
							} else if (res.cancel) {
								console.log('用户点击取消');
							}
						}
					});
				}
				
			}
		},
		// 上拉翻页事件
		onReachBottom() {
			// console.log(this.total);
			// console.log(this.page_index);
			// console.log(this.page_size);
			// 判断是否还有数据
			if(this.page_size * this.page_index >= this.total) {
				// 没有数据了
				return uni.$showMsg('别拉了,我也是有底线的!')
			}
			
			// 判断是否请求完成
			if(this.isLoading) return
			
			// 请求下一页数据
			this.page_index++
			this.searchRestaurant()
		},
		// 下拉刷新事件
		onPullDownRefresh() {
			// 重置关键数据
			this.page_index = 1,
			this.total = 0,
			// this.isLoading = false,
			this.restaurantList = []
			// 重新发起请求,并关闭下拉刷新
			this.searchRestaurant(() => uni.stopPullDownRefresh())
		}
	}
</script>

<style lang="scss">
	
	.container {
		width: 100%;
		.black {
			// width: 100%;
			// height: 100%;
			margin-top: 40%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			image {
				flex: 1;
			}
			text {
				padding: 50rpx;
				font-size: 32rpx;
			}
		}
	}

	.title-box {
		position: sticky;
		top: 0;
		z-index: 999;
		background-color: #F4FCD9;
		display: flex;
		// justify-content: space-between;
		align-items: center;
		padding: 10rpx 40rpx 10rpx 60rpx;

		.address {
			max-width: 75%;
			font-size: 26rpx;
			line-height: 34rpx;

			&::before {
				position: absolute;
				top: 12rpx;
				left: 26rpx;
				content: '\e6be';
				font-size: 28rpx;
				font-family: "iconfont" !important;
				-webkit-font-smoothing: antialiased;
				-moz-osx-font-smoothing: grayscale;
			}
		}

		.radio {
			position: absolute;
			right: 26rpx;
			min-width: 20%;
			text-align: center;

			text {
				padding-right: 10rpx;
				color: #333;
				font-size: 26rpx;
			}
		}
	}

	.my-submit-container {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 50px;
		// 将背景色从 cyan 改为 white
		background-color: rbga(255, 255, 255, 0.3);
		display: flex;
		justify-content: flex-end;
		align-items: center;
		padding-left: 5px;
		font-size: 14px;

		.btn-submit,
		.btn-submit2 {
			position: relative;
			height: 80rpx;
			min-width: 120rpx;
			background-color: #4E944F;
			color: white;
			border-top-left-radius: 50rpx;
			border-bottom-left-radius: 50rpx;
			line-height: 80rpx;
			text-align: center;
			padding: 0 20rpx;

			// z-index: -1;
			.btn-submit2 {
				position: absolute;
				top: -8rpx;
				left: 0;
				background-color: #ffaa00;
				z-index: 999;
			}
		}
	}
</style>
