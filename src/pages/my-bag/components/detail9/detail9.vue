<template lang="html">
<div class="bag-main-detail">
	<div class="breadcrumb-wrapper">
		<el-breadcrumb separator="/">
			<el-breadcrumb-item :to="{ path: '/' }">出借管理</el-breadcrumb-item>
			<el-breadcrumb-item>散标管理</el-breadcrumb-item>
		</el-breadcrumb>
	</div>
	<div class="detail-container">
		<div class="detail-tabs-box">
			<el-tabs v-model="activeName" @tab-click="handleClick">
			    <el-tab-pane label="自动投标工具" name="first">
					<div class="bill-container">
						<div class="auto-box">
					    	<ul>
					    		<li>
					  			<p class="count">¥11,888,888.67</p>
					  			<p class="text">累计投标金额(元)</p>
					  		</li>
					    		<li>
					  			<p class="count">11,888</p>
					  			<p class="text">累计投标笔数(笔)</p>
					  		</li>
					    		<li>
					  			<p class="count">62,877</p>
					  			<p class="text">当前开启人数(人)</p>
					  		</li>
					    	</ul>
					  	<div class="auto-bid">
					          <h4>自动投标</h4>
					  		<ul>
					  			<li>
					  				<p class="count">¥11,888,888.67</p>
					  				<p class="text">账户保留金额(元)：<span v-show="!editFlag">{{input}}</span><span v-show="editFlag"><el-input v-model="input" placeholder="请输入内容" @blur="changeVal"></el-input></span><i class="icon icon-edit" @click="editMoney()"></i></p>
					  			</li>
					  	  		<li>
					  				<p class="count">¥11,888,888.33</p>
					  				<p class="text">可用余额(元)</p>
					  			</li>
					  		</ul>
					  	</div>
					  	<div class="">
					          <h4>系统策略</h4>
							  <div class="switchBox">
								<el-switch v-model="switchValue"  active-color="#d5041f" inactive-color="#d1d1d1" active-text="开" inactive-text="关"></el-switch>
							  </div>
					  		<ul>
					  			<li>
					  				<p class="count">¥11,888,888.67</p>
					  				<p class="text">出借金额(元)</p>
					  			</li>
					  	  		<li>
					  				<p class="count">¥11,888,888.33</p>
					  				<p class="text">已收益(元)</p>
					  			</li>
					  	  		<li>
					  				<p class="count">12%</p>
					  				<p class="text">收益率</p>
					  			</li>
					  		</ul>
					          <ul class="special">
					  			<li>
					  				<span>单笔出借金额：</span>
					                  <el-select v-model="value" placeholder="请选择">
					                      <el-option
					                        v-for="item in options"
					                        :key="item.value"
					                        :label="item.label"
					                        :value="item.value">
					                      </el-option>
					                    </el-select>
					  			</li>
					  	  		<li>
					  				<span>投标期限：</span>
					                  <el-select v-model="value1" placeholder="请选择">
					                      <el-option
					                        v-for="item in options"
					                        :key="item.value"
					                        :label="item.label"
					                        :value="item.value">
					                      </el-option>
					                    </el-select>
					  			</li>
					  	  		<li>
					  				<span>是否使用优惠券：</span>
					                  <el-select v-model="value2" placeholder="请选择">
					                      <el-option
					                        v-for="item in options"
					                        :key="item.value"
					                        :label="item.label"
					                        :value="item.value">
					                      </el-option>
					                    </el-select>
					  			</li>
					  		</ul>
					  	</div>
					      <div class="">
					          <h4>自定义策略</h4>
							  <div class="switchBox">
							  	<a>修改</a>
								<span>|</span>
								<a>删除</a>
								<el-switch v-model="switchValue2"  active-color="#d5041f" inactive-color="#d1d1d1" active-text="开" inactive-text="关"></el-switch>
							  </div>
					          <div class="strategy-img">
					              <img src="/static/my-bag/strategy.png"  @click="dialogVisible = true">
					          </div>
					      </div>
					    </div>
					</div>
				</el-tab-pane>
			    <!-- <el-tab-pane label="自动购买债权工具" name="second">
					<div class="bill-container">
						<div class="auto-box">
					        <div class="auto-box-form">
					            <el-form ref="form" :model="form" label-width="180px">
					                <el-form-item label="剩余期数：">
					                    <el-input v-model="form.residue"></el-input>
					                    <span>至</span>
					                    <el-input v-model="form.residue1"></el-input>
					                    <span>期</span>
					                </el-form-item>
					                <el-form-item label="原列表期数：">
					                    <el-input v-model="form.period"></el-input>
					                    <span>至</span>
					                    <el-input v-model="form.period1"></el-input>
					                    <span>期</span>
					                </el-form-item>
					                <el-form-item label="转让收益率：">
					                    <el-input v-model="form.rate"></el-input>
					                    <span>至</span>
					                    <el-input v-model="form.rate1"></el-input>
					                    <span>%</span>
					                </el-form-item>
					                <el-form-item label="原始利率：">
					                    <el-input v-model="form.interestRate"></el-input>
					                    <span>至</span>
					                    <el-input v-model="form.interestRate1"></el-input>
					                    <span>%</span>
					                </el-form-item>
					                <el-form-item label="转让金额：">
					                    <el-input v-model="form.transfer"></el-input>
					                    <span>至</span>
					                    <el-input v-model="form.transfer1"></el-input>
					                    <span></span>
					                </el-form-item>
					                <el-form-item label="曾逾期期数：">
					                    <el-input v-model="form.overdue"></el-input>
					                    <span>至</span>
					                    <el-input v-model="form.overdue1"></el-input>
					                    <span>期</span>
					                </el-form-item>
					                <el-form-item label="曾最大逾期天数：">
					                    <el-input v-model="form.maxoverdue"></el-input>
					                    <span>至</span>
					                    <el-input v-model="form.maxoverdue1"></el-input>
					                    <span>期</span>
					                </el-form-item>
					                <el-form-item label="距下次还款：">
					                    <el-input v-model="form.repayment"></el-input>
					                    <span>至</span>
					                    <el-input v-model="form.repayment1"></el-input>
					                    <span>天</span>
					                </el-form-item>
					                <el-form-item label="折让比例：">
					                    <el-input v-model="form.discount"></el-input>
					                    <span>至</span>
					                    <el-input v-model="form.discount1"></el-input>
					                    <span>%</span>
					                </el-form-item>
					                <el-form-item label="重复标的：">
					                     <el-checkbox v-model="checked">排除已投的债转标</el-checkbox>
					                </el-form-item>
					                <el-form-item label="标的是否正在逾期:">
					                     <el-checkbox v-model="checked">排除正逾期标的</el-checkbox>
					                </el-form-item>
					                <el-form-item label="标的是否曾逾期:">
					                     <el-checkbox v-model="checked">排除曾逾期</el-checkbox>
					                </el-form-item>

					                <el-form-item>
					                    <el-button type="primary" @click="onSubmit">保存策略</el-button>
					                </el-form-item>
					            </el-form>
					        </div>
					    </div>
					</div>
				</el-tab-pane> -->
			</el-tabs>
		</div>
	</div>
	<div class="dialogWrapper">
		<el-dialog title="自定义策略" :visible.sync="dialogVisible" width="1000px" :before-close="handleClose">
			<el-form :model="form">
			    <el-form-item label="期限：" :label-width="formLabelWidth">
				  <el-input v-model="form1.term"></el-input>
				  <span>至</span>
				  <el-input v-model="form1.term1"></el-input>
				  <span>个月</span>
			    </el-form-item>
			    <el-form-item label="利率：" :label-width="formLabelWidth">
				  <el-input v-model="form1.rate"></el-input>
				  <span>至</span>
				  <el-input v-model="form1.rate1"></el-input>
				  <span>%</span>
			    </el-form-item>
			    <el-form-item label="借款金额：" :label-width="formLabelWidth" class="loan-amount">
					<div class="input-box">
						<b>￥</b>
						<el-input v-model="form1.loan"></el-input>
					</div>
				  <span>至</span>
				  <div class="input-box">
					  <b>￥</b>
					  <el-input v-model="form1.loan1"></el-input>
				  </div>
				  <span></span>
			    </el-form-item>
			    <el-form-item label="单笔投资金额：" :label-width="formLabelWidth" class="single-investment">
				  <el-input v-model="form1.investment"></el-input>
			    </el-form-item>
			    <el-form-item label="是否使用优惠券：" :label-width="formLabelWidth">
					<el-select v-model="form.region" placeholder="请选择">
  			        <el-option label="是" value="是"></el-option>
  			        <el-option label="否" value="否"></el-option>
  			      </el-select>
			    </el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button type="primary"  @click.native="handleSubmit">保存</el-button>
				<el-button type="primary" class="cancel">取消</el-button>
				<!-- <el-button type="primary" @click="dialogVisible = false" class="cancel">取消</el-button> -->
			</span>
		</el-dialog>

	</div>
