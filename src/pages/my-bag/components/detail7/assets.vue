<template lang="html">
  <div class="profit-box">
	  <ul>
	  	<li>
	  		<p class="name">待收收益（元）</p>
	  		<p class="money">￥0.00</p>
	  	</li>
	  	<li>
	  		<p class="name">累计收益（元）</p>
	  		<p class="money">￥0.00</p>
	  	</li>
	  	<li>
	  		<p class="name">正常待收本金（元）</p>
	  		<p class="money">￥0.00</p>
	  	</li>
	  	<li>
	  		<p class="name">逾期待收本金（元）</p>
	  		<p class="money">￥0.00</p>
	  	</li>
	  </ul>
	  <div class="asset-analysis-box">
	  	<h3>资产分析</h3>
		<div class="asset-analysis-container">
			<div class="asset-analysis-top float-clearfixed">
				<div class="dataTime1">
					<el-date-picker v-model="value" type="date" placeholder="选择日期1" prefix-icon="icon icon-data"></el-date-picker>
					<span>-</span>
					<el-date-picker v-model="value" type="date" placeholder="选择日期" prefix-icon="icon icon-data"></el-date-picker>
				</div>
				<div class="text">
					<p>数据开始于2017-08-20统计至2018-20-39</p>
				</div>
			</div>
			<div class="transaction-table">
				<el-table
				  :data="tableData"
				  style="width: 100%">
				  <el-table-column
					prop="date"
					label="时间">
				  </el-table-column>
				  <el-table-column
					prop="principal"
					label="月初净待收本金（元）"
					>
				  </el-table-column>
				  <el-table-column
					prop="interest"
					label="利息收入（元）">
				  </el-table-column>
				  <el-table-column
					prop="badDebt"
					label="当月净增坏账（元）"
					>
				  </el-table-column>
				</el-table>
			</div>
			<div class="page-box">
				<el-pagination
				background
				@size-change="handleSizeChange"
			      @current-change="handleCurrentChange"
			      :current-page="currentPage"
			      :page-size="10"
			      layout="total, sizes, prev, pager, next, jumper"
			      :total="400">
			    </el-pagination>
			</div>
		</div>
	  </div>
  </div>
</template>

<script>
export default {
	data(){
		return{
			value: '',
			value1: '',
			currentPage: 1,
			tableData: [
				{
					date: '2018-08-29',
					principal: '999.99',
					interest: '999.99',
					badDebt: '1103.03'
	  			}, {
					date: '2018-08-29',
					principal: '999.99',
					interest: '1103.03',
					badDebt: '1103.03'
				}, {
					date: '2018-08-29',
					principal: '999.99',
					interest: '1103.03',
					badDebt: '1103.03'
				}, {
					date: '2018-08-29',
					principal: '999.99',
					interest: '1103.03',
					badDebt: '1103.03'
	  			}
			]
		}
	},
	methods: {
	 handleSizeChange(val) {
	   console.log(`每页 ${val} 条`);
	 },
	 handleCurrentChange(val) {
	   console.log(`当前页: ${val}`);
   },
//    foo(h,{column}){
// 	   console.log(123)
//     if(column.lableClassName){
//         return(
// 			`<template slot-scope="scope">
// 			<el-tooltip
// 			    class="item"
// 			    effect="dark"
// 			    content={column.lableClassName}
// 			    placement="bottom">
// 			  <span>{column.lable}</span>
// 			</el-tooltip>
//
// 			</template>`
//         )
//     }
// }
   },
}
</script>

<style lang="less">
.el-table thead tr th {
	.cell{
		cursor: pointer;
		&::after{
			position: absolute;
			display: block;
			content:'';
			width:14px;
			height:14px;
			top:0;
			left:80%;
			background:url(/static/common/tip.png);
		}
	}
	&:nth-child(3){
		.cell{
			&::after{
				left:75%;
			}
		}
	}
	&:first-child{
		.cell{
			&::after{
				background:none;
			}
		}
	}
}
</style>
