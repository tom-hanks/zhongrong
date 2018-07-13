<template lang="html">
  <div class="bag-main-detail">
	<div class="breadcrumb-wrapper">
  		<el-breadcrumb separator="/">
  			<el-breadcrumb-item :to="{ path: '/' }">资金管理</el-breadcrumb-item>
  			<el-breadcrumb-item>资金记录</el-breadcrumb-item>
  		</el-breadcrumb>
  	</div>
	<div class="detail-container">
		<div class="record-box float-clearfixed">
			<div class="record-left">
				<el-form :inline="true" :model="formInline" class="demo-form-inline">
					<el-form-item label="资金类型：">
						<el-select v-model="formInline.region" placeholder="请选择">
							<el-option label="区域一" value="shanghai"></el-option>
							<el-option label="区域二" value="beijing"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="时间：">
						<el-select v-model="formInline.region" placeholder="请选择">
							<el-option label="区域一" value="shanghai"></el-option>
							<el-option label="区域二" value="beijing"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="onSubmit">查询</el-button>
					</el-form-item>
				</el-form>
			</div>
			<div class="record-right">
				<el-select v-model="value" placeholder="请选择">
				    <el-option
				      v-for="item in options"
				      :key="item.value"
				      :label="item.label"
				      :value="item.value">
				    </el-option>
				</el-select>
				<div class="">
					<p><i class="icon icon-upload"></i>下载当月记录</p>
				</div>
			</div>
			<div class="transaction-table">
				<el-table
				  :data="tableData"
				  style="width: 100%">
				  <el-table-column
					prop="date"
					label="日期"
					width="180">
				  </el-table-column>
				  <el-table-column
					prop="type"
					label="类型"
					width="180">
				  </el-table-column>
				  <el-table-column
					prop="expenditure"
					label="支出（元）">
				  </el-table-column>
				  <el-table-column
					prop="deposit"
					label="存入（元）">
				  </el-table-column>
				  <el-table-column
					prop="balance"
					label="余额（元）">
				  </el-table-column>
				  <el-table-column
					prop="explain"
					label="说明">
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
	data() {
	 	return {
            currentPage: 1,
		   	formInline: {
		 		user: '',
			 	region: ''
		 	},
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
		        }
			],
			value: '',
			tableData: [
				{
					date: '2018-08-29',
					type: '投资',
					expenditure: '1103.03',
					deposit: '1103.03',
					balance: '122,344',
					explain: '借款人还款',
	  			}, {
					date: '2018-08-29',
					type: '投资',
					expenditure: '1103.03',
					deposit: '1103.03',
					balance: '122,344',
					explain: '借款人还款',
				}, {
					date: '2018-08-29',
					type: '投资',
					expenditure: '1103.03',
					deposit: '1103.03',
					balance: '122,344',
					explain: '借款人还款',
				}, {
					date: '2018-08-29',
					type: '投资',
					expenditure: '1103.03',
					deposit: '1103.03',
					balance: '122,344',
					explain: '借款人还款',
	  			}
			]
	 	}
    },
   methods: {
	 onSubmit() {
	   console.log('submit!');
   },
   handleSizeChange(val) {
     console.log(`每页 ${val} 条`);
   },
   handleCurrentChange(val) {
     console.log(`当前页: ${val}`);
 },
   }
}
</script>

<style lang="css">
</style>
