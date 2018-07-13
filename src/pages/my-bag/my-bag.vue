<template>
<div id="app">
	<v-header :pageNo="5" class="headerSpecial"></v-header>
	<div class="wufu-container">
		<div class="bag-banner">
			<img src="/static/my-bag/banner.png" alt="">
		</div>
		<div class="bag-wrapper">
			<div class="bag-top">
				<basic-info-repay></basic-info-repay>
				<!-- <basic-info></basic-info> -->
			</div>
			<div class="bag-mian">
				<router-view></router-view>
				<!-- <Detail></Detail> -->
			</div>
			<div class="step-box">
				<!-- <step-tree></step-tree> :class="{'active':index===activeStepIndex}"-->
				<div style="height: 300px;">
					<el-steps direction="vertical" v-show="num !=1" :active="steps.active">
						<el-step :title="item.text" v-for="(item,index) in steps.step" :key="index" @click.native="jump(index)"></el-step>
					</el-steps>
					<a href="/my-bag.html" class="linkPage" style="display:block;height:100%;">
						<el-steps direction="vertical"  v-show=" num == 1" :active="steps.active">
							<el-step :title="item.text" v-for="(item,index) in steps.step" :key="index"></el-step>
						</el-steps>
					</a>
				</div>
			</div>
		</div>
	</div>
	<v-footer></v-footer>

</div>
</template>

<script>
import VHeader from '/components/header/header'
import VFooter from '/components/footer/footer'
import stepTree from '/components/steps/steps'
// import Detail from './components/detail/detail'
import BasicInfoRepay from '/components/basic-info/basic-info-repay'

