<template>
  <div class="box">

    <div class="gridTable">
      <table>
        <tbody>
        <tr @click="goDetail">
          <!--<td><img src="/static/lend/icon2.png" width="20"> 福计划FJH2017<span class="rateNum">10</span><span class="ratePecent">%</span></td>-->
          <td class="fjhtd1" style="text-align: left;">
            <div style="position: relative;"><img class="td1icon" src="/static/lend/icon3.png" width="20"><span class="title1">福计划</span> <span class="title4">FJH2017</span></div>
            <div><span class="rateNum">18.87</span><span class="ratePecent">%</span></div>
            <div><span class="title3">平均历史年化收益率</span></div>
          </td>
          <td width="238">
            <div><span class="num">1000</span><span class="title2">元</span></div>
            <div><span class="title3">起投金额</span></div>
          </td>
          <td width="214">
            <div><span class="title2">锁定期<span class="num">90</span>天</span></div>
            <div><span class="title3">60天可免费转让</span></div>
          </td>
          <td width="300"><span class="num2">抢购度 <span class="num3">80%</span></span></td>
          <td width="180"><div><input class="buybtn2" type="button" value="立即购买"></div></td>
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
      },
      goDetail(){
        location.href = '/lend/fujihuaDetail.html';
      }
    }

  }
</script>

<style scoped>
  @import './lend.css';
</style>

