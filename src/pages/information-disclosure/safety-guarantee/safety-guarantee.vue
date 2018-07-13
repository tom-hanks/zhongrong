<template>
<div id="app">
	<v-header :pageNo="3"></v-header>
	<div class="wufu-container">
		<div class="info-top">
			<img src="/static/info/bank-deposit.png" alt="">
		</div>
		<div class="">
			<h1 style="text-align:center;font-size:30px;margin:20px;font-weight:bolder">此页面为demo测试</h1>
			<echarts-pie></echarts-pie>
		</div>

	</div>
	<v-footer></v-footer>

</div>
</template>

<script>
import VHeader from '../../../components/header/header'
import VFooter from '../../../components/footer/footer'
import EchartsPie from '../../../components/echarts-pie/echarts-pie'
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
		// navHeader,
        VHeader,
        VFooter,
		EchartsPie
	}
}
</script>

<style>
</style>
