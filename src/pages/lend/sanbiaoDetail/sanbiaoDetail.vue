<template>
<div id="app">
	<v-header :pageNo="1"></v-header>
	<div class="container">
    <div class="d" v-show="topImg==1"><img src="/static/lend/lendtopbanner.jpg"> </div>
    <div class="d" v-show="topImg==2"><img src="/static/lend/lendtopbanner2.jpg"> </div>
  </div>

  <div class="bread">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item><a href="/"> 首页</a></el-breadcrumb-item>
      <el-breadcrumb-item><a href="/lend/lend-index.html">我要出借</a></el-breadcrumb-item>
      <el-breadcrumb-item v-show="sanbiaoShow">散标</el-breadcrumb-item>
      <el-breadcrumb-item v-show="zhuanrangShow">散标转让</el-breadcrumb-item>
    </el-breadcrumb>
  </div>

  <div class="boxTop">
    <div class="boxLeft">
      <div class="jkTitle">借款标题dk1231231231</div>
      <div class="jkRate">
        <div>
            <div><span class="bigNum">200000</span>元</div>
            <div class="rateDesc">借款金额</div>
        </div>
        <div>
          <div><span class="bigNum2">20</span><span style="color: #d5041f;">%</span></div>
          <div class="rateDesc">协议利率</div>
        </div>
        <div>
          <div><span class="bigNum">12</span>个月</div>
          <div class="rateDesc">期限</div>
        </div>
        <span class="fgx"></span>
        <span class="fgx" style="left: 470px;"></span>
      </div>
      <div class="jkDesc">
        <div style="width:278px;">还款方式：等额本息（按月还款）</div>
        <div style="width: 210px;">起息日： 满标计息</div>
        <div>投标人数：100人</div>
        <div style="width:278px;">剩余可投金额： 2000,000元</div>
        <div style="width: 210px;">剩余时间： 4天 07:10:31</div>
        <div>出借进度：80%</div>
      </div>
    </div>
    <div class="boxRight">
      <div class="balance">账户余额：<span><a href=""> 登录</a>后可见</span></div>
      <div class="balanceCount"><el-input-number  v-model="num1" @change="handleChange($event)" :min="1"  label="描述文字"></el-input-number></div>
      <div class="revanul">预期收益：<span style="color:#d10622;">100.12</span>元</div>
      <div class="balanceBtn" v-if="sanbiaoShow">立即投标</div>
      <div class="balanceBtn2" v-if="zhuanrangShow">立即投标</div>
      <div class="full" v-if="zhuanrangShow"><img src="/static/lend/full.png"> </div>
    </div>
  </div>


  <div class="box">
    <div class="boxSection">
      <div class="sectionTitle"><span><img src="/static/lend/dicon1.png"></span> 借款人信息</div>
      <div class="jkInfo">
        <div>用户名：UF121*******1515</div>
        <div>性别：女</div>
        <div>学历：本科</div>
        <div>婚姻状况：未婚</div>
        <div>工作信息：暂未提供</div>
        <div>所属行业：金融信息服务</div>
        <div>收入及负债情况：暂未提供</div>
        <div>担保措施：无</div>
        <div>借款用途：生意周转</div>
        <div>还款来源：薪资</div>
        <div>网络借贷平台借款余额：暂未提供</div>
        <div>借款人经营及财务状况：良好</div>
        <div>借款人还款能力变化：暂无变化</div>
        <div>借款人涉诉及受行政处罚情况：暂无信息</div>
      </div>
    </div>
    <div class="boxSection">
      <div class="sectionTitle"><span style="top:-10px;"><img src="/static/lend/dicon2.png"></span> 投标记录</div>
      <div class="toubiaoTb">
        <table>
          <thead>
            <tr>
              <th>投标人</th>
              <th>标的利率</th>
              <th>标的期限</th>
              <th>有效投标金额（元）</th>
              <th>投标时间</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>wer**234</td>
              <td>11.5%</td>
              <td>12个月</td>
              <td>433.00</td>
              <td>2018-01-01 10:23:33</td>
            </tr>
            <tr>
              <td>wer**234</td>
              <td>11.5%</td>
              <td>12个月</td>
              <td>433.00</td>
              <td>2018-01-01 10:23:33</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="boxSection" v-if="zhuanrangShow">
      <div class="sectionTitle"><span style="top:-10px;"><img src="/static/lend/dicon2.png"></span> 债权转让记录</div>
      <div class="toubiaoTb">
        <table>
          <thead>
          <tr>
            <th>原债权人</th>
            <th>转让债权金额（元）</th>
            <th>受让价格（元）</th>
            <th>受让人</th>
            <th>转让时间</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>wer**234</td>
            <td>550.00</td>
            <td>559.00</td>
            <td>skjhfau</td>
            <td>2018-01-01 10:23:33</td>
            <td><a href="" style="color: #d5041f;">协议</a></td>
          </tr>
          <tr>
            <td>wer**234</td>
            <td>550.00</td>
            <td>559.00</td>
            <td>skjhfau</td>
            <td>2018-01-01 10:23:33</td>
            <td><a href="" style="color: #d5041f;">协议</a></td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="boxSection" v-if="zhuanrangShow">
      <div class="sectionTitle"><span style="top:-10px;"><img src="/static/lend/dicon2.png"></span> 还款记录</div>
      <div class="toubiaoTb">
        <table>
          <thead>
          <tr>
            <th>还款日</th>
            <th>实际还款日</th>
            <th>未还金额/已还金额（元）</th>
            <th>未还本金（元）</th>
            <th>未还利息（元）</th>
            <th>逾期利息/天数</th>
            <th>还款状态</th>
            <th>债权转移</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>2018-02-12</td>
            <td>2018-02-19</td>
            <td>1212.20/0.00</td>
            <td>1212.20</td>
            <td>300.00</td>
            <td>0.00/-23天</td>
            <td>待还</td>
            <td></td>
          </tr>
          <tr>
            <td>2018-02-12</td>
            <td>2018-02-19</td>
            <td>1212.20/0.00</td>
            <td>1212.20</td>
            <td>300.00</td>
            <td>0.00/-23天</td>
            <td>待还</td>
            <td></td>
          </tr>

          </tbody>
        </table>
      </div>
    </div>



    <div class="boxSection">
      <div class="sectionTitle"><span><img src="/static/lend/dicon3.png"></span> 风险提示</div>
      <div class="fxts">
        利率不代表未来收益，实际收益根据借款人还款情况而定。当借款标的的借款人短期或者长期丧失还款能力，或者借款人的还款意愿发生变化时，借出人的本金和收益资金可能无法部分或全部回收。以上风险提示不能穷尽全部风险及市场的全部情形。
      </div>
    </div>
    <div class="boxSection" style="border-bottom: 0;">
      <div class="sectionTitle"><span><img src="/static/lend/dicon4.png"></span> 参考协议</div>
      <div class="fxts" >
        相关协议参考<a href="">《借款服务协议》</a> <a href="">《电子签章约定书》</a> <a href="">《出借风险告知书》</a>
      </div>
    </div>


  </div>



	<v-footer></v-footer>
	<!-- <nav-header :pageNo="1"></nav-header> -->

