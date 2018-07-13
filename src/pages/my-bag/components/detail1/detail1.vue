<template lang="html">
<div class="bag-main-detail">
	<div class="breadcrumb-wrapper">
		<el-breadcrumb separator="/">
			<el-breadcrumb-item :to="{ path: '/' }">账户信息</el-breadcrumb-item>
			<el-breadcrumb-item>账户设置</el-breadcrumb-item>
		</el-breadcrumb>
	</div>
	<div class="detail-container">
		<div class="">
			<h3>账户设置</h3>
			<ul class="account-box">
				<li class="adopt">
					<a href="#" class="float-clearfixed">
						<div class="account-left">
							<span class="small-icon"><i class="icon icon-idcard"></i></span>
							<span class="account-name">身份认证</span>
							<span class="account-descript">用于提升安全性和信用分，认证后不能修改。</span>
						</div>
						<div class="account-right">
							<p>通过认证</p>
						</div>
					</a>
				</li>
				<li>
					<a href="#" class="float-clearfixed">
						<div class="account-left">
							<span class="small-icon"><i class="icon icon-phone1"></i></span>
							<span class="account-name">身份认证</span>
							<span class="account-descript">用于提升安全性和信用分，认证后不能修改。</span>
						</div>
						<div class="account-right">
							<p>立即绑定</p>
						</div>
					</a>
				</li>
				<li>
					<a href="#" class="float-clearfixed">
						<div class="account-left">
							<span class="small-icon"><i class="icon icon-mail"></i></span>
							<span class="account-name">身份认证</span>
							<span class="account-descript">用于提升安全性和信用分，认证后不能修改。</span>
						</div>
						<div class="account-right">
							<p>立即绑定</p>
						</div>
					</a>
				</li>
				<li>
					<a href="#" class="float-clearfixed">
						<div class="account-left">
							<span class="small-icon"><i class="icon icon-password-red"></i></span>
							<span class="account-name">身份认证</span>
							<span class="account-descript">用于提升安全性和信用分，认证后不能修改。</span>
						</div>
						<div class="account-right">
							<p>修改</p>
						</div>
					</a>
				</li>
				<li>
					<a href="#" class="float-clearfixed">
						<div class="account-left">
							<span class="small-icon"><i class="icon icon-account"></i></span>
							<span class="account-name">身份认证</span>
							<span class="account-descript">用于提升安全性和信用分，认证后不能修改。</span>
						</div>
						<div class="account-right">
							<p>立即开通</p>
						</div>
					</a>
				</li>
				<li>
					<a href="#" class="float-clearfixed">
						<div class="account-left">
							<span class="small-icon"><i class="icon icon-msg"></i></span>
							<span class="account-name">身份认证</span>
							<span class="account-descript">用于提升安全性和信用分，认证后不能修改。</span>
						</div>
						<div class="account-right">
							<p>立即认证</p>
						</div>
					</a>
				</li>
			</ul>
		</div>
		<div class="associated-account">
			<h3>第三方关联账户</h3>
			<ul>
				<li>
					<i class="icon icon-qq"></i><br>
					<a>立即关联</a>
				</li>
				<li class="associated">
					<i class="icon icon-weixin"></i><br>
					<a>已关联</a>
				</li>
				<li>
					<i class="icon icon-weibo"></i><br>
					<a>立即关联</a>
				</li>
			</ul>
		</div>
	</div>
</div>
</template>

<script>
export default {
	data(){
		return{
			// 用来判断是否已经验证
			isAdopt:''
		}
	}
}
</script>

<style lang="css">
</style>