export default {
	name: 'app',
	components: {
		VHeader,
		// Detail,
        VFooter,
		stepTree,
		BasicInfoRepay
	},
    data(){
        return {
			flagIndex:'',
			num:'',
			activeLiIndex:'',
			activeImg:'',
			infoItems:[
				{
					title:"账户信息",
					content:[
						{imgUrl:"/static/my-bag/img-2.png",name:"账户设置",imgUrlActive:"/static/my-bag/img-2-active.png"},
						{imgUrl:"/static/my-bag/img-3.png",name:"月账单",imgUrlActive:"/static/my-bag/img-3-active.png"},
					]
				},
				{
					title:"资金信息",
					content:[
						{imgUrl:"/static/my-bag/img-4.png",name:"存管账户",imgUrlActive:"/static/my-bag/img-4-active.png"},
						{imgUrl:"/static/my-bag/img-5.png",name:"我要充值",imgUrlActive:"/static/my-bag/img-5-active.png"},
						{imgUrl:"/static/my-bag/img-6.png",name:"我要提现",imgUrlActive:"/static/my-bag/img-6-active.png"},
						{imgUrl:"/static/my-bag/img-7.png",name:"资金记录",imgUrlActive:"/static/my-bag/img-7-active.png"},
					]
				},
				{
					title:"出借管理",
					content:[
						{imgUrl:"/static/my-bag/img-8.png",name:"散标与债转标",imgUrlActive:"/static/my-bag/img-8-active.png"},
						{imgUrl:"/static/my-bag/img-9.png",name:"债权交易",imgUrlActive:"/static/my-bag/img-9-active.png"},
						{imgUrl:"/static/my-bag/img-10.png",name:"散标工具",imgUrlActive:"/static/my-bag/img-10-active.png"},
						{imgUrl:"/static/my-bag/img-11.png",name:"固定期限产品",imgUrlActive:"/static/my-bag/img-11-active.png"},
						{imgUrl:"/static/my-bag/img-12.png",name:"新手产品",imgUrlActive:"/static/my-bag/img-12-active.png"},
						{imgUrl:"/static/my-bag/img-13.png",name:"出借统计",imgUrlActive:"/static/my-bag/img-13-active.png"},
					]
				},
				{
					title:"借款管理",
					content:[
						{imgUrl:"/static/my-bag/img-1.png",name:"基本信息",imgUrlActive:"/static/my-bag/img-1-active.png"},
						{imgUrl:"/static/my-bag/img-14.png",name:"我的借款",imgUrlActive:"/static/my-bag/img-14-active.png"},
						{imgUrl:"/static/my-bag/img-15.png",name:"还款账单",imgUrlActive:"/static/my-bag/img-15-active.png"},
					]
				},
				{
					title:"市场推广",
					content:[
						{imgUrl:"/static/my-bag/img-16.png",name:"我的优惠券",imgUrlActive:"/static/my-bag/img-16-active.png"},
						{imgUrl:"/static/my-bag/img-17.png",name:"邀请推荐",imgUrlActive:"/static/my-bag/img-17-active.png"},
					]
				},
			],
			steps:{
				step:[
					{text:"账户信息"},
					{text:"资金信息"},
					{text:"出借管理"},
					{text:"借款管理"},
					{text:"市场推广"}
				],
				active:0,
			}
        }
    },
	//  页面加载之前
	created() {},
	//  页面加载后
	// mounted() {
	//
	// },
	mounted: function () {
		if(this.num !=1){
			this.$nextTick(function () {
				window.addEventListener('scroll', this.onScroll)
			})
		}
  },
	methods:{
		showActive(infoIndex,index){
			this.activeImg = infoIndex;
			this.activeLiIndex = index;
		},
		hideActive(index){
            this.activeImg = '';
        },
		jump (index) {
			this.steps.active = index;
			// 用 class="d_jump" 添加锚点
			let jump = document.querySelectorAll('.d_jump')
			let mainHeight = document.querySelector('.bag-mian').offsetTop
			let headerHeight = document.querySelector('.headerSpecial').offsetHeight
			let initHeight = mainHeight - headerHeight ;
			let total = jump[index].offsetTop +initHeight
			let distance = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
			// 平滑滚动，时长500ms，每10ms一跳，共50跳
			let step = total / 40
			if (total > distance) {
				smoothDown()
			} else {
				let newTotal = distance - total
				step = newTotal / 40
				smoothUp()
			}
			function smoothDown () {
				if (distance < total) {
					distance += step
		　　　　　　　document.body.scrollTop = distance
					document.documentElement.scrollTop = distance
					window.pageYOffset = distance
					setTimeout(smoothDown, 10)
				} else {
					document.body.scrollTop = total
					document.documentElement.scrollTop = total
					window.pageYOffset = total
				}
			}
			function smoothUp () {
				if (distance > total) {
					distance -= step
		　　　　　　　document.body.scrollTop = distance
					document.documentElement.scrollTop = distance
					window.pageYOffset = distance
					setTimeout(smoothUp,10)
				} else {
					document.body.scrollTop = total
					document.documentElement.scrollTop = total
					window.pageYOffset = total
				}
			}
		},
		onScroll () {
	 		let scrolled = document.documentElement.scrollTop || document.body.scrollTop;
　　　 	  // 586、1063分别为第二个和第三个锚点对应的距离
　　　 	  if(this.num !=1){
				if(scrolled < 860){
					this.steps.active = 0
				}
				if (scrolled >860 && scrolled < 1150) {
					this.steps.active = 1
				}
				if (scrolled >= 1150 && scrolled < 1600) {
					this.steps.active = 2
				}
				if (scrolled >= 1600 && scrolled < 1850) {
					this.steps.active = 3
				}
				if (scrolled >= 1850) {
					this.steps.active = 4
				}
　　　 	  }
   		}
	},
	watch:{
		$route(){
            this.num = this.$route.params.num;
			this.steps.active = this.$route.params.id;
            console.log('this.num',this.num)
			console.log('flagIndex',this.steps.active)
      }
	}
}
</script>

<style lang="less">
@import '/common/my-bag.less';
</style>
