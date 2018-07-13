<template lang="html">
<div class="bag-main-detail detail13">
	<div class="breadcrumb-wrapper">
		<el-breadcrumb separator="/">
			<el-breadcrumb-item :to="{ path: '/' }">出借管理</el-breadcrumb-item>
			<el-breadcrumb-item>上传资料</el-breadcrumb-item>
		</el-breadcrumb>
	</div>
	<div class="detail-container">
		<div class="float-clearfixed">
			<h3>上传资料</h3>
			<div class="statistics-container1">
				<div id='up-boxdata' class="statistics-box">
            <el-table
            :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      label="资料类型"
      width="220">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="说明"
      width="676">
      <template slot-scope="scope">
  <span class="fl" style="margin-left: 10px;">{{ scope.row.explain }}</span>
  <span class="fr" style="margin-left: 10px;">示例图片</span>

</template>
    </el-table-column>
    <el-table-column
      label="数量"
      width="119">
      <template slot-scope="scope">
  <span style="margin-left: 10px"></span>
</template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
  <span class="fl"  @click="handleEdit(scope.$index, scope.row)">上传图片</span>
  <span class="fr"  @click="handleDelete(scope.$index, scope.row)">删除</span>
</template>
    </el-table-column>
  </el-table>
				</div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
// 33cc99    cc99cc
export default {
  name: "detail13",
  data() {
    return {
      tableData: [
        {
          date: "身份证",
          explain: "二代身份证正反面各一张，本人手持身份证合照一张，共3张。",
          numb:0,
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "身份证",
          explain: "二代身份证正反面各一张，本人手持身份证合照一张，共3张。",
          numb:0,
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "身份证",
          explain: "二代身份证正反面各一张，本人手持身份证合照一张，共3张。",
          numb:0,
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "身份证3",
          explain: "二代身份证正反面各一张，本人手持身份证合照一张，共3张。",
          numb:0,
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  mounted() {},
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
};
</script>

<style  scoped>
#up-boxdata {
  padding: 15px 10px 22px 10px;
}
</style>
