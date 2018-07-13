<template lang="html">
<div class="bag-main-detail detail13">
	<div class="breadcrumb-wrapper">
	
		 <el-table
    :data="tableData6"
    border
    style="width: 100%">
    <el-table-column
      prop="id"
      label="ID"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名">
    </el-table-column>
    <el-table-column
      prop="amount1"
      sortable
      label="数值 1">
    </el-table-column>
    <el-table-column
      prop="amount2"
      sortable
      label="数值 2">
    </el-table-column>
    <el-table-column
      prop="amount3"
      sortable
      label="数值 3">
    </el-table-column>
    <el-table-column
      prop="amount4"
      sortable
      label="数值 4">
    </el-table-column>
  </el-table>
	</div>
</div>
</template>

<script>
// 33cc99    cc99cc
export default {
  name: "detail13",
  data() {
    return {
      tableData6: [{
          id: '12987122',
          name: '王小虎',
          amount1: '2018-09-06',
          amount2: '3.2',
          amount3: 10,
          amount4: 1
        }, {
          id: '12987123',
          name: '王小虎',
          amount1: '2017-09-06',
          amount2: '4.43',
          amount3: 12,
          amount4: 2
        }, {
          id: '12987124',
          name: '王小虎',
          amount1: '2014-10-06',
          amount2: '1.9',
          amount3: 9,
          amount4: 3
        }, {
          id: '12987125',
          name: '王小虎',
          amount1: '2011-12-06',
          amount2: '2.2',
          amount3: 17,
          amount4: 4
        }, {
          id: '12987126',
          name: '王小虎',
          amount1: '2012-02-06',
          amount2: '4.1',
          amount3: 15,
          amount4: 5
        }]
    };
  },
  mounted() {

  },
  methods:{
     getSummaries(param) {
        const { columns, data } = param;
        const sums = [];
        columns.forEach((column, index) => {
          if (index === 0) {
            sums[index] = '总价';
            return;
          }
          const values = data.map(item => Number(item[column.property]));
          if (!values.every(value => isNaN(value))) {
            sums[index] = values.reduce((prev, curr) => {
              const value = Number(curr);
              if (!isNaN(value)) {
                return prev + curr;
              } else {
                return prev;
              }
            }, 0);
            sums[index] += ' 元';
          } else {
            sums[index] = 'N/A';
          }
        });

        return sums;
      }
  }
 
};
</script>

<style  scoped>
#up-boxdata {
  padding: 15px 10px 22px 10px;
}
</style>
