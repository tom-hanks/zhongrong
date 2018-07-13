<template lang="html">
<div class="login-wrapper">
	<div class="login-box">
		<div class="login-img">
			<img src="/static/common/login-logo.png" alt="">
		</div>
		<div class="login-container">
			<div class="content">
				<div class="scan-login" @click="showLoginStyle()">
					<img src="/static/login/scan.png" alt="" v-show="showMode">
					<img src="/static/login/scan-1.png" alt="" v-show="!showMode">
				</div>
				<div class="" v-show="showMode">
					<div class="login-tabs">
						<el-tabs v-model="activeName" @tab-click="handleClick">
						    <el-tab-pane label="密码登录" name="first">
								<div class="loginContent">
							  		<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm"  class="login-ruleForm">
							  		  <el-form-item prop="username">
							  		    <el-input type="text" v-model="ruleForm.username" auto-complete="off" placeholder="请输入用户名/手机号">
							  				<i slot="prefix" class="el-input__icon icon icon-user"></i>
							  			</el-input>
							  		  </el-form-item>
							  		  <el-form-item prop="password">
							  		    <el-input type="password" v-model="ruleForm.password" auto-complete="off" placeholder="请输入登录密码">
							  				<i slot="prefix" class="el-input__icon icon icon-password"></i>
							  			</el-input>
							  		  </el-form-item>
							  		  <el-form-item>
							  		    <el-button type="" @click.native.prevent="submitForm('ruleForm')" class="btn-login">登录</el-button>
							  		  </el-form-item>
							  		  <el-checkbox v-model="checked"  class="remember">记住密码</el-checkbox>
							  		  <div class="forget-register">
							  			  <a href="">忘记密码</a>
							  			  <a href="">立即注册</a>
							  		  </div>
							  		</el-form>
							    	</div>
							</el-tab-pane>
						    <el-tab-pane label="手机动态码登录" name="second">
								<div class="loginContent">
							  		<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm"  class="login-ruleForm">
							  		  <el-form-item prop="phone">
							  		    <el-input type="text" v-model="ruleForm.phone" auto-complete="off" placeholder="请输入手机号" >
							  				<i slot="prefix" class="el-input__icon icon icon-phone"></i>
							  			</el-input>
							  		  </el-form-item>
							  		  <el-form-item prop="password">
							  		    <el-input type="password" v-model="ruleForm.password" auto-complete="off" placeholder="请输入动态密码" class="dynamic-code">
							  				<i slot="prefix" class="el-input__icon icon icon-password"></i>
							  			</el-input>
							            <!-- <el-button type="" class="send-code">发送验证码</el-button> -->
										<el-button type="" class="send-code" @click="getCode" v-show="showCode">发送验证码</el-button>
			  			            	<el-button type="" class="send-code"  v-show="!showCode">{{count}}s</el-button>
							  		  </el-form-item>
							  		  <el-form-item>
							  		    <el-button type="" @click.native.prevent="submitForm('ruleForm')" class="btn-login">登录</el-button>
							  		  </el-form-item>
							  		  <el-checkbox v-model="checked"  class="remember">记住密码</el-checkbox>
							  		  <div class="forget-register">
							  			  <a href="">忘记密码</a>
							  			  <a href="">立即注册</a>
							  		  </div>
							  		</el-form>
							    </div>
							</el-tab-pane>
						</el-tabs>
					</div>
				</div>
				<div class="loginContent" v-show="!showMode">
					<div class="scan-box">
						<h3>手机扫码安全登录</h3>
						<div class="scan-img">
							<img src="/static/login/phone-scan.png" alt="">
						</div>
						<p>App扫描二维码登录账户</p>
						<p>您还没有五福贷账号,<a>免费注册</a></p>
					</div>
			    </div>
			</div>
			<div class="other-login">
				<ul>
					<li>
						<i class="icon icon-qq"></i><br />
						<a>qq登录</a>
					</li>
					<li>
						<i class="icon icon-weixin"></i><br />
						<a>微信登录</a>
					</li>
					<li>
						<i class="icon icon-weibo"></i><br />
						<a>微博登录</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>
</template>

