<template lang="html">
<div class="bag-main-detail">
	<div class="breadcrumb-wrapper">
		<el-breadcrumb separator="/">
			<el-breadcrumb-item :to="{ path: '/' }">出借管理</el-breadcrumb-item>
			<el-breadcrumb-item>债权交易</el-breadcrumb-item>
		</el-breadcrumb>
	</div>
	<div class="detail-container">
		<h3>出借分析</h3>
		<div class="bill-container">
            <div class="loan-analysis-box">
                <div class="loan-analysis-top">
                    <div class="">
                        <p>剩余期数</p>
                        <div class="">
                            <ul>
                                <li>1-3期</li>
                                <li>4-6期</li>
                                <li>7-11期</li>
                                <li>12期以上</li>
                            </ul>
                        </div>
                    </div>
                    <div class="">
                        <p>距下次还款</p>
                        <div class="">
                            <ul>
                                <li>1-30天</li>
                                <li>31-60天</li>
                                <li>61-90天</li>
                                <li>91天以上</li>
                            </ul>
                        </div>
                    </div>
                    <div class="">
                        <p>原始利率</p>
                        <div class="">
                            <el-input v-model="rate" placeholder=""></el-input>
                            <span>%以上</span>
                            <el-button>确定</el-button>
                        </div>
                    </div>
                    <div class="">
                        <p>剩余本金</p>
                        <div class="">
                            <el-input v-model="highestPrice" placeholder="最高价"></el-input>
                            <span>-</span>
                            <el-input v-model="minPrice" placeholder="最低价"></el-input>
                            <el-button>确定</el-button>
                        </div>
                    </div>
                </div>
                <div class="loan-analysis-container">
					<el-tabs v-model="activeName" @tab-click="handleClick">
					    <el-tab-pane label="可转让债权" name="first">
							<div class="">
								<el-table ref="multipleTable" :data="tableData" style="width: 100%" :default-sort = "{prop: 'rate', order: 'descending'}"
								@selection-change="handleSelectionChange"  @select="">
									<el-table-column type="selection"  width="55"></el-table-column>
								    <el-table-column prop="title" label="标题" width="180"></el-table-column>
								    <el-table-column prop="rate" label="原始利率" sortable width="180"></el-table-column>
									<el-table-column prop="principal" label="本金" sortable width="180"></el-table-column>
								    <el-table-column prop="interest" label="利息" sortable></el-table-column>
								    <el-table-column prop="surplus" label="剩余期数" sortable></el-table-column>
							    	<el-table-column prop="nextRepayment" label="下次还款" sortable></el-table-column>
								    <el-table-column label="操作">
									  <template slot-scope="scope">
								        <a size="mini" @click="handleEdit(scope.$index, scope.row)" class="apply">申请</a>
								      </template>
								    </el-table-column>
						  		</el-table>
								<div class="checkAllBox">
									 <el-checkbox v-model="checked" @change="toggleSelection(tableData)">全选</el-checkbox>
									 <a @click="handleEditAll()">申请</a>
								</div>
							</div>
						</el-tab-pane>
					    <el-tab-pane label="转让中债权" name="second">
							<div class="">
								<el-table :data="tableData1" style="width: 100%" :default-sort = "{prop: 'rate', order: 'descending'}">
									<el-table-column type="selection" width="55"></el-table-column>
									<el-table-column prop="title" label="原始借款标" width="180"></el-table-column>
									<el-table-column prop="rate" label="原始利率" sortable width="180"></el-table-column>
									<el-table-column prop="principal" label="剩余本金" sortable width="180"></el-table-column>
									<el-table-column prop="rate" label="剩余期数" sortable ></el-table-column>
									<el-table-column prop="interest" label="转让价格" sortable ></el-table-column>
									<el-table-column prop="nextRepayment" label="剩余时间" sortab ></el-table-column>
									<el-table-column label="操作">
									  <template slot-scope="scope">
										<a size="mini" @click="handleEdit(scope.$index, scope.row)" class="apply">申请</a>
									  </template>
									</el-table-column>
								</el-table>
							</div>
						</el-tab-pane>
					    <el-tab-pane label="已转出债权" name="third">
							<div class="">
								<el-table :data="tableData2" style="width: 100%" :default-sort = "{prop: 'rate', order: 'descending'}">
									<el-table-column type="selection" width="55"></el-table-column>
								    <el-table-column prop="title" label="原始借款标" width="180"></el-table-column>
							    	<el-table-column prop="rate" label="原始利率" sortable width="180"></el-table-column>
									<el-table-column prop="principal" label="剩余本金" sortable width="180"></el-table-column>
							    	<el-table-column prop="price" label="转让价格" sortable></el-table-column>
								    <el-table-column prop="time" label="转让结束时间" sortable></el-table-column>
								    <el-table-column label="操作">
									  <template slot-scope="scope">
								        <a size="mini" @click="handleEdit(scope.$index, scope.row)" class="apply">申请</a>
								      </template>
								    </el-table-column>
						       </el-table>
							</div>
						</el-tab-pane>
					</el-tabs>


                </div>
            </div>
		</div>
	</div>
	<!-- 弹窗 -->
	<div class="dialogWrapper">
		<el-dialog title="债权转出" :visible.sync="dialogVisible" width="1000px" :before-close="handleClose">
			<div class="dialog-container float-clearfixed">
				<span>债权转让协议</span>
				<div class="num-box">
					<p>批量调整转让利率</p>
					<div class="num-wrapper">
						<el-input-number v-model="batchRateNum" :precision="2" :step="0.1" :max="100" :min="0" @change="handleChange"></el-input-number>
					</div>
				</div>
				<div class="agreement-container">
					<el-table :data="dialogTableData" border style="width: 100%">
					    <el-table-column fixed="left" label="" width="50">
							<template slot-scope="scope">
							  <img src="/static/common/delect.png" alt="" @click="handleDelete(scope.$index, dialogTableData)">
							</template>
						</el-table-column>
					    <el-table-column fixed prop="period" label="剩余期数" width="100"></el-table-column>
					    <el-table-column prop="residualPrincipal" label="剩余本金（元）" width="180"></el-table-column>
					    <el-table-column prop="transferPrice" label="转让价格（元）" width="180"></el-table-column>
					    <el-table-column prop="discountRatio" label="折让比例" width="120"></el-table-column>
					    <el-table-column prop="originalRate" label="原始利率" width="120"></el-table-column>
					    <el-table-column fixed="right" label="转让利率">
					      <template slot-scope="scope">
					       <el-input-number v-model="scope.row.rateNum" :precision="2" :step="0.1" :max="100" :min="0"></el-input-number>
					      </template>
					    </el-table-column>
  					</el-table>
					<div class="agreement-bottom">
						<ul>
							<li>
								<span>剩余本金：</span>
								<span class="money">￥2309.00</span>
							</li>
							<li>
								<span>转让价格：</span>
								<span class="specialColor money">￥2309.00</span>
							</li>
							<li>
								<span class="spantips">服务费<img src="/static/common/tip.png">：
									<div class="">
										<div class="arrow">
											<em></em>
											<span></span>
										</div>
										<span class="tip">具体收费具体收费具体收费具体收费</span>
									</div>
								</span>
								<span class="specialColor money">￥9.00</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<span slot="footer" class="dialog-footer">
				<el-button @click="dialogVisible = false">立即转让</el-button>
			</span>
		</el-dialog>
	</div>
