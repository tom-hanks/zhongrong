<template lang="html">
  <div class="tabs-items-content">
    <!-- 工商信息 -->
    <div class="business-info">
        <h3>工商信息</h3>
        <ul class="commerce-information">
            <li v-for="(item,index) in businessData" :key="index">
                <p class="commerce-title">{{item.name}}</p>
                <p class="commerce-text">{{item.text}}</p>
            </li>
        </ul>
    </div>
    <!-- 平台证件 -->
    <div class="">
        <h3>平台证件</h3>
        <div>
            <my-swiper></my-swiper>
            <!-- <el-carousel :interval="4000" type="card" height="200px">
                <el-carousel-item v-for="item in 6" :key="item">
                  <h3>{{ item }}</h3>
                </el-carousel-item>
            </el-carousel> -->
        </div>
    </div>
    <!-- 股东信息 -->
    <div class="shareholder-info">
        <h3>股东信息</h3>
        <img src="/static/info/shareholder.png" alt="">
    </div>
    <!-- 组织架构 -->
    <div class="organizational-info">
        <h3>组织架构</h3>
        <img src="/static/info/organizational.png" alt="">
    </div>
    <!-- 从业人员概括 -->
    <div class="personnel-info">
        <h3>从业人员概括</h3>
        <p class="total-person">（员工人数：105人）</p>
        <img src="/static/info/personnel.png" alt="">
    </div>
    <!-- 分支机构信息 -->
    <div class="institutional-info">
        <h3>分支机构信息</h3>
        <div class="branch-content">
            <ul class="branch-title">
                <li v-for="(item,index) in branchTitle" :key="index">
                    <p>{{item.name}}</p>
                </li>
            </ul>
            <div class="">
                <ul v-for="(item,index) in branchData" :key="index">
                    <li v-for="(val,key,selfindex) in item" :key="selfindex">
                        <p>{{val}}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- 渠道信息 -->
    <div class="channel-info">
        <h3>渠道信息</h3>
        <ul>
            <li v-for="(item,index) in channelInfo" :key="index">
                <img :src="item.url" alt="">
                <p>item.name</p>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
import mySwiper from '../../../../../components/swiper/swiper'
export default {
    data(){
        return{
            businessData:[
                {
                    "name":"公司全称",
                    "text":"上海中融资产管理有限公司"
                },
                {
                    "name":"公司简称",
                    "text":"中融股份"
                },
                {
                    "name":"统一社会信用代码",
                    "text":"91310105350695260G"
                },
                {
                    "name":"注册资本(元)",
                    "text":"20000.0000万元人民币"
                },
                {
                    "name":"实缴注册资本（元）",
                    "text":"3000.000万元人民币"
                },
                {
                    "name":"注册地",
                    "text":"上海市黄浦区淮海东路45-49号15A08室"
                },
                {
                    "name":"经营地",
                    "text":"上海市黄浦区淮海东路45号14楼"
                },
                {
                    "name":"成立时间",
                    "text":"2015年8月27日"
                },
                {
                    "name":"经营期限",
                    "text":"2015年8月27日至2045年8月26日"
                },
                {
                    "name":"经营状态",
                    "text":"存续（在营、开业、在册）"
                },
                {
                    "name":"主要人员",
                    "text":"江峰（总经理，董事长）、丁思慧（董事）、杨明（董事）、冯蕾（董事）、蔡江鸿（董事）、费晓伟（监事）、陈敏（监事）、赵侃（监事）"
                },
                {
                    "name":"主要出资人及持股比例",
                    "text":"丁思慧出资比例70%，江峰出资比例25%，杨明出资比例5%"
                },
                {
                    "name":"经营范围",
                    "text":"资产管理，出借管理，金融信息服务（以上三项不得从事银行，证券，保险业务），商务咨询。[依法需经批准的项目，经相关部门批准后方可开展经营活动]"
                },
            ],
            branchTitle:[
                {"name":"机构全称"},
                {"name":"所在地"},
                {"name":"成立时间"},
                {"name":"主要负责人"},
                {"name":"联系电话"},
                {"name":"投诉电话"},
                {"name":"员工人数"}
            ],
            branchData:[
                {
                    "fullName":"上海中融资产管理股份有限公司奉贤分公司",
                    "location":"上海奉贤",
                    "establishmentTime":"2016-01-26",
                    "personCharge":"江峰",
                    "phone":"13061708021",
                    "complaintsHotline":"13061708021",
                    "employeesNum":"2"
                },
                {
                    "fullName":"上海中融资产管理股份有限公司青岛分公司",
                    "location":"青岛",
                    "establishmentTime":"2017-08-21",
                    "personCharge":"杨镇",
                    "phone":"0532-58780826",
                    "complaintsHotline":"13678895988",
                    "employeesNum":"3"
                },
                {
                    "fullName":"上海中融资产管理股份有限公司延边分公司",
                    "location":"延吉",
                    "establishmentTime":"2018-01-02",
                    "personCharge":"陈诚",
                    "phone":"0433-2435670",
                    "complaintsHotline":"13944342229",
                    "employeesNum":"1"
                },
                {
                    "fullName":"吉林华拓信息技术咨询服务有限公司",
                    "location":"长春",
                    "establishmentTime":"2017-12-06",
                    "personCharge":"宋淑英",
                    "phone":"0431-81697331",
                    "complaintsHotline":"17743028611",
                    "employeesNum":"2"
                },
                {
                    "fullName":"河北锦烨信息技术咨询有限公司",
                    "location":"石家庄",
                    "establishmentTime":"2017-12-08",
                    "personCharge":"韩强强",
                    "phone":"0311-83953562",
                    "complaintsHotline":"18032075550",
                    "employeesNum":"2"
                },
                {
                    "fullName":"江苏宏中信息咨询服务有限公司",
                    "location":"苏州",
                    "establishmentTime":"2017-12-15",
                    "personCharge":"冯安",
                    "phone":"0512-68625376",
                    "complaintsHotline":"18626269090",
                    "employeesNum":"3"
                },
                {
                    "fullName":"河北昶鼎企业管理咨询有限公司",
                    "location":"石家庄",
                    "establishmentTime":"2018-01-10",
                    "personCharge":"田庆霞",
                    "phone":"0311-88876651",
                    "complaintsHotline":"18932533798",
                    "employeesNum":"3"
                },
                {
                    "fullName":"安徽锦翔信息技术咨询有限公司",
                    "location":"蚌埠",
                    "establishmentTime":"2018-01-03",
                    "personCharge":"解崇文",
                    "phone":"0552-3182662",
                    "complaintsHotline":"18955270924",
                    "employeesNum":"2"
                }
            ],
            channelInfo:[
                {
                    "url":"/static/info/1.png",
                    "name":"鸿运五福(订阅号)"
                },
                {
                    "url":"/static/info/2.png",
                    "name":"中融五福(服务号)"
                },
                {
                    "url":"/static/info/3.png",
                    "name":"五福钱袋(订阅号)"
                },
                {
                    "url":"/static/info/4.png",
                    "name":"中融股份官微(服务号)"
                }
            ]
        }
    },
    components:{
        mySwiper
    }
}
</script>

<style lang="less">
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
