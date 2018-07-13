<template>
  <div class="box">
    <div class="boxSearch">
      <span>距下次还款：</span>
      <ul>
        <li>1-30天</li>
        <li class="hit">31-60</li>
        <li>61-90</li>
        <li>91天以上</li>
      </ul>
    </div>
    <div class="boxSearch">
      <span>剩余期限：</span>
      <ul>
        <li>1-3期</li>
        <li class="hit">4-6期</li>
        <li>7-11期</li>
        <li>12期以上</li>
      </ul>
    </div>
    <div class="boxSearch">
      <span>转让收益率：</span>
      <ul>
        <li>%以上</li>

      </ul>
    </div>
    <div class="gridTable">
      <table>
        <thead>
        <tr>
          <th>默认排序</th>
          <th width="150">转让收益率</th>
          <th width="150">转让价格</th>
          <th width="150">折让比例</th>
          <th width="150">剩余期数</th>
          <th width="150">距下次还款</th>
          <th width="150"></th>
        </tr>
        </thead>
        <tbody>
        <tr @click="goDetail">
          <td><img src="/static/lend/icon2.png" width="20"> 借款标题+DK1234567</td>
          <td><span class="rateNum">10.50</span><span class="ratePecent">%</span></td>
          <td>344.33</td>
          <td>-1.82%</td>
          <td>12/34</td>
          <td>
            21天
          </td>
          <td>
            <div><input class="buybtn2" type="button" value="立即购买"></div>
          </td>
        </tr>
        <tr>
          <td><img src="/static/lend/icon2.png" width="20"> 借款标题+DK1234567</td>
          <td><span class="rateNum">10.50</span><span class="ratePecent">%</span></td>
          <td>344.33</td>
          <td>-1.82%</td>
          <td>12/34</td>
          <td>
            21天
          </td>
          <td>
            <div><input class="buybtn2" type="button" value="立即购买"></div>
          </td>
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
        location.href = '/lend/sanbiaoDetail.html?type=zhuanrang';
      }
    }

  }
</script>

<style scoped>
  @import './lend.css';
</style>
