<template>
<div class="box">
  <div class="boxSearch">
    <span>投标期限：</span>
    <ul>
      <li :class="{'all':index==0}" v-for="(item,index) in toubiaoQixian" :key="index" @click="selqixian">{{item}}</li>
    </ul>
  </div>
  <div class="boxSearch">
    <span>协议利率：</span>
    <ul>
      <li class="all">全部</li>
      <li>1-13%</li>
      <li class="hit">14-16%</li>
      <li>16-21%</li>
      <li>>21%</li>
    </ul>
  </div>
  <div class="gridTable">
    <table>
      <thead>
      <tr>
        <th>默认排序</th>
        <th width="170">协议利率</th>
        <th width="170">期限</th>
        <th width="210">金额</th>
        <th width="184">进度</th>
        <th width="224"></th>
      </tr>
      </thead>
      <tbody>
      <tr @click="goDetail">
        <td><img src="/static/lend/icon1.png" width="20">借款标题+DK1234567</td>
        <td><span class="rateNum">12</span><span class="ratePecent">%</span></td>
        <td>24个月</td>
        <td>20000</td>
        <td></td>
        <td>
          <div class="countBox">
            <el-input-number size="small" v-model="num1[0]" @change="handleChange($event)" :min="1"  label="描述文字"></el-input-number>
          </div>
          <div><input class="buybtn" type="button" value="立即购买"></div>

        </td>
      </tr>
      <tr @click="goDetail">
        <td><img src="/static/lend/icon1.png" width="20">  借款标题+DK1234567</td>
        <td><span class="rateNum">12</span><span class="ratePecent">%</span></td>
        <td>24个月</td>
        <td>20000</td>
        <td></td>
        <td>
          <div class="countBox">
            <el-input-number size="small" v-model="num1[1]" @change="handleChange($event)" :min="1"  label="描述文字"></el-input-number>
          </div>
          <div><input class="buybtn" type="button" value="立即购买"></div>
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
      num1:[1000,2000],

      toubiaoQixian:[
        "全部","0-3个月","4-6个月","7-9个月","10-12个月","12个月以上"
      ]

    }
  },
  methods:{
    handleChange(value) {
      console.log(value);
    },
    selqixian(){
      alert(1111);
    },
    goDetail(){
      location.href = '/lend/sanbiaoDetail.html?type=sanbiao';
    }

  }

}
</script>

<style scoped>
  @import './lend.css';
</style>