</div>
</template>

<script>
export default {
	data(){
		return{
			dialogVisible: false,
			formLabelWidth: '200px',
			activeName: 'first',
			form: {
	          residue: '',
	          residue1: '',
	          period: '',
	          period1: '',
	          rate: '',
	          rate1: '',
	          interestRate: '',
	          interestRate1: '',
	          transfer: '',
	          transfer1: '',
	          overdue1: '',
	          overdue1: '',
	          repayment1: '',
	          repayment1: '',
	          discount1: '',
	          discount1: '',
	      },
	      checked:'',
		  options: [
			{
				value: '选项1',
				label: '黄金糕'
			}, {
				value: '选项2',
				label: '双皮奶'
			}, {
				value: '选项3',
				label: '蚵仔煎'
			}, {
				value: '选项4',
				label: '龙须面'
			}, {
				value: '选项5',
				label: '北京烤鸭'
			}],
		  value: '',
		  value1: '',
		  value2: '',
		  input:0,
		  editFlag:false,
		  form1:{
			  term:'',
			  term1:'',
			  rate:'',
			  rate1:'',
			  loan:'',
			  loan1:'',
			  investment:'',

		  },
		  switchValue: false,
		  switchValue2: false,
		}
	},
	methods: {
		handleClick(tab, event) {
			console.log(tab, event);
		},
		editMoney(){
			this.editFlag = true;
		},
		// 离焦更改自动投标
		changeVal(){
			this.editFlag = false;
		},
		onSubmit() {
			console.log('submit!');
		},
		handleClose(done) {
	        this.$confirm('确认关闭？')
	          .then(_ => {
	            done();
	          })
          	.catch(_ => {});
      	},
		handleSubmit(){
			console.log('保存信息')
		}
    }

}
</script>

