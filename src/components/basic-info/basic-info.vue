<template lang="html">
<div class="basic-wrapper">
	<div class="basic-info">
		<div class="person-info-container float-clearfixed">
			<div class="person-left float-clearfixed">
				<div class="personal-img">
					<div class="">
						<img src="/static/my-bag/head.png" alt="">
						<div class="change-img">
							<span>点击更换</span>
						</div>
					</div>
					<p>某某某<i class="icon icon-grade"></i></p>
				</div>
				<div class="personal-amount">
					<div class="available-credit float-clearfixed">
						<span class="title">可用额度：</span>
						<span class="worth">999,999,999元</span>
						<div class="credit-btn">
							<a href="#" class="recharge">充值</a>
							<a href="#" class="reflect">提现</a>
						</div>
					</div>
					<div class="safe-grade float-clearfixed">
						<span class="title">安全等级：</span>
						<span class="grade">普通</span>
						<div class="worth">
							<el-progress :percentage="70"></el-progress>
						</div>
					</div>
				</div>
			</div>
			<div class="person-right">
				<div class="">
					<span class="title">积分：</span>
					<div class="">
						<span>100000</span>
						<a href="#" class="exchange">兑换</a>
					</div>
				</div>
				<div class="credit-box">
					<span class="title">信用认证：</span>
					<div class="">
						<span class="credit"><i class="icon icon-person1"></i></span>
						<span class="credit"><i class="icon icon-person2"></i></span>
						<span class="credit"><i class="icon icon-person3"></i></span>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="basic-asset float-clearfixed">
		<div class="total-assets">
			<p><i class="icon icon-total-assets"></i>总资产(元)</p>
			<p>211,000,000</p>
		</div>
		<div class="income">
			<p><i class="icon icon-income"></i>待收收益(元)</p>
			<p>211,000,000</p>
		</div>
		<div class="principal">
			<p><i class="icon icon-principal"></i>待收本金(元)</p>
			<p>211,000,000</p>
		</div>
	</div>
</div>
</template>

<script>
export default {
    name:'basic-info'

}
</script>

<style lang="less">
.basic-wrapper{
	border:1px solid #e3e3e3;
	margin-top:15px;
	padding:36px 50px;
	.basic-info{
		padding-bottom:32px;
		.person-info-container{
			>div{
				float:left;
				&.person-left{
					width:65%;
					border-right: 1px solid #dcdcdc;
					box-sizing: border-box;
					position: relative;
					>div{
						float: left;
					}
					.personal-img{
						text-align: center;
						div{
							position:relative;
							cursor: pointer;
							img{
								width:100px;
								height:100px;
								border-radius: 50%;
							}
							.change-img{
								display: none;
								position: absolute;
								width: 100%;
								height: 100%;
								background: rgba(0,0,0,.5);
								top: -2px;
								left: 0;
								border-radius: 50%;
								text-align: center;
								line-height: 100px;
								span{
									color:#fff;
								}
							}
							&:hover{
								.change-img{
									display: block;
								}
							}
						}
						p{
							font-size:18px;
							line-height: 20px;
							margin-top:8px;
							i{
								vertical-align: middle;
								margin-left: 5px;
							}
						}
						&:hover{
							img{
								// background: #000;
							}
						}
					}
					.personal-amount{
						padding:0 60px;
						>div{
							margin-top:25px;
							span{
								line-height:40px;
								float: left;
							}
							.worth{
								color:#d5041f;
								font-size:20px;
								padding-left:34px;
								line-height: 40px;
								float:left;
								min-width:314px;
								// .el-progress{
								// 	border:1px solid red;
								// 	line-height: 40px;
								// 	.el-progress-bar{
								// 		padding-right:100px;
								// 	}
								// }
								.el-progress{
									line-height: 40px;
									.el-progress-bar{
										.el-progress-bar__outer{
											max-width:314px;
											.el-progress-bar__inner{
												background: -ms-linear-gradient(left, #6350c7, #ea7577);
												background: -moz-linear-gradient(left, #6350c7, #ea7577);
												// background-color: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#6350c7), to(#f140f8));
												background: -o-linear-gradient(left, #6350c7, #ea7577);
												background: -webkit-linear-gradient(left, #6350c7, #ea7577);
											}
										}
									}
									.el-progress__text{
										display: none;
									}
								}
							}
							.grade{
								font-size:14px;
								color:#d5041f;
								float:right;
								margin-left:34px;
							}
							.credit-btn{
								position: absolute;
								right:60px;
								top:20px;
								a{
									height:40px;
									width:88px;
									line-height: 40px;
									text-align: center;
									border-radius: 4px;
									&.recharge{
										background:#d5041f;
										color:#fff;
										margin-right:8px;
									}
									&.reflect{
										border:1px solid #d5041f;
										color:#d5041f;
										background:#fff;
									}
								}
							}
							&.safe-grade{
								// margin-top:20px;
							}
						}
					}
				}
				&.person-right{
					width:35%;
					margin-top:25px;
					>div{
						margin-left:60px;
						line-height:40px;
						.title{
							width:70px;
						}
						>div{
							display: inline-block;
							width: 162px;
							padding-left:20px;
							.exchange{
								width:52px;
								height:24px;
								line-height:24px;
								border:1px solid #d5041f;
								color:#d5041f;
								border-radius: 4px;
								text-align: center;
								float: right;
								// margin-right: 70px;
								margin-top: 8px;
							}

						}
						&.credit-box{
							margin-top:20px;
							.credit{
								margin-right:20px;
								i{
									vertical-align: middle;
								}
								&:last-child{
									margin-right:0;
								}
							}
						}
					}
				}
			}
		}
	}
	.basic-asset{
		padding-top:32px;
		border-top:1px solid #dcdcdc;
		>div{
			float:left;
			font-size:16px;
			color:#999;
			border-left:1px solid #dcdcdc;
			box-sizing: border-box;
			text-align: center;
			>p{
				line-height:20px;
				i{
					vertical-align: middle;
					margin-right:10px;
				}
				&:nth-child(2){
					margin-top:30px;
					font-size:22px;
					color:#333;
				}
			}
			&.total-assets{
				width:26%;
				border-left:none;
				text-align: left;
			}
			&.income{
				width:39%;
			}
			&.principal{
				width:35%;
			}
		}
	}
}
</style>
