<template>
<div id="app">
	<v-header :pageNo="3"></v-header>
	<div class="wufu-container">
		<div class="container-wrapper">
			<div class="report-box">
				<img src="/static/info/report-1.jpg" alt="">
				<img src="/static/info/report-2.jpg" alt="">
				<img src="/static/info/report-3.jpg" alt="">
				<img src="/static/info/report-4.jpg" alt="">
				<img src="/static/info/report-5.jpg" alt="">
			</div>
		</div>
	</div>
	<v-footer></v-footer>

</div>
</template>

<script>
import VHeader from '../../../components/header/header'
import VFooter from '../../../components/footer/footer'
export default {
	name: 'app',
    data(){
        return {

        }
    },
	//  页面加载之前
	created() {},
	//  页面加载后
	mounted() {

	},
	components: {
        VHeader,
        VFooter
	}
}
</script>

<style lang="less">
@import "../../../common/info.less";
</style>
