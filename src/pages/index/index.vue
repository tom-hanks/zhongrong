<template>
<div id="app">
	<v-header :pageNo="0"></v-header>
	<div class="wufu-container">
		<router-view></router-view>
	</div>
	<v-footer></v-footer>
	<!--<li><a href="#/commodity@commodity_info" class="waves-effect waves-teal menu-item">商品信息</a></li>-->
	<!-- <nav-header :pageNo="1"></nav-header> -->

</div>
</template>

<script>
import VHeader from '../../components/header/header'
import VFooter from '../../components/footer/footer'
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

<style>
</style>
