<template>
<div id="app">
	<v-header :pageNo="2"></v-header>
	<div class="wufu-container">
		<div class="loan-wrapper">
			<div class="banner">
				<img src="/static/loan/banner.png" alt="" style="display:block;">
			</div>
			<div class="loan-container">
				<div class="product-select">
					<div class="product-form">
						<el-form ref="form" :model="form" label-width="0px">
							<el-form-item label="">
								<el-select v-model="form.region" placeholder="选择产品">
									<el-option label="佳人贷" value="佳人贷"></el-option>
									<el-option label="融卡贷" value="融卡贷"></el-option>
									<el-option label="融薪贷" value="融薪贷"></el-option>
									<el-option label="融房贷" value="融房贷"></el-option>
								</el-select>
							</el-form-item>
							<el-form-item label="">
								<el-input v-model="form.name" placeholder="请输入您的姓名"></el-input>
							</el-form-item>
							<el-form-item label="">
								<el-input v-model="form.phone" placeholder="请输入您的电话"></el-input>
							</el-form-item>
							<el-form-item label="" class="radio-box">
								<el-radio-group v-model="radioSex" @change="changeHandler">
									<el-radio label="先生">先生</el-radio>
									<el-radio label="女士">女士</el-radio>
								</el-radio-group>
								<!-- <el-radio-group v-model="radioSex" @change="changeHandler">
								    <el-radio class="radio" label="man">男</el-radio>
								    <el-radio class="radio" label="woman">女</el-radio>
								  </el-radio-group> -->
							</el-form-item>
							<el-form-item>
		  			  		    <el-input type="text" v-model="form.code" auto-complete="off" placeholder="请输入验证码" class="code">
		  			  			</el-input>
	  			            	<el-button type="" class="send-code" @click="getCode" v-show="showCode">发送验证码</el-button>
	  			            	<el-button type="" class="send-code"  v-show="!showCode">{{count}}s</el-button>
	  			  		  	</el-form-item>
							<el-form-item>
								<el-button type="primary" @click="onSubmit" class="quickApply">快速申请</el-button>
							</el-form-item>
						</el-form>

					</div>
					<div class="loan-img">
						<img src="/static/loan/left.png" alt="">
					</div>
				</div>
				<div class="product-items">
					<h2>多款产品 任您选择</h2>
					<ul>
						<li>
							<div class="">
								<img src="/static/loan/1.jpg" alt="">
							</div>
							<div class="product-title">
								<span>佳人贷</span>
							</div>
							<div class="hover-effect">
								<img src="/static/loan/1-1.png"/>
								<div class="">
									<p>户籍女性，信用卡</p>
									<p>材料齐备即享便捷借款</p>
								</div>
							</div>
						</li>
						<li>
							<div class="">
								<img src="/static/loan/2.jpg" alt="">
							</div>
							<div class="product-title">
								<span>融卡贷</span>
							</div>
							<div class="hover-effect">
								<img src="/static/loan/2-1.png"/>
								<div class="">
									<p>提供工资流水</p>
									<p>额度高，放款快</p>
								</div>
							</div>
						</li>
						<li>
							<div class="">
								<img src="/static/loan/3.jpg" alt="">
							</div>
							<div class="product-title">
								<span>融薪贷</span>
							</div>
							<div class="hover-effect">
								<img src="/static/loan/3-1.png"/>
								<div class="">
									<p>凭公积金申请</p>
									<p>利率低，省钱，省心</p>
								</div>
							</div>
						</li>
						<li>
							<div class="">
								<img src="/static/loan/4.jpg" alt="">
							</div>
							<div class="product-title">
								<span>融房贷</span>
							</div>
							<div class="hover-effect">
								<img src="/static/loan/4-1.png"/>
								<div class="">
									<p>有房即可轻松申请</p>
									<p>到款快，无抵押</p>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<v-footer></v-footer>

</div>
</template>

<script>
import VHeader from '../../components/header/header'
import VFooter from '../../components/footer/footer'


