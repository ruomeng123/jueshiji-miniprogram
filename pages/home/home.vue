<template>
	<view class="home-container">
		<!-- 随机菜单选择区域 -->
		<uni-section title="随机选择" type="line">
			<my-blackboard></my-blackboard>
		</uni-section>
		<!-- 自定义菜单区域 -->
		<uni-section title="自定义菜单" type="line">
			<my-custom-menu></my-custom-menu>
		</uni-section>
		
		<!-- 每日鸡汤区域 -->
		<uni-section class="textPart" title="来碗鸡汤先" type="line">
			<view class="text">
				<text selectable>{{text}}</text>
			</view>
		</uni-section>
		
		
		<!-- 底部信息区 -->
		<view class="my-footer-container">
			<my-footer></my-footer>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				text: '好好吃饭,认真生活!'
			};
		},
		onLoad() {
			// 加载鸡汤
			// this.getText()
			this.getUserInfo()
		},
		methods: {
			// TODO: 鸡汤接口
			// async getText() {
			// 	const { err, res } = await uni.$http.get('https://api.apiopen.top/api/sentences').catch(err => err)
			// 	console.log(err);
			// 	console.log(res);
			// }
			
		}
	}
</script>

<style lang="scss">
	.textPart {
		.text {
			margin: 30rpx;
			padding: 20rpx;
			min-height: 100rpx;
			background-color: aquamarine;
			display: flex;
			justify-content: center;
			align-items: center;
			box-shadow: 1px 6rpx 10rpx rgba(0, 0, 0, 0.3);
			border-radius: 30rpx;
			border: 10rpx solid #fff;
			background-color: #CEE5D0;
			text {
				font-size: 28rpx;
				line-height: 48rpx;
			}
		}
	}
</style>
