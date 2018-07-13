<template lang="html">
<div class="bag-main-detail">
	<div class="breadcrumb-wrapper">
		<el-breadcrumb separator="/">
			<el-breadcrumb-item :to="{ path: '/' }">出借管理</el-breadcrumb-item>
			<el-breadcrumb-item>固定期限产品</el-breadcrumb-item>
		</el-breadcrumb>
	</div>
	<div class="detail-container">
		<div class="term-product">
			<h3>福计划</h3>
            <ul>
                <li>
        			<p class="count">¥11,888,888.67</p>
        			<p class="text">资产(元)</p>
        		</li>
                <li>
        			<p class="count">¥11,888,888.67</p>
        			<p class="text">累计收益(元)</p>
        		</li>
            </ul>
		</div>
        <div class="product-container">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="持有中" name="first">
                    <el-table :data="tableData" style="width: 100%">
                      <el-table-column prop="planName" label="计划名称" width="180"></el-table-column>
                      <el-table-column prop="addMoney" label="加入金额(元)" width="180"></el-table-column>
                      <el-table-column prop="historicalRate" label="历史参考收益率"></el-table-column>
                      <el-table-column prop="deadline" label="定期限"></el-table-column>
                      <el-table-column prop="dataAdd" label="加入日期"></el-table-column>
                      <el-table-column prop="endDay" label="锁定结束日"></el-table-column>
                      <el-table-column prop="tenderRecord" label="投标记录"></el-table-column>
                      <el-table-column prop="tradeState" label="交易状态"></el-table-column>
                    </el-table>
                </el-tab-pane>
                <el-tab-pane label="已收益" name="second">
                    <el-table :data="tableData" style="width: 100%">
                        <el-table-column prop="planName" label="计划名称" width="180"></el-table-column>
                        <el-table-column prop="addMoney" label="加入金额(元)" width="180"></el-table-column>
                        <el-table-column prop="historicalRate" label="历史参考收益率"></el-table-column>
                        <el-table-column prop="deadline" label="定期限"></el-table-column>
                        <el-table-column prop="dataAdd" label="加入日期"></el-table-column>
                        <el-table-column prop="endDay" label="锁定结束日"></el-table-column>
                        <el-table-column prop="tenderRecord" label="投标记录"></el-table-column>
                        <el-table-column prop="tradeState" label="交易状态"></el-table-column>
                    </el-table>
                </el-tab-pane>
            </el-tabs>
        </div>
	</div>
</div>
</template>

<script>
export default {
	data(){
		return{
            activeName: 'first',
            tableData: [{
            planName: '2016-05-02',
            addMoney: '王小虎',
            historicalRate: '上海市普陀区金沙江路 1518 弄',
            deadline: '上海市普陀区金沙江路 1518 弄',
            dataAdd: '上海市普陀区金沙江路 1518 弄',
            endDay: '上海市普陀区金沙江路 1518 弄',
            tenderRecord: '上海市普陀区金沙江路 1518 弄',
            tradeState: '上海市普陀区金沙江路 1518 弄'
          }, {
              planName: '2016-05-02',
              addMoney: '王小虎',
              historicalRate: '上海市普陀区金沙江路 1518 弄',
              deadline: '上海市普陀区金沙江路 1518 弄',
              dataAdd: '上海市普陀区金沙江路 1518 弄',
              endDay: '上海市普陀区金沙江路 1518 弄',
              tenderRecord: '上海市普陀区金沙江路 1518 弄',
              tradeState: '上海市普陀区金沙江路 1518 弄'
          }, {
              planName: '2016-05-02',
              addMoney: '王小虎',
              historicalRate: '上海市普陀区金沙江路 1518 弄',
              deadline: '上海市普陀区金沙江路 1518 弄',
              dataAdd: '上海市普陀区金沙江路 1518 弄',
              endDay: '上海市普陀区金沙江路 1518 弄',
              tenderRecord: '上海市普陀区金沙江路 1518 弄',
              tradeState: '上海市普陀区金沙江路 1518 弄'
          }, {
              planName: '2016-05-02',
              addMoney: '王小虎',
              historicalRate: '上海市普陀区金沙江路 1518 弄',
              deadline: '上海市普陀区金沙江路 1518 弄',
              dataAdd: '上海市普陀区金沙江路 1518 弄',
              endDay: '上海市普陀区金沙江路 1518 弄',
              tenderRecord: '上海市普陀区金沙江路 1518 弄',
              tradeState: '上海市普陀区金沙江路 1518 弄'
          }]
		}
	},
    methods: {
     handleClick(tab, event) {
       console.log(tab, event);
     }
   }
}
</script>

<style lang="less">
.product-container{
    .el-tabs__header{
        margin:0;
        padding: 10px 0 0 30px;
        .el-tabs__nav-wrap{
            &::after{
                height:0;
            }
            .el-tabs__nav{
                .el-tabs__active-bar{
                    background-color: #d5041f;
                }
                .el-tabs__item{
                    color:#999;
                    border-right:1px solid #e3e3e3;
                    height:14px;
                    line-height:14px;
                    margin: 10px 0 6px 0;
                    &.is-active{
                        color:#d5041f;
                    }
                    &:last-child{
                        border-right:none;
                    }
                }
            }

        }

    }
    .el-tabs__content{
        padding:24px 34px 100px 34px;
    }
}
.el-table thead tr th .cell::after{
	background:none;
}
</style>
