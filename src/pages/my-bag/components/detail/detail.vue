<template lang="html">
	<div class="bag-main-list">
		<div class="bag-main-items d_jump" v-for="(item,index) in infoItems" :key="index">
			<h4>{{item.title}}</h4>
			<ul>
				<li v-for="(info,infoIndex) in item.content" :key="infoIndex" @mouseenter="showActive(infoIndex,index)" @mouseleave="hideActive()">
					<router-link :to="{ path:info.path }">
						<p>
							<img :src="info.imgUrl" alt="">
							<img :src="info.imgUrlActive" alt="" class="active-img" v-show="activeImg === infoIndex && activeLiIndex === index">
						</p>
						<p>{{info.name}}</p>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name:'detail',
	data(){
		return {
			activeLiIndex:'',
			activeImg:'',
			infoItems:[
				{
					title:"账户信息",
					content:[
						{imgUrl:"/static/my-bag/img-2.png",name:"账户设置",imgUrlActive:"/static/my-bag/img-2-active.png",path:"detail1/1/0"},
						// {imgUrl:"/static/my-bag/img-3.png",name:"月账单",imgUrlActive:"/static/my-bag/img-3-active.png",path:"detail2/1/0"},
					]
				},
				{
					title:"资金信息",
					content:[
						{imgUrl:"/static/my-bag/img-4.png",name:"存管账户",imgUrlActive:"/static/my-bag/img-4-active.png",path:"detail3/1/1"},
						{imgUrl:"/static/my-bag/img-5.png",name:"我要充值",imgUrlActive:"/static/my-bag/img-5-active.png",path:"detail4/1/1"},
						{imgUrl:"/static/my-bag/img-6.png",name:"我要提现",imgUrlActive:"/static/my-bag/img-6-active.png",path:"detail5/1/1"},
						{imgUrl:"/static/my-bag/img-7.png",name:"资金记录",imgUrlActive:"/static/my-bag/img-7-active.png",path:"detail6/1/1"},
					]
				},
				{
					title:"出借管理",
					content:[
						{imgUrl:"/static/my-bag/img-8.png",name:"散标与债转标",imgUrlActive:"/static/my-bag/img-8-active.png",path:"detail7/1/2"},
						// {imgUrl:"/static/my-bag/img-9.png",name:"债权交易",imgUrlActive:"/static/my-bag/img-9-active.png",path:"detail8/1/2"},
						{imgUrl:"/static/my-bag/img-10.png",name:"散标工具",imgUrlActive:"/static/my-bag/img-10-active.png",path:"detail9/1/2"},
						// {imgUrl:"/static/my-bag/img-11.png",name:"固定期限产品",imgUrlActive:"/static/my-bag/img-11-active.png",path:"detail10/1/2"},
						// {imgUrl:"/static/my-bag/img-12.png",name:"新手产品",imgUrlActive:"/static/my-bag/img-12-active.png",path:"detail11/1/2"},
						// {imgUrl:"/static/my-bag/img-13.png",name:"出借统计",imgUrlActive:"/static/my-bag/img-13-active.png",path:"detail12/1/2"},
					]
				},
				{
					title:"借款管理",
					content:[
						{imgUrl:"/static/my-bag/img-1.png",name:"基本信息",imgUrlActive:"/static/my-bag/img-1-active.png",path:"detail13/1/3"},
						{imgUrl:"/static/my-bag/img-14.png",name:"上传资料",imgUrlActive:"/static/my-bag/img-14-active.png",path:"detail14/1/3"},
						{imgUrl:"/static/my-bag/img-14.png",name:"我的借款",imgUrlActive:"/static/my-bag/img-14-active.png",path:"detail15/1/3"},
						{imgUrl:"/static/my-bag/img-15.png",name:"我的还款",imgUrlActive:"/static/my-bag/img-15-active.png",path:"detail16/1/3"},
					]
				},
				// {
				// 	title:"市场推广",
				// 	content:[
				// 		{imgUrl:"/static/my-bag/img-16.png",name:"我的优惠券",imgUrlActive:"/static/my-bag/img-16-active.png",path:"detail16/1/4"},
				// 		{imgUrl:"/static/my-bag/img-17.png",name:"邀请推荐",imgUrlActive:"/static/my-bag/img-17-active.png",path:"detail17/1/4"},
				// 	]
				// },
			]
        }
	},
	methods:{
		showActive(infoIndex,index){
			this.activeImg = infoIndex;
			this.activeLiIndex = index;
		},
		hideActive(index){
            this.activeImg = '';
        }
	},
}
</script>

<style lang="css">
</style>
