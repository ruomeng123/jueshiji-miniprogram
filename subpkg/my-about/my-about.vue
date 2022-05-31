<template>
	<view class="about-container">
		<image class="logoImage" src="https://daxi-image-1311562881.cos.ap-nanjing.myqcloud.com/jueshiji%2Flogo.png" mode="aspectFit"></image>
		<view class="info">
			<text>抉食记</text>
			<text class="slogan">吃饭不再纠结!</text>
			<text class="version">V1.1.1</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	page {
		// background-color: #fff;
		background-image: linear-gradient(-20deg, #e9defa 0%, #fbfcdb 100%);
		.about-container {
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: space-evenly;
			align-items: center;
			.logoImage {
				margin-top: 150rpx;
				margin-bottom: 250rpx;
				height: 180rpx;
				width: 180rpx;
				border-radius: 50%;
				border: 2px solid #fff;
				box-shadow: 2px 2px 6px rgba(187, 153, 129, 0.6);
			}
			.info {
				display: flex;
				flex-direction: column;
				align-items: center;
				font-size: 36rpx;
				.slogan {
					margin-top: 15rpx;
					margin-bottom: 10rpx;
					font-size: 32rpx;
					color: #333;
				}
				.version {
					font-size: 30rpx;
					color: gray;
				}
			}
		}
	}
</style>
