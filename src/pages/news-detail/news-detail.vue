<template lang="html">
	<div id="app">
		<v-header></v-header>
		<div class="wufu-container">
			<div class="help-center-banner">
				<img src="/static/help-center/banner.png" alt="">
			</div>
			<div class="help-center-wrapper">
				<div class="help-center-box float-clearfixed">
					<div class="help-left">
						<div class="" v-for="(item,index) in leftData" :key="index">
							<h2><i class="icon" :class="item.icon"></i>{{item.title}}</h2>
							<ul>
								<li v-for="(val,selfIndex) in item.items" :key="selfIndex">
									<!-- <router-link :to="{ path:val.path }">{{val.name}}</router-link> -->
									<a :href="val.path" :class=" val.cc == numIndex ? 'active' : ''">{{val.name}}</a>
								</li>
							</ul>
						</div>
					</div>
					<div class="help-right">
						<div class="help-right-container">
							<div class="detail">
								<p>"五福贷"是上海中融资产管理有限公司旗下专业互联网惠普金融平台，致力于为广大投资者和资金需求者提供信息中介服务。</p>
								<p>上海中融资产管理股份有限公司成立于2015年8月，注册资本2亿，总部位于上海黄浦区淮海东路45号东淮海国际大厦14楼。中融股份是一家智能化综合金融服务平台，通过科技驱动金融创新，为中国优质城市白领人群提供高效、便捷、个性化的信用借贷服务。</p>
								<p>作为惠普金融的领航者和智慧金融的探索者，中融股份旨在通过Fintech为中小微企业及个人提供专业、透明、合规、高效的金融资管服务，从而提升社会闲散资金的利用效率。帮助中小微企业实现更为高效、低成本的融资需求，同时为投资者提供低风险、低门槛、安全保障的信息中介服务。</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<v-footer></v-footer>
	</div>
</template>

<script>
import Bus from '../../common/bus.js'
import VHeader from '../../components/header/header'
import VFooter from '../../components/footer/footer'
export default {
	name: 'app',
    data(){
		return {
			numIndex:'',
			leftData:[
				{
					"title":"关于我们",
					"icon":"icon-about-us",
					"items":[
						{"name":"公司简介","path":"/help-center.html#/companyProfile/0","cc":"0"},
						{"name":"荣誉资质","path":"/help-center.html#/companyProfile/1","cc":"1"},
						{"name":"新闻中心","path":"/help-center.html#/companyProfile/2","cc":"2"}
					]
				},
				{
					"title":"安全保障",
					"icon":"icon-safety",
					"items":[
						{"name":"信息披露","path":"/help-center.html#/companyProfile/3","cc":"3"},
						{"name":"平台公告","path":"/help-center.html#/companyProfile/4","cc":"4"},
						{"name":"法律监管","path":"/help-center.html#/companyProfile/5","cc":"5"}
					]
				},
				{
					"title":"帮助中心",
					"icon":"icon-help-center",
					"items":[
						{"name":"新手指南","path":"/help-center.html#/companyProfile/6","cc":"6"},
						{"name":"常见问题","path":"/help-center.html#/companyProfile/7","cc":"7"},
						{"name":"联系客服","path":"/help-center.html#/companyProfile/8","cc":"8"}
					]
				},
			]
        }
    },
	components: {
        VHeader,
        VFooter
	},
	created(){
		this.numIndex = this.$utils.getUrlKey("num");
    	console.log("aa",this.numIndex);
		// console.log(111111111111)
		var _this=this;
        // 接收数据 侧边
        // Bus.$on('numIndex',function(numIndex){
		// 	console.log(11111111111111111111111111111111111111111)
        //   _this.index = numIndex ;
		//   console.log(123123123)
        //   console.log(_this.index);
        // });
        // console.log('bus',Bus)
		// console.log('bussssss',Bus._events.numIndex[0])
		// Bus.$emit('numIndex',function(msg){
		// 	console.log('进来')
		// 	console.log(msg)
        //   // _this.open = open ;
        //   // console.log(_this.open);
        // });
	}
}
</script>

<style lang="less">
@import "../../common/help-center.less";
</style>
