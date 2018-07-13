<template lang="html">
  <div class="tabs-items-content">
  	<!-- 经营信息 -->
    <div class="management-info">
        <h3>经营信息</h3>
        <p>数据截至至2018年06月12日，来源于五福贷内部统计</p>
        <ul class="commerce-information">
            <li v-for="(item,index) in commerceData" :key="index">
                <p class="commerce-title">{{item.title}}：</p>
                <p class="commerce-text">{{item.text}}</p>
            </li>
        </ul>
    </div>
    <!-- 收费标准 -->
    <div class="charge-standard">
        <h3>收费标准</h3>
        <div class="branch-content">
            <ul class="branch-title">
                <li v-for="(item,index) in chargeTitle" :key="index">
                    <p>{{item.name}}</p>
                </li>
            </ul>
            <div class="">
                <ul>
                    <li v-for="(item,index) in chargeText" :key="index">
                        <p>{{item.text}}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            commerceData:[
                {
                    "title":"自成立以来的累计成交金额",
                    "text":"2795195.95元"
                },
                {
                    "title":"自成立以来的累计成交笔数",
                    "text":"372"
                },
                {
                    "title":"借贷余额",
                    "text":"403300元"
                },
                {
                    "title":"借贷余额笔数：",
                    "text":"189"
                },
                {
                    "title":"关联关系借款笔数",
                    "text":"189"
                },
                {
                    "title":"利息余额：",
                    "text":"139470.17元"
                },
                {
                    "title":"累计出借人数量：",
                    "text":"72"
                },
                {
                    "title":"累计借款人数量：",
                    "text":"29"
                },
                {
                    "title":"当前出借人数量",
                    "text":"21"
                },
                {
                    "title":"当前借款人数量",
                    "text":"26"
                },
                {
                    "title":"前十大借款人待还金额占比",
                    "text":"63.90%"
                },
                {
                    "title":"最大单一借款人待还金额占比",
                    "text":"11.06%"
                },
                {
                    "title":"关联关系借款余额笔数",
                    "text":"0"
                },
                {
                    "title":"逾期金额",
                    "text":"0"
                },
                {
                    "title":"逾期笔数",
                    "text":"0"
                },
                {
                    "title":"逾期90天(不含)以上金额",
                    "text":"0"
                },
                {
                    "title":"逾期90天(不含)以上笔数",
                    "text":"0"
                },
                {
                    "title":"累计代偿金额",
                    "text":"0"
                },
                {
                    "title":"累计代偿笔数",
                    "text":"0"
                },
                {
                    "title":"项目逾期率",
                    "text":"0"
                },
                {
                    "title":"金额逾期率",
                    "text":"0"
                }
            ],
            chargeTitle:[
                {"name":"充值手续费"},
                {"name":"提现手续费"},
                {"name":"出借人服务费收费标准"},
                {"name":"借款人借款管理费收费标准"}
            ],
            chargeText:[
                {"text":"对出借人与借款人暂时免费；"},
                {"text":"充值未出借部分的金额将收取5%提现手续费；"},
                {"text":"对出借人与借款人暂时免费；"},
                {"text":"一次性收取借款本金的5%"},
            ]
        }
    }
}
</script>

<style lang="css">
</style>
