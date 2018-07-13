<template lang="html">
<div class="header" ref="conditionOption" :class="filterFixed ? 'headerFixed':'' ">
	<div class="header-wrapper">
		<div class="header-container float-clearfixed">
			<a href="/index.html" class="logo">
				<!-- <img src="../../../static/header/logo.png" alt=""> -->
				<!-- <i ></i> -->
			</a>
			<!-- 导航 -->
			<div class="nav">
				<ul>
					<li v-for="(val,index) in list" :key="index" :class="{'active':val.active}" @mouseover="showMenu(index)" @mouseleave="hideMenu()" @click="changeMenu(index)">
						<a :href="val.url">{{val.name}}</a>
						<div class="sub-menu" :class="{'active':index===menuActiveIndex}">
							<div class="sub-menu-box">
								<ul>
									<li v-for="(menuSubVal,selfIndex) in val.menuSub" :key="selfIndex">
										<a :href="menuSubVal.url">{{menuSubVal.menuName}}</a>
									</li>
								</ul>

							</div>
						</div>
					</li>
				</ul>
				<div class="login-box">
					<a href="/login.html" class="login">登录</a>
					<a href="/register.html">注册</a>
				</div>
			</div>
		</div>
	</div>

</div>
</template>

<script>
export default {
	props:['pageNo'],
	data(){
		return{
			"selfPageNo":this.pageNo,
			"activeIndex":0,
			"liIndex":'',
			"menuActiveIndex":'',
			"filterFixed":'',
			"list":[
				{
					"name":"首页",
					"url":"/index.html",
					"active":false,
					"menuSub":[
						{
							"menuName":"五福贷1",
							"url":""
						},
						{
							"menuName":"五福贷1",
							"url":""
						},
						{
							"menuName":"五福贷1",
							"url":""
						},
						{
							"menuName":"五福贷1",
							"url":""
						},
					]
				},
				{
					"name":"我要出借",
					"url":"/lend/lend-index.html",

          // #/commodity@commodity_info

					"active":false,
					"menuSub":[
						{
							"menuName":"五福贷2",
							"url":"/lend/lend-index.html"
						},
						{
							"menuName":"五福贷2",
							"url":""
						}
					]
				},
				{
					"name":"我要借款",
					"url":"/loan.html",
					"active":false,
					"menuSub":[
						{
							"menuName":"五福贷3",
							"url":""
						},
						{
							"menuName":"五福贷3",
							"url":""
						}
					]
				},
				{
					"name":"信息披露",
					"url":"/information-disclosure/information-disclosure.html",
					"active":false,
					"menuSub":[
						{
							"menuName":"信息披露",
							"url":"/information-disclosure/information-disclosure.html"
						},
						{
							"menuName":"银行存管",
							"url":"/information-disclosure/bank-deposit.html"
						},
						{
							"menuName":"运营报告",
							"url":"/information-disclosure/operation-report.html"
						},
						{
							"menuName":"安全保障",
							"url":"/information-disclosure/safety-guarantee.html"
						},
					]
				},
				{
					"name":"五福活动",
					"url":"/wufu-activities.html",
					"active":false,
					"menuSub":[

					]
				},
				{
					"name":"我的福袋",
					"url":"/my-bag.html",
					"active":false,
					"menuSub":[

					]
				},
			]
		}
	},
	mounted(){
        window.addEventListener('scroll',this.handleScroll);
		for(var i=0; i<this.list.length;i++){
	      if(i == this.selfPageNo){
	        this.list[i].active = true;
	      }
	    }
    },
	methods:{
		changeMenu(index){
			this.activeIndex = index;
		},
		showMenu(index){
			this.menuActiveIndex = index;
		},
		hideMenu(){
			this.menuActiveIndex = '';
		},
		handleScroll(){
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            let offsetTop = this.$refs.conditionOption.offsetTop
            if(scrollTop > 480){
                this.filterFixed = true;
            }else{
                this.filterFixed = false;
            }
        },
	},
	destroyed () {
        // console.log('离开')
      window.removeEventListener('scroll', this.handleScroll)
    },
	computed:{
		active(){
			return this.selfPageNo - 1
		}
	}
}
</script>

<style lang="less">
@import 'header.less';
</style>