<style lang="less">
.switchBox{
	position: absolute;
    right: 10px;
    top: 15px;
	a{
		color:#d5041f;
	}
	span{
		color:#d5041f;
	}
}
.dialogWrapper{
	.el-dialog__wrapper{
		.el-dialog{
			.el-dialog__header{
				border-bottom:1px solid #e3e3e3;
				.el-dialog__title{
					font-size:14px;
					color:#d5041f;
					position:relative;
					padding-left:40px;
					height:30px;
					line-height: 30px;
					&::after{
						position:absolute;
						display:block;
						content:'';
						width:30px;
						height:30px;
						top:0;
						left:0;
						background:url(/static/common/auto-bill.png);
					}
				}
			}
			.el-dialog__body{
				width:650px;
				margin:0 auto;
				.el-form-item{
					margin-bottom:12px;
					.el-form-item__label{
						padding:0 40px 0 0;
						line-height:30px;
					}
					.el-form-item__content{
						height:30px;
						line-height:30px;
						font-size: 0;
						.el-input{
							width:125px;
							.el-input__inner{
								&:hover{
									border: 1px solid #dcdfe6;
								}
								&:focus{
									// border: 1px solid #dcdfe6;
								}
							}
						}
					}
					&.single-investment{
						.el-form-item__content{
							.el-input{
								width:302px;
							}
						}
					}
					&.loan-amount{
						.el-form-item__content{
							.input-box{
								display: inline-block;
								border: 1px solid #dcdfe6;
								height:30px;
								&:focus{
									border: 1px solid #d5041f!important;
								}
								.el-input{
									width:105px;
									.el-input__inner{
										border:none;
										border-left:0;
										padding-left:0;
									}
								}
							}
						}
					}
					span{
						padding:0 15px;
						font-size:14px;
					}
					b{
						height: 30px;
						// border: 1px solid #dcdfe6;
						display: inline-block;
						vertical-align: top;
						box-sizing: border-box;
						font-size:14px;
						border-right:0;
						padding-left: 4px;
						font-weight: normal;
					}
				}
			}
			.el-dialog__footer{
				text-align: center;
				.el-button{
					padding:10px 50px;
					&.cancel{
						background:#fff;
						border:1px solid #d5041f;
						color:#d5041f;
					}
				}
			}
		}
	}
}
.el-message-box__btns{
	button:first-child{
		background:#fff;
		border:1px solid #d5041f;
		color:#d5041f;
	}
}
.el-switch{
	position:relative;
	.el-switch__label{
		position:absolute;
		left:0;
		z-index:1;
		display: none;
		span{
			color:#fff;
			font-size:12px;
		}
		&.el-switch__label--left{
			left:22px;
		}
		&.el-switch__label--right{
			left:0px;
		}
		&.is-active{
			display: block;
		}
	}
}
</style>