</div>
</template>

<script>
import VHeader from '/components/header/header'
import VFooter from '/components/footer/footer'



export default {
	name: 'app',
    data(){
        return {
          topImg:1,
          num1:'1000',

          sanbiaoShow:false,
          zhuanrangShow:false
        }
    },
	//  页面加载之前
	created() {},
	//  页面加载后
	mounted() {

    if(this.$utils.getUrlKey("type") == 'sanbiao'){
      this.sanbiaoShow = true;
    }else if(this.$utils.getUrlKey("type") == 'zhuanrang'){
      this.zhuanrangShow = true;
    }


	},
  methods:{

  },
	components: {
		// navHeader,
        VHeader,
        VFooter
	},
  watch:{

  }
}
</script>

<style scoped>

  .container{overflow-x:hidden;overflow-y:hidden;   position:relative; min-width:1200px; font-size: 0px;}
  .d{width:1920px; position:relative; left:50%; margin-left:-960px;}
  .containerbox{ position: relative; width: 1200px; min-width: 1200px; margin: 0 auto; margin-top: 20px; }

  .box{ border: 1px solid #dbdbdb; margin-bottom: 17px; }
  .box>ul{font-size: 0px;}
  .box>ul>li{ width: 25%; display: inline-block;height: 98px; vertical-align: top; position: relative; cursor:pointer;}
  .box>ul>li>div{font-size: 16px; text-indent: 117px; padding-top: 28px; color: #666;}
  .box>ul>li>div.subtitle{font-size: 14px; text-indent: 117px; padding-top: 2px; color: #666; }
  .tabImg{ position: absolute; left: -62px; top: 1px;}

  .box>ul>li.hit>div{font-size: 16px; text-indent: 117px; padding-top: 28px; color: #333;}
  .box>ul>li.hit>div.subtitle{font-size: 14px; text-indent: 117px; padding-top: 2px; color: #333; }

  .tab11{ background: url("/static/lend/11.png") no-repeat; width: 42px; height: 42px; }
  .tab22{ background: url("/static/lend/22.png") no-repeat; width: 42px; height: 42px; }
  .tab33{ background: url("/static/lend/33.png") no-repeat; width: 42px; height: 42px; }
  .tab44{ background: url("/static/lend/44.png") no-repeat; width: 42px; height: 42px; }

  .box>ul>li.hit .tab11{ background: url("/static/lend/1.png") no-repeat; width: 42px; height: 42px; }
  .box>ul>li.hit .tab22{ background: url("/static/lend/2.png") no-repeat; width: 42px; height: 42px; }
  .box>ul>li.hit .tab33{ background: url("/static/lend/3.png") no-repeat; width: 42px; height: 42px; }
  .box>ul>li.hit .tab44{ background: url("/static/lend/4.png") no-repeat; width: 42px; height: 42px; }


  .box{ border: 1px solid #dbdbdb;  background: #fff; width: 1200px; margin:20px auto;}
  .boxSection{ padding: 35px 50px 0px 50px; border-bottom: 1px solid #dbdbdb;  }
  .sectionTitle{ font-size: 16px; color: #666; position: relative; padding-left: 48px;}
  .sectionTitle>span{position:absolute; left: 0px; top: -6px;}
  .jkInfo{ margin-top: 45px; color: #666; display: table; width: 100%;}
  .jkInfo>div{float: left; width: 33%; margin-bottom: 42px;}

  .toubiaoTb{margin-top: 30px; border:1px solid #e5e5e5; margin-bottom: 34px;}

  .toubiaoTb table{ border-collapse: collapse; width: 100%;}
  .toubiaoTb table th{ text-align: center; padding: 12px 0; color: #fff; background: #d5041f;}
  .toubiaoTb table td{ text-align: center; padding: 12px 0; color: #666;}
  .toubiaoTb table tr:first-child td{padding-top: 30px;}
  .toubiaoTb table tr:last-child td{padding-bottom: 30px;}

  .fxts{ margin-top: 15px; color: #666; line-height: 30px; margin-bottom: 35px;}
  .fxts a{color:#d5041f;}

  .boxTop{display: table; width: 1200px; margin:20px auto; }
  .boxLeft{ float: left; width: 720px; height:248px; border:1px solid #dbdbdb; background: #fff; padding: 20px 20px 40px 30px; }

  .boxRight{float: right; width: 305px; height:238px; border:1px solid #dbdbdb; background: #fff; padding: 25px 50px 45px 50px;position: relative;}

  .jkTitle{font-size:18px; color: #000; border-bottom: 1px solid #ebebeb; padding-bottom: 10px; text-indent: 13px; }
  .jkRate{margin-top: 44px; width: 100%; font-size: 0; position: relative;}
  .jkRate>div{display: inline-block; width: 33%; font-size: 16px; text-align: center;}
  .rateDesc{ font-size: 14px; color: #999; margin-top: 10px;}

  .bigNum{ font-size: 30px; color:#333;}
  .bigNum2{ font-size: 30px; color: #d5041f; }

  .fgx{position: absolute; left: 250px; top: 15px; width: 2px; height: 50px; background: #ebebeb; display: block;}

  .jkDesc{ margin-top: 55px; display: table; width: 100%;}
  .jkDesc>div{ float: left; color: #666; font-size: 14px; margin-bottom: 20px;}

  .balance{ position: relative;}
  .balance>span{position: absolute; right: 0px;}
  .balance>span a{color:#ce0725;}
  .balanceCount{margin-top: 60px;}

  .el-input-number{width: 100%;}

  .revanul{ margin-top: 20px;}
  .balanceBtn{ margin-top: 50px; background: url("/static/lend/btn3bg.jpg") no-repeat; width: 309px; height: 42px; text-align: center; color: #fff; font-size: 18px; line-height: 42px; cursor: pointer;
  }
  .balanceBtn2{ margin-top: 50px; background: url("/static/lend/btn4bg.jpg") no-repeat; width: 309px; height: 42px; text-align: center; color: #fff; font-size: 18px; line-height: 42px; cursor: pointer;
  }

  .bread{width: 1200px; margin: 0 auto; margin-top:28px; }
  .full{position: absolute; left: 100px; top: 100px; z-index: 1000;}




</style>
