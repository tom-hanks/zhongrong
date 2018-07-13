<template>
<div id="app">
	<v-header :pageNo="1"></v-header>
	<div class="container">
    <div class="d" v-show="topImg==1"><img src="/static/lend/lendtopbanner.jpg"> </div>
    <div class="d" v-show="topImg==2"><img src="/static/lend/lendtopbanner2.jpg"> </div>
  </div>

  3453434324



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
