<template>
	<view>
		<view class="my-footer">
			<text class="name">抉食记小程序</text>
			<text class="info">由若梦提供技术支持 v.1.0.0</text>
			<text class="info">感谢我家崽崽女孩的倾情陪伴! @崽崽zepeto</text>
		</view>
	</view>
</template>

<script>
	export default {
		name:"my-footer",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.my-footer {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
		margin-top: 50rpx;
		font-size: 24rpx;
		width: 100%;
		height: 100rpx;
		background-color: rgba(0, 0, 0, 0.5);
		.name {
			color: #fff;
		}
		.info {
			color: #efefef;
			font-size: 18rpx;
		}
	}
</style>