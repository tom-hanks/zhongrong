<template>
<div id="app">
	<v-header :pageNo="3"></v-header>
	<div class="wufu-container">
		<div class="container-wrapper">
			<div class="info-top">
				<img src="/static/info/top-bg.jpg" alt="">
				<div class="top-content">
					<div>
						<img src="/static/info/text.png" alt="">
					</div>
				</div>
			</div>
			<div class="tabs-wrapper">
				<div class="info-tabs">
					<ul>
						<li v-for="(item,index) in infoItem" :key="index">
							<router-link :to="{ path:item.path }">{{item.name}}</router-link>
						</li>
					</ul>
				</div>
				<div class="tabs-container">
					<router-view></router-view>
				</div>
			</div>
		</div>
	</div>
	<!-- <p>信息披露</p> -->
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
			"infoItem":[
				{
					"name":"组织信息",
					"path":"detail1"
				},
				{
					"name":"备案信息",
					"path":"detail2"
				},
				{
					"name":"审核信息",
					"path":"detail3"
				},
				{
					"name":"经营信息",
					"path":"detail4"
				},
				{
					"name":"重大事项",
					"path":"detail5"
				},
				{
					"name":"平台用户教育",
					"path":"detail6"
				},
				{
					"name":"其他信息",
					"path":"detail7"
				},
				{
					"name":"法人承诺书",
					"path":"detail8"
				}
			]
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
