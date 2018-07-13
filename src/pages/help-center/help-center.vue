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
									<router-link :to="{ path:val.path}">{{val.name}}</router-link>
									<!-- <a :href="val.path">{{val.name}}</a> -->
								</li>
							</ul>
						</div>
					</div>
					<div class="help-right">
						<div class="help-right-container">
							<router-view></router-view>
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
			num:'',
			leftData:[
				{
					"title":"关于我们",
					"icon":"icon-about-us",
					"items":[
						{"name":"公司简介","path":"/companyProfile/0"},
						{"name":"荣誉资质","path":"/companyProfile/1"},
						{"name":"新闻中心","path":"/companyProfile/2"}
					]
				},
				{
					"title":"安全保障",
					"icon":"icon-safety",
					"items":[
						{"name":"信息披露","path":"/companyProfile/3"},
						{"name":"平台公告","path":"/companyProfile/4"},
						{"name":"法律监管","path":"/companyProfile/5"}
					]
				},
				{
					"title":"帮助中心",
					"icon":"icon-help-center",
					"items":[
						{"name":"新手指南","path":"/companyProfile/6"},
						{"name":"常见问题","path":"/companyProfile/7"},
						{"name":"联系客服","path":"/companyProfile/8"}
					]
				},
			]
        }
    },
	components: {
        VHeader,
        VFooter
	},
	watch:{
		$route(){
            this.num = this.$route.params.num;
            if(this.num == 0){
                this.dataList=[{"text":"急急急急急急"}]
            }else if(this.num == 1){
                this.dataList=[{"text":"急急急急急急11111"}]
            }else if(this.num == 2){
                this.dataList=[{"text":"急急急急急急22222"}]
            }
            Bus.$emit('txt',this.num);
            // Bus.$emit('numIndex',this.num);
            console.log('this.num',this.num)
            console.log('busa',Bus)
      }
	},
	mounted:function(){
        // Bus.$emit('txt',this.open);
        // '$route'() {
        //   this.currentUrl = this.$route.fullPath; // 实时监测当前路由的变化并且赋值
        // }
        // console.log(this.$route.params.num)
        // Bus.$emit('num',this.open);
    }
}
</script>

<style lang="less">
@import "../../common/help-center.less";
</style>
