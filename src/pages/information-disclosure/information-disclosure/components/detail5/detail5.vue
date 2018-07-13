<template lang="html">
  <div class="tabs-items-content">
  	<div class="major-matters">
        <h3>重大事项</h3>
        <ul class="commerce-information">
            <li v-for="(item,index) in commerceData" :key="index">
                <p class="commerce-title">{{item.title}}：</p>
                <p class="commerce-text">{{item.text}}</p>
            </li>
        </ul>
     </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            commerceData:[
                {"title":"公司减资、合并、分立、解散或申请破产","text":"无"},
                {"title":"公司依法进入破产程序","text":"无"},
                {"title":"公司被责令停业、整顿、关闭","text":"无"},
                {"title":"公司涉及重大诉讼、仲裁，或涉嫌违法违规被有权机关调查，或收到刑事处罚、重大行政处罚","text":"无"},
                {"title":"公司法定代表人、实际控制人、主要负责人、董事、监事、高级管理人员涉及重大诉讼、仲裁，或涉嫌违法违纪被有权机关调查，或收到刑事处罚、重大行政处罚，或被采取强制措施","text":"无"},
                {"title":"公司主要或者全部业务陷入停顿","text":"无"},
                {"title":"存在欺诈、损害出借人利益等其他影响网络借贷信息中介机构经营活动的重大事项","text":"无"}
            ]
        }
    }
}
</script>

<style lang="css">
</style>
