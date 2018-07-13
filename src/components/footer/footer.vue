<template lang="html">
  <div class="footer">
  	<div class="footer-wrapper">
        <div class="footer-container float-clearfixed">
            <div class="footer-container-left float-clearfixed">
                <div v-for="(val,index) in list" :key="index">
                    <h2>{{val.titie}}</h2>
                    <ul>
                        <li v-for="(valItem,valIndex) in val.content" :key="valIndex">
                            <a :href="valItem.detailLink">{{valItem.name}}</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="footer-container-right">
                <div>
                    <h1 class="phone">400-992-5856</h1>
                    <p class="time">周一至周五（9:30-18:00）</p>
                </div>
                <div class="">
                    <ul>
                        <li>
                            <p>五福贷服务号</p>
                            <img src="/static/header/fuwuhao.png"/>
                        </li>
                        <li>
                            <p>五福贷订阅号</p>
                            <img src="/static/header/dingyuehao.png"/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="footer-copyright float-clearfixed">
            <ul>
                <li>
                    <a href="#">
                        <img src="/static/header/cnnic.png" alt="">
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="/static/header/cert.png" alt="">
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="/static/header/getseal.png" alt="">
                    </a>
                </li>
            </ul>
            <p>上海中融资产管理有限公司 版权所有    Copyright@2017 wufumoney.com,All Rights Reserved   沪ICP备15042800号-2    市场有风险 出借需谨慎</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            flag:false,
            num:'',
            list:[
                {
                    "titie":"关于我们",
                    "content":[
                        {
                            "name":"公司简介",
                            "detailLink":"/help-center.html#/companyProfile/0"
                        },
                        {
                            "name":"资质荣誉",
                            "detailLink":"/help-center.html#/companyProfile/1"
                        },
                        {
                            "name":"新闻中心",
                            "detailLink":"/help-center.html#/companyProfile/2"
                        },
                    ]
                },{
                    "titie":"安全保障",
                    "content":[
                        {
                            "name":"信息披露",
                            "detailLink":"/help-center.html/companyProfile/3"
                        },
                        {
                            "name":"平台公告",
                            "detailLink":"/help-center.html/companyProfile/4"
                        },
                        {
                            "name":"法律监管",
                            "detailLink":"/help-center.html/companyProfile/5"
                        },
                    ]
                },{
                    "titie":"帮助中心",
                    "content":[
                        {
                            "name":"新手指南",
                            "detailLink":"/help-center.html/companyProfile/6"
                        },
                        {
                            "name":"常见问题",
                            "detailLink":"/help-center.html/companyProfile/7"
                        },
                        {
                            "name":"联系客服",
                            "detailLink":"/help-center.html/companyProfile/8"
                        },
                    ]
                }
            ]
        }
    },
    created:function(){

    },
    methods:{

    },
    watch:{

	},
    mounted(){
       //  var timer = null;
       // $(".index_concat").hover(function () {
       //     timer = setTimeout(function () {
       //         $(".subul").show(1000);
       //     }, 500);
       // }, function () {
       //     clearTimeout(timer);
       //     $(".subul").hide(1000);
       // });
    }
}
</script>

<style lang="less">
@import 'footer.less';
</style>
