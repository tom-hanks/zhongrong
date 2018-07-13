<template lang="html">
<div class="bag-main-detail">
	<div class="breadcrumb-wrapper">
		<el-breadcrumb separator="/">
			<el-breadcrumb-item :to="{ path: '/' }">资金管理</el-breadcrumb-item>
			<el-breadcrumb-item>我要提现</el-breadcrumb-item>
		</el-breadcrumb>
	</div>
	<div class="detail-container">
		<div class="monthly-bill">
			<h3>我要提现</h3>
		</div>
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
		  			  <span class="title">提现金额：</span>
		  			  <input type="text" name="" value="" placeholder="请输入提现金额：">
		  			  <span>元</span>
		  		  </li>
		  	  </ul>
		  	  <div class="rechargeBtn">
		  		  <button type="button" name="button">申请提现</button>
				  <span>到账时间：预计2017-12-28 24点前到账（免费）</span>
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
	</div>
</div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