<script>
// import scan from '../components/scan/scan.vue'
export default {
	data(){
		return{
			activeName: 'first',
			showMode:true,
			ruleForm: {
				username: '',
				password: '',
				phone: '',
			},
			rules: {
				username: [{
					required: true,
					message: '请输入账号',
					trigger: 'blur'
				}, ],
				password: [{
					required: true,
					message: '请输入密码',
					trigger: 'blur'
				}, ]
			},
			checked: false,
			showCode:true,
			count: '',
   			timer: null,
		}
	},
	methods:{
		showLoginStyle(){
			this.showMode = !this.showMode;
		},
		handleClick(tab, event) {
        	console.log(tab, event);
      	},
		getCode(){
			console.log(123123)
     		const TIME_COUNT = 60;
		    if (!this.timer) {
				console.log(11111)
		        this.count = TIME_COUNT;
		        this.showCode = false;
		        this.timer = setInterval(() => {
		            if (this.count > 0 && this.count <= TIME_COUNT) {
		                this.count--;
		            }else {
		                this.showCode = true;
		                clearInterval(this.timer);
		                this.timer = null;
		            }
		        }, 1000)
		      }
   		}
	}
}
</script>

<style lang="less">
.login-wrapper{
	background: url(/static/login/bj.png) no-repeat;
	width: 100%;
	height: 955px;
	background-repeat: no-repeat;
	background-position: 50%;
	.login-box{
		position: relative;
		max-width: 1100px;
		margin:0 auto;
		.login-img{
			padding:30px 0;
		}
		.login-container{
			position: absolute;
			z-index: 10;
			width: 490px;
			min-height: 520px;
			margin: auto;
			top: 142px;
			right:0;
			.content{
				min-height:400px;
				background: hsla(0,0%,100%,.53);
				box-shadow: 0px 0px 24px 2px rgba(0,0,0,0.1);
				-webkit-box-shadow: 0px 0px 24px 2px rgba(0,0,0,0.1);
				position:relative;
				.scan-login{
					position: absolute;
					width: auto;
					top:2px;
					right:2px;
					cursor: pointer;
					z-index: 2;
				}
				.login-tabs{
					.el-tabs{
						.el-tabs__header{
							margin:0;
							.el-tabs__nav-wrap{
								.el-tabs__nav{
									.el-tabs__active-bar{
										background-color:#a20d0d;
									}
									.el-tabs__item{
										width:217px;
										text-align: center;
										padding:0;
										height:70px;
										line-height:70px;
										color:#666;
										font-size:18px;
										&.is-active{
											color: #1f2d5e;
											// border-bottom: 2px solid #a20d0d;
										}
									}
								}
							}
						}
						.el-tabs__content{
							.el-tab-pane{
								max-width: 340px;
    							margin: 70px auto 0 auto;
								.loginContent{
									max-width: 340px;
									margin:70px auto 0 auto;
									.el-form-item{
										margin-bottom:30px;
										.el-input{
											input{
												border-radius: 0px;
												padding-left: 42px;
												height:40px;
												line-height: 40px;
											}
											.el-input__prefix{
												left:12px;
												i{
													margin-top:10px;
													&.icon-phone{
														margin-top:7px;
													}
												}

											}
										}
										.btn-login{
											// background:url(/static/login/btn-bg.png) no-repeat;
											width: 100%;
											color:#fff;
											font-size:16px;
											letter-spacing: 5px;
										}
										.dynamic-code{
											width:225px;
										}
										.send-code{
											padding:12px 16px;
											margin-left:4px;
											border:1px solid #d7112b;
											color:#d7112b;
											background:none;
											width:104px;
											&:hover{
												background-color:#fff;
											}
										}
									}
									.remember{
										span{
											color: #888;
											font-size:12px;
										}
										.el-checkbox__inner{
											width:16px;
											height:16px;
											border:1px solid #ccc;
										}
									}
									.forget-register{
										float: right;
										a{
											color: #1f2d5e;
											font-size:12px;
										}
									}
								}
							}
						}
					}
				}
			}
			.other-login{
				margin-top:12px;
				padding:20px 0 16px 0;
				background: hsla(0,0%,100%,.53);
				box-shadow: 0px 0px 24px 2px rgba(0,0,0,0.1);
				-webkit-box-shadow: 0px 0px 24px 2px rgba(0,0,0,0.1);
				ul{
					font-size:0px;
					li{
						display: inline-block;
						width: 33.33%;
						text-align: center;
						a{
							font-size:16px;
							color: #666;
							margin-top:8px;
						}
					}
				}
			}
			.scan-box{
				text-align: center;
				h3{
					padding-top:30px;
				}
				.scan-img{
					margin:46px 0 ;
				}
				p{
					color: #666;
					padding:6px 0;
					a{
						color:#d4122e;
						cursor: pointer;
					}
				}
			}
		}
	}
}
</style>