</div>
</template>

<script>
// import inputNum from '/components/inputNum/inputNum'
export default {
    data(){
        return{
			// rateNum:0,
			checked:false,//全选
			dialogVisible: false,//弹窗
			activeName: 'first',
            rate:'',
            highestPrice:'',
            minPrice:'',
			batchRateNum:0,//批量调整
			multipleSelection: [],//存储选中的数据
			tableData: [
				{
					title: '标题1287495',
					rate: '10%',
					principal: '999，999',
					interest: '16%',
					surplus: '5期',
					nextRepayment: '5天',
			    }, {
					title: '标题1287494',
					rate: '11%',
					principal: '999，999',
					interest: '10%',
					surplus: '5期',
					nextRepayment: '5天',
		        }, {
					title: '标题1287497',
					rate: '12%',
					principal: '999，999',
					interest: '14%',
					surplus: '5期',
					nextRepayment: '5天',
				}, {
					title: '标题1287498',
					rate: '13%',
					principal: '999，999',
					interest: '11%',
					surplus: '5期',
					nextRepayment: '5天',
				}
			],
			tableData1: [
				{
					title: '标题1287498',
					rate: '12%',
					principal: '999，999',
					interest: '12%',
					surplus: '5期',
					nextRepayment: '5天',
			    }, {
					title: '标题1287498',
					rate: '12%',
					principal: '999，999',
					interest: '12%',
					surplus: '5期',
					nextRepayment: '5天',
			    }, {
					title: '标题1287498',
					rate: '12%',
					principal: '999，999',
					interest: '12%',
					surplus: '5期',
					nextRepayment: '5天',
				}, {
					title: '标题1287498',
					rate: '12%',
					principal: '999，999',
					interest: '12%',
					surplus: '5期',
					nextRepayment: '5天',
				}
			],
			tableData2: [
				{
					title: '标题1287498',
					rate: '12%',
					principal: '999，999',
					price: '5期',
					time: '5天',
			    }, {
					title: '标题1287498',
					rate: '12%',
					principal: '999，999',
					price: '5期',
					time: '5天',
			    }, {
					title: '标题1287498',
					rate: '12%',
					principal: '999，999',
					price: '5期',
					time: '5天',
		        }, {
					title: '标题1287498',
					rate: '12%',
					principal: '999，999',
					price: '5期',
					time: '5天',
				}
			],
			dialogTableData:[
				{
					period: '4期',
					residualPrincipal: '999,99',
					transferPrice: '999,99',
					discountRatio: '12%',
					originalRate: '12%',
					rateNum:0
				},
				{
					period: '4期',
					residualPrincipal: '999,99',
					transferPrice: '999,99',
					discountRatio: '12%',
					originalRate: '12%',
					rateNum:0
				},
				{
					period: '4期',
					residualPrincipal: '999,99',
					transferPrice: '999,99',
					discountRatio: '12%',
					originalRate: '12%',
					rateNum:0
				},
				{
					period: '4期',
					residualPrincipal: '999,99',
					transferPrice: '999,99',
					discountRatio: '12%',
					originalRate: '12%',
					rateNum:0
				},
				{
					period: '4期',
					residualPrincipal: '999,99',
					transferPrice: '999,99',
					discountRatio: '12%',
					originalRate: '12%',
					rateNum:0
				},
			]
        }
    },
	methods:{
		// tab被选中时触发
		handleClick(tab, event) {
	   		console.log(tab, event);
		},
		// 申请
		handleEdit(index, row) {
		   this.dialogVisible = true;
		 },
		handleClose(done) {
     		this.$confirm('确认关闭？')
          	.then(_ => {
            	done();
          	})
          	.catch(_ => {});
      	},
		// 全选
		toggleSelection(rows) {
			if(this.checked){
				this.$refs.multipleTable.clearSelection();
	  	        this.tableData.forEach(row => {
	  	            this.$refs.multipleTable.toggleRowSelection(row);
	  	        });
			}else{
				this.$refs.multipleTable.clearSelection();
			}
      	},
		// 存储选中的数据
		handleSelectionChange(val,rows) {
        	this.multipleSelection = val;
     	},
		//  全选申请
		handleEditAll(){
			if(this.checked){
				this.dialogVisible = true;
			}else{

			}
		},
		// 弹窗删除
		handleDelete(index, rows){
			if(index>0){
				rows.splice(index, 1);
			}
		},
		// 批量更改计数器
		handleChange(value,oldVal) {
			let changeNum = value - oldVal;
			for(let i=0;i<this.dialogTableData.length;i++){
				this.dialogTableData[i].rateNum = this.dialogTableData[i].rateNum + changeNum
			}
      	},
	},
	components:{

	},
	computed:{

	},
	watch: {
		// 监听选中的数据条数
	    multipleSelection(row) {
	      if (this.multipleSelection.length === this.tableData.length) {
			  this.checked = true;
	      } else {
			   this.checked = false;
	      }
	  	},
  }
}
</script>

