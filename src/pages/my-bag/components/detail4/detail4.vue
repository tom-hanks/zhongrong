<template lang="html">
<div class="bag-main-detail">
	<div class="breadcrumb-wrapper">
		<el-breadcrumb separator="/">
			<el-breadcrumb-item :to="{ path: '/' }">资金管理</el-breadcrumb-item>
			<el-breadcrumb-item>我要充值</el-breadcrumb-item>
		</el-breadcrumb>
	</div>
	<div class="detail-container">
		<div class="detail-tabs-box">
			<el-tabs v-model="activeName" @tab-click="handleClick">
			    <el-tab-pane label="快捷充值" name="first">
					<div class="bill-container">
						<div class="recharge">
					  	<div class="recharge-container">
					  	  <ul>
					  		  <li>
					  			  <span class="title">可用余额：</span>
					  			  <span><b>888.00</b>元</span>
					  		  </li>
					  		  <li>
					  			  <span class="title">银行卡：</span>
					  			  <div class="bank-content">
					  				  <div class="bank-img">
					  					  <img src="/static/my-bag/bank-img.png" alt="" />
					  					  <span>**** **** *** 0803</span>
					  				  </div>
					  				  <div class="useabled">
					  					  <span>单笔限额2万元</span>
					  					  <span>当日限额10万元</span>
					  					  <a href="#">重新绑定</a>
					  				  </div>
					  			  </div>
					  		  </li>
					  		  <li>
					  			  <span class="title">充值金额：</span>
					  			  <input type="text" name="" value="" placeholder="请输入充值金额">
					  			  <span>元</span>
					  		  </li>
					  	  </ul>
					  	  <div class="rechargeBtn">
					  		  <button type="button" name="button">立即充值</button>
					  	  </div>
					  	</div>
					  	<div class="reminder">
					  		<p>温馨提示：</p>
					  		<ul>
					  			<li>
					  				1.请注意您的银行卡限制，以免造成不便
					  			</li>
					  			<li>
					  				2.严禁洗钱，信用卡套现，虚假交易行为，一经发现并确认，将终止该账户的使用。
					  			</li>
					  			<li>
					  				3.若充值金额没有即时到账，请您联系<a>在线客服</a>
					  			</li>
					  			<li>
					  				4.网银充值常见问题解答，详见<a>客服中心</a>
					  			</li>
					  		</ul>
					  	</div>
					    </div>
					</div>
				</el-tab-pane>
			    <el-tab-pane label="网银充值" name="second">
					<div class="bill-container">
						<div class="recharge">
					  	<div class="recharge-container">
					  	  <ul>
					  		  <li>
					  			  <span class="title">可用余额：</span>
					  			  <span><b>888.00</b>元</span>
					  		  </li>
					  		  <li>
					  			  <span class="title">银行卡：</span>
					  			  <div class="bank-content bank-content1">
					  				  <ul>
					  				  	<li v-for="(item,index) in bankImg" :key="index" @click="selectBank(index)" :class="{'active':index===addClassIndex}" v-show=" index < 9 || showFlag">
					  						<a>
					  							<img :src="item.imgLink" alt="">
					  						</a>
					  					</li>
					  					<li>
					  						<p @click="showMore()">{{bankText}}<i class="icon icon-more-bottom"></i></p>
					  					</li>
					  				  </ul>
					  			  </div>
					  		  </li>
					  		  <li>
					  			  <span class="title">充值金额：</span>
					  			  <input type="text" name="" value="" placeholder="请输入充值金额">
					  			  <span>元</span>
					  		  </li>
					  	  </ul>
					  	  <div class="rechargeBtn">
					  		  <button type="button" name="button">立即充值</button>
					  	  </div>
					  	</div>
					  	<div class="reminder">
					  		<p>温馨提示：</p>
					  		<ul>
					  			<li>
					  				1.请注意您的银行卡限制，以免造成不便
					  			</li>
					  			<li>
					  				2.严禁洗钱，信用卡套现，虚假交易行为，一经发现并确认，将终止该账户的使用。
					  			</li>
					  			<li>
					  				3.若充值金额没有即时到账，请您联系<a>在线客服</a>
					  			</li>
					  			<li>
					  				4.网银充值常见问题解答，详见<a>客服中心</a>
					  			</li>
					  		</ul>
					  	</div>
					    </div>
					</div>
				</el-tab-pane>
			</el-tabs>
		</div>
	</div>
</div>
</template>

<script>
export default {
	data(){
		return{
			activeName: 'first',
			showFlag:false,
			addClassIndex:'',
			bankText:'更多银行',
			bankImg:[
				{imgLink:"/static/my-bag/bank-1.png"},
				{imgLink:"/static/my-bag/bank-2.png"},
				{imgLink:"/static/my-bag/bank-3.png"},
				{imgLink:"/static/my-bag/bank-4.png"},
				{imgLink:"/static/my-bag/bank-5.png"},
				{imgLink:"/static/my-bag/bank-6.png"},
				{imgLink:"/static/my-bag/bank-7.png"},
				{imgLink:"/static/my-bag/bank-8.png"},
				{imgLink:"/static/my-bag/bank-9.png"},
				{imgLink:"/static/my-bag/bank-1.png"},
				{imgLink:"/static/my-bag/bank-2.png"},
				{imgLink:"/static/my-bag/bank-3.png"},
				{imgLink:"/static/my-bag/bank-4.png"},
				{imgLink:"/static/my-bag/bank-5.png"},
				{imgLink:"/static/my-bag/bank-6.png"},
				{imgLink:"/static/my-bag/bank-7.png"},
				{imgLink:"/static/my-bag/bank-8.png"},
				{imgLink:"/static/my-bag/bank-9.png"},
			]
		}
	},
	methods: {
		handleClick(tab, event) {
			console.log(tab, event);
		},
		showMore(){
			this.showFlag = !this.showFlag;
			if(this.bankText =='更多银行' ){
				this.bankText = '收起'
			}else{
				this.bankText = '更多银行'
			}
		},
		selectBank(index){
			this.addClassIndex = index;
		}
	},
}
</script>

<style lang="css">
</style>
