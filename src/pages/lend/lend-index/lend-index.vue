<template>
<div id="app">
	<v-header :pageNo="1"></v-header>
	<div class="container">
    <div class="d" v-show="topImg==1"><img src="/static/lend/lendtopbanner.jpg"> </div>
    <div class="d" v-show="topImg==2"><img src="/static/lend/lendtopbanner2.jpg"> </div>
  </div>
  <div class="containerbox">
    <div class="box">
      <ul>
        <router-link v-for="(item,index) in routeLinks" tag="li" :to="item.path" :key="index">
          <div class="tabImg"><span :class="item.tabClass"></span></div>
          <div>{{item.title}}</div>
          <div class="subtitle">{{item.subTitle}}</div>
        </router-link>
      </ul>
    </div>

    <router-view></router-view>
  </div>

  <div style="position: absolute; display: none; height: 1236px; left: 50%; margin-left: -601px; top: 353px; opacity: .3"><img src="/static/lend/temp.jpg"></div>

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

         routeLinks:[
           {
             "title":"散标专区",
             "subTitle":"小额分散专业分控",
             "tabClass":"tab11",
             "path":"/sanbiao"
           },
           {
             "title":"散标转让",
             "subTitle":"二级市场收益高",
             "tabClass":"tab22",
             "path":"/sanbiaozhuanrang"
           },
           {
             "title":"福计划",
             "subTitle":"出借资金不闲置",
             "tabClass":"tab33",
             "path":"/fujihua"
           },
           {
             "title":"福计划转让",
             "subTitle":"灵活转让有保障",
             "tabClass":"tab44",
             "path":"/fujihuazhuarang"
           }
         ]
        }
    },
	//  页面加载之前
	created() {},
	//  页面加载后
	mounted() {
    this.routeInit();
	},
  methods:{
    routeInit(){
      if(this.$route.name == "fujihua" || this.$route.name == "fujihuazhuarang"){
        this.topImg = 2;
      }else if(this.$route.name == "sanbiao" || this.$route.name == "sanbiaozhuanrang"){
        this.topImg = 1;
      }
    }
  },
	components: {
		// navHeader,
        VHeader,
        VFooter
	},
  watch:{
	  $route(){
      console.log('aa',this.$route);
      this.routeInit();

    }
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


</style>
