<template lang="html">
<div class="bag-main-detail">
	<div class="breadcrumb-wrapper">
		<el-breadcrumb separator="/">
			<el-breadcrumb-item :to="{ path: '/' }">账户信息</el-breadcrumb-item>
			<el-breadcrumb-item>月账单</el-breadcrumb-item>
		</el-breadcrumb>
	</div>
	<div class="detail-container">
		<div class="detail-tabs-box">
			<el-tabs v-model="activeName" @tab-click="handleClick">
			    <el-tab-pane label="出借月账单" name="first">
					<div class="bill-container">
						<div class="lend-container">
							<div class="float-clearfixed">
								<div class="dataTime">
									<el-date-picker v-model="value" type="date" placeholder="选择日期" prefix-icon="icon icon-data"></el-date-picker>
								</div>
							</div>
							<div class="lend-money">
								<div class="lend-money-box">
									<div class="lend-item-box">
										<div class="earn-month">
											<span class="earn">本月已赚取金额（元）<br /><span class="money-count">￥0.00</span></span>
											<span class="interest">您在五福贷累计利息回报<b>0.00</b>元</span>
										</div>
										<div id="myChart" style="width: 400px;height:150px;display:inline-block;"></div>
									</div>
									<div class="lend-item-box">
										<div class="earn-month">
											<span class="earn">本月已赚取金额（元）<br /><span class="money-count">￥0.00</span></span>
											<span class="interest">您在五福贷累计利息回报<b>0.00</b>元</span>
										</div>
										<div id="myChart1" style="width: 400px;height:150px;display:inline-block;"></div>
									</div>
								</div>
								<div class="transaction-box">
									<h3>本月交易总览</h3>
									<div class="transaction-container">
										<div class="transaction-title">
											<div class="">
												<p class="transaction-money">￥0.00</p>
												<p class="month-money">本月充值金额（元）</p>
											</div>
											<div class="">
												<p class="transaction-money">￥0.00</p>
												<p class="month-money">本月体现金额（元）</p>
											</div>
										</div>
										<div class="transaction-table">
											<el-table :data="tableData" style="width: 100%">
												<el-table-column prop="name" label="项目名称" width="180"></el-table-column>
												<el-table-column prop="totalMoney" label="累计已赚取金额（元）" width="180"></el-table-column>
												<el-table-column prop="mouthMoney" label="累计本月已赚取金额（元）"></el-table-column>
												<el-table-column prop="holdMoney" label="当月持有金额（元）"></el-table-column>
												<el-table-column prop="holdNumber" label="当月持有笔数（笔）"></el-table-column>
											</el-table>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</el-tab-pane>
			    <el-tab-pane label="借款月账单" name="second">借款</el-tab-pane>
			</el-tabs>
		</div>
	</div>
</div>
</template>

<script>
export default {
	data() {
		return {
			activeName: 'first',
			value: '',
			myChart: {},
			myChart1: {},
			option: {
				tooltip: {
					trigger: 'item',
					formatter: "{a} <br/>{b}: {c} ({d}%)"
				},
				legend: {
					orient: 'vertical',
					x: 'left',
					top: 60,
					itemWidth: 10,
					itemHeight: 10,
					itemGap: 20,
					data: ['福计划已赚金额0.00元', '债权已赚金额0.00元']
				},

				series: [{
					name: '月账单',
					type: 'pie',
					radius: ['50%', '70%'],
					center: ['80%', '45%'],
					avoidLabelOverlap: false,
					label: {
						normal: {
							show: false,
							position: 'center',
							// formatter:function (argument) {
							//     var html;
							//     html='本月业绩\r\n\r\n'+'50单';
							//     return html;
							// }
						},
						emphasis: {
							show: false,
							textStyle: {
								fontSize: '30',
								fontWeight: 'bold'
							}
						},
					},
					labelLine: {
						normal: {
							show: false
						}
					},
					data: [{
							value: 335,
							name: '福计划已赚金额0.00元'
						},
						{
							value: 310,
							name: '债权已赚金额0.00元'
						}
					]
				}],
				color: ['#f9c638', '#045ecc']
			},
			tableData: [{
				name: '散标转让',
				totalMoney: '999，999',
				mouthMoney: '999，999',
				holdMoney: '999，999',
				holdNumber: '200',
			}, {
				name: '福计划',
				totalMoney: '999，999',
				mouthMoney: '999，999',
				holdMoney: '999，999',
				holdNumber: '200',
			}, {
				name: '散标转让',
				totalMoney: '999，999',
				mouthMoney: '999，999',
				holdMoney: '999，999',
				holdNumber: '200',
			}, {
				name: '福计划',
				totalMoney: '999，999',
				mouthMoney: '999，999',
				holdMoney: '999，999',
				holdNumber: '200',
			}]
		}
	},
	methods: {
		handleClick(tab, event) {
			console.log(tab, event);
		},
	},
	mounted() {
		this.myChart = echarts.init(document.getElementById('myChart'));
		this.myChart.setOption(this.option)
		this.myChart1 = echarts.init(document.getElementById('myChart1'));
		this.myChart1.setOption(this.option)
	}
}
</script>

<style lang="css">
</style>