<style lang="less">
.dialogWrapper{
	.el-dialog{
		.el-dialog__header{
			border:1px solid #e3e3e3;
			.el-dialog__title{
				font-size:14px;
			}
		}
		.el-dialog__body{
			.dialog-container{
				>span{
					line-height: 30px;
					color:#d5041f;
				}
				.num-box{
					display:inline-block;
					float:right;
					p{
						display: inline-block;
						color:#d5041f;
						margin-right:20px;
					}
					.num-wrapper{
						display:inline-block;
						.el-input-number{
							span{
								i{
									&:before{
										color:#d5041f;
									}
								}
							}
						}
					}
				}
				.agreement-container{
					margin-top:30px;
					.el-table--border th,.el-table--border td{
						border-right:none;
					}
					.agreement-bottom{
						margin-top:40px;
						ul{
							font-size:0;
							text-align: center;
							li{
								display: inline-block;
								width:33.33%;
								span{
									font-size:16px;
									color:#666;
									&.money{
										font-size:24px;
									}
									&.specialColor{
										color:#d5041f;
									}
									&.spantips{
										position:relative;
										>div{
											display: none;
											position: absolute;
											right: -3px;
											top: -35px;
											padding: 0px 15px;
											text-align: left;
											height: 28px;
											white-space: nowrap;
											color: #999;
											border: 1px solid #CCC;
											position: absolute;
											background: none repeat scroll 0% 0% #F8F8F8;
											box-shadow: -1px 1px 1px #dedede;
											z-index: 1;
											.arrow{
												display: block;
												position: absolute;
											    width: auto;
											    height: auto;
											    bottom: 0px;
											    right: 30px;
												em{
													display: block;
													border-width: 5px;
													position: absolute;
													border-style: solid dashed dashed;
													font-size: 0px;
													line-height: 0;
													border-color: #CCC transparent transparent;
												}
												span{
													display: inline;
													border-width: 5px;
													position: absolute;
													border-style: solid dashed dashed;
													font-size: 0px;
													line-height: 0;
													border-color: #F8F8F8 transparent transparent;
    												top: -1px;
												}
											}
											.tip{
												font-size:12px;
											}
										}
										&:hover{
											>div{
												display: block;
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
		.el-dialog__footer{
			text-align: center;
			button{
				width:180px;
				color:#fff;
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
</style>
