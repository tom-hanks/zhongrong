<template lang="html">
<div class="register-wrapper">
	<div class="register-box">
		<div class="register-img">
			<img src="/static/common/login-logo.png" alt="">
		</div>
		<div class="register-container">
			<div class="content">
				<h2>五福贷会员注册</h2>
				<div class="registerContent">
			  		<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm"  class="register-ruleForm">
			  		  <el-form-item prop="username">
			  		    <el-input type="text" v-model="ruleForm.username" auto-complete="off" placeholder="请输入手机号">
			  				<i slot="prefix" class="el-input__icon icon icon-phone"></i>
			  			</el-input>
			  		  </el-form-item>
			  		  <el-form-item prop="password">
			  		    <el-input type="password" v-model="ruleForm.password" auto-complete="off" placeholder="请输入密码">
			  				<i slot="prefix" class="el-input__icon icon icon-password"></i>
			  			</el-input>
			  		  </el-form-item>
					  <el-form-item prop="password">
			  		    <el-input type="password" v-model="ruleForm.password" auto-complete="off" placeholder="请输入图形验证码" class="dynamic-code">
			  				<i slot="prefix" class="el-input__icon icon icon-key"></i>
			  			</el-input>
			            <img src="/static/login/verification.png" alt="">
			  		  </el-form-item>
					  <el-form-item prop="password">
			  		    <el-input type="password" v-model="ruleForm.password" auto-complete="off" placeholder="请输入验证码" class="dynamic-code">
			  				<i slot="prefix" class="el-input__icon icon icon-code"></i>
			  			</el-input>
			            <!-- <el-button type="" class="send-code">发送验证码</el-button> -->
						<el-button type="" class="send-code" @click="getCode" v-show="showCode">发送验证码</el-button>
						<el-button type="" class="send-code"  v-show="!showCode">{{count}}s</el-button>
			  		  </el-form-item>
			  		  <el-form-item>
			  		    <el-button type="" @click.native.prevent="submitForm('ruleForm')" class="btn-register">注册</el-button>
			  		  </el-form-item>
			  		</el-form>
			    </div>
			</div>
			<div class="other-register">
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
export default {
	data() {
		return {
			ruleForm: {
				username: '',
				password: '',
				tips:false
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
	methods: {
		submitForm(formName) {
			// this.$refs[formName].validate((valid) => {
			//   if (valid) {
			//     alert('submit!');
			//   } else {
			//     console.log('error submit!!');
			//     return false;
			//   }
			// });
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
.register-wrapper{
	background: url(/static/login/bj.png) no-repeat;
	width: 100%;
	height: 955px;
	background-repeat: no-repeat;
	background-position: 50%;
	.register-box{
		position: relative;
		max-width: 1100px;
		margin:0 auto;
		.register-img{
			padding:30px 0;
		}
		.register-container{
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
				h2{
					text-align: center;
					font-size:18px;
					color: #666;
					padding:40px 0 30px 0;
				}
					.registerContent{
						max-width: 340px;
						margin:0px auto 0 auto;
						.el-form-item{
							margin-bottom:20px;
							.el-input{
								input{
									border-radius: 0px;
									padding-left: 42px;
									height:40px;
									line-height:40px;
									.el-input__suffix{
										// display: none;
									}
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
							.btn-register{
								// background:url(/static/login/btn-bg.png) no-repeat;
								width: 100%;
								color:#fff;
								font-size:16px;
								letter-spacing: 5px;
							}
							.dynamic-code{
								width:225px;
							}
							img{
								vertical-align: middle;
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
			.other-register{
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