export default {
	name: 'app',
    data(){
        return {
			form: {
				name: '',
				phone:'',
				code:'',
				radioSex:'先生',
	        },
			radioSex:'先生',
			showCode:true,
			count: '',
   			timer: null,
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
	},
	methods: {
      	onSubmit() {
        	console.log('submit!');
		},
		changeHandler(value) {
            console.log('改变之后的值是:' + value)
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
.loan-container{
	max-width:1200px;
	margin:0 auto;
	.product-select{
		background:url(/static/loan/bg.png) no-repeat;
		position: relative;
		margin-top:20px;
		>div{
			display: inline-block;
			&.product-form{
				width:330px;
				height:400px;
				background: #fff;
				margin:25px 0 25px 48px;
				padding:60px 0;
				box-sizing: border-box;
				box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, 0.1);
			    -webkit-box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, 0.1);
			    -moz-box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, 0.1);
				.el-form-item{
					text-align:center;
					margin-bottom:10px;
					.el-form-item__content{
						.el-select{
							width:260px;
							height:40px;
							.el-input{
								.el-input__inner{
									&:focus{
										border-color:#45b036!important;
									}
								}
								&.is-focus{
									.el-input__inner{
										border: 1px solid #45b036;
									}
								}

							}
						}
						.el-input{
							width:260px;
							input{
								height:40px;
								line-height: 40px;
								&:focus{
									border-color:#45b036!important;
								}
							}
							&.code{
								width:148px;
								span{
									color:#45b036;
								}
							}
						}
						.send-code{
							background:#fff;
							border:1px solid #45b036;
							border-radius: 4px;
							height:40px;
							width:106px;
							margin-left:0;
							padding:0;
							span{
								color:#45b036;
							}
						}
						.quickApply{
							width:260px;
							height:40px;
							margin-top:10px;
							background:url(/static/loan/button-bg.png)
						}
					}
					&.radio-box{
						text-align: left;
						padding-left:45px;
						.el-radio__input{
							&.is-checked{
								.el-radio__inner{
									border-color: #45b036;
									background: #45b036;
									&:hover{
										border-color:#45b036;
									}
								}
							}
							.el-radio__inner{
								&:hover{
									border-color:#45b036;
								}
							}
						}
						.el-radio__label{
							color:#999999;
						}
					}
				}
			}
			&.loan-img{
				position: absolute;
				bottom:0;
				margin-left:50px;
			}
		}
	}
	.product-items{
		padding:60px 0 38px 0;
		h2{
			font-size:26px;
			color:#999;
		}
		ul{
			font-size:0;
			li{
				width:-moz-calc(~"50% - (10px)");
				width:-webkit-calc(~"50% - (10px)");
				width: calc(~"50% - (10px)");
				display:inline-block;
				margin-top:20px;
				vertical-align: top;
				cursor:pointer;
				position:relative;
				&:nth-child(2n+1){
					margin-right:20px;
				}
				.product-title{
					position:absolute;
					top:0;
					right:0;
					width:43%;
					height:100%;
					z-index:2;
					text-align: center;
					margin-top:40px;
					span{
						font-size:22px;
						position: relative;
						color:#f96571;
						&:before{
							position: absolute;
							display: block;
							content: '';
							width: 50px;
							height: 2px;
							background: #f96571;
							left: -55px;
							top: 13px;
						}
						&:after{
							position: absolute;
							display: block;
							content: '';
							width: 50px;
							height: 2px;
							background: #f96571;
							right: -55px;
							top: 13px;
						}
					}
				}
				.hover-effect{
					display:none;
					position:absolute;
					top:0;
					right:0;
					width:43%;
					height:100%;
					z-index:1;
					background:rgba(0,0,0,.65);
					text-align: center;
					img{
						margin-top:60%;
					}
					>div{
						margin-top:20px;
						p{
							font-size:14px;
							color:#fff;
							line-height: 28px;
						}
					}
				}
				&:nth-child(2){
					.product-title{
						span{
							color:#2095d9;
							&:before{
								background: #2095d9;
							}
							&:after{
								background: #2095d9;
							}
						}
					}
				}
				&:nth-child(3){
					.product-title{
						span{
							color:#fcce3e;
							&:before{
								background: #fcce3e;
							}
							&:after{
								background: #fcce3e;
							}
						}
					}
				}
				&:nth-child(4){
					.product-title{
						span{
							color:#bc9eff;
							&:before{
								background: #bc9eff;
							}
							&:after{
								background: #bc9eff;
							}
						}
					}
				}
				&:hover{
					.hover-effect{
						display:block;
					}
				}
			}
		}
	}
}
.el-select-dropdown__item.selected{
	color: #45b036;
}
</style>
