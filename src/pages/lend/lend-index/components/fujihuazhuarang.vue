<template>
  <div class="box">

    <div class="gridTable">
      <table>
        <thead>
        <tr>
          <th>计划名称</th>
          <th width="130">转让后收益率</th>
          <th width="130">剩余期限</th>
          <th width="130">转让前收益率</th>
          <th width="130">原始期限</th>
          <th width="130">剩余可投金额</th>
          <th width="130">转让价</th>
          <th width="150"></th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td><img src="/static/lend/icon2.png" width="20"> 福计划FJH2017</td>
          <td><span class="rateNum">10</span><span class="ratePecent">%</span></td>
          <td>100天</td>
          <td>10%</td>
          <td>12个月</td>
          <td>
            999999元
          </td>
          <td>
            1800元
          </td>
          <td><div><input class="buybtn2" type="button" value="立即投标"></div></td>
        </tr>


        </tbody>
      </table>
    </div>

  </div>
</template>

<script>

  export default {

    data(){
      return {
        num1:[1000,2000]
      }
    },
    methods:{
      handleChange(value) {
        console.log(value);
      }
    }

  }
</script>

<style scoped>
  @import './lend.css';
</style>
