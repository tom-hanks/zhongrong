<template lang="html">
<div id="basic-repay" class="basic-repay float-clearfixed">
    <div class="basic-repay-left fl">
        <div class="basic-repay-left-up" 
            v-bind:class="is_borrow?'bgcolor-red':'bgcolor-blue'">
            <P class="brrow" v-if="is_borrow">出借账户</P>
            <P class="brrow" v-if="!is_borrow">借款账户</P>
            <!-- 向右的三角形 -->
            <span class="triangle_border_right" v-bind:class="is_borrow?'bgcolor-right-red':'bgcolor-right-blue'">
            </span>
        </div>
        <div class="basic-repay-left-down"
        v-if="is_borrow"
         @click="isborrow()">
            借款账户
        </div>
        <div class="basic-repay-left-down"
        v-if="!is_borrow"
         @click="isborrow()">
            出借账户
        </div>
    </div>
    <div class="basic-repay-center fl">
        <div class="basic-repay-center-up">
                <div class="personal-img fl">
					<div class="">
						<img src="/static/my-bag/head.png" alt="">
						<div class="change-img">
							<span>点击更换</span>
						</div>
					</div>
					<p>某某某<i class="icon icon-grade"></i></p>
				</div>

                <div class="credit-box fr float-clearfixed">
					<span class="title fl">信用认证：</span>
					<div class="fl">
						<span class="credit"><i class="icon icon-person1"></i></span>
						<span class="credit"><i class="icon icon-person2"></i></span>
						<span class="credit"><i class="icon icon-person3"></i></span>
					</div>
				</div>
        </div>
        <div class="basic-repay-center-down">
                <p class="basic-money" v-bind:class="is_borrow?'color-red':'color-blue'">￥123,545.00</p>
                <p class="basic-balance">可用余额（元）</p>
                <div class="credit-btn">
					<a href="#" class="recharge"  v-bind:class="is_borrow?'':'bgcolor-blue'">充值</a>
					<a href="#" class="reflect"   v-bind:class="is_borrow?'':'color-blue border-blue'">提现</a>
				</div>
        </div>
        
    </div>
	<div class="basic-repay-right fr">
        <div class="basic-repay-right-up">
                <p class="basic-assets" 
                v-bind:class="is_borrow?'color-red':'color-blue'"
                >￥123,545.00</p>
                <p class="basic-assets-str"><i class="icon" v-bind:class="is_borrow?'icon-total-assets':'icon-total-assetsblue'"></i>总资产</p>
        </div>
        <div class="basic-repay-right-down">
            <div class="basic-repay-right-down-1 fl">
                <p class="basic-assets" v-bind:class="is_borrow?'color-red':'color-blue'">￥123,545.00</p>
                <p class="basic-assets-str"><i class="icon " v-bind:class="is_borrow?'icon-income':'icon-incomeblue'"></i>待收收益（元）</p>
            </div>
            <div class="basic-repay-right-down-2 fl">
                <p class="basic-assets" v-bind:class="is_borrow?'color-red':'color-blue'">￥123,545.00</p>
                <p class="basic-assets-str"><i class="icon" v-bind:class="is_borrow?'icon-principal':'icon-principalblue'"></i>待收本金（元）</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: "basic-info-repay",
  data() {
    return {
      is_borrow:true//默认出借
    };
  },
  methods:{
      isborrow(){
          this.is_borrow=!this.is_borrow;
      }
  }
};
</script>

<style lang="less">
.basic-repay {
  margin-top: 15px;
  .basic-repay-left {
    width: 91px;
    height: 350px;
    position: relative;
    .basic-repay-left-up {
      width: 100%;
      height: 250px;
      cursor: pointer;
      position: absolute;
      top: 0;
      left: 0;
      .triangle_border_right {
        width: 0;
        height: 0;
        border-width: 8px 10px 8px 9px;
        border-style: solid;
        margin: 40px auto;
        position: absolute;
        top: 0;
        right: -19px;
      }
      .brrow {
        text-align: center;
        color: #fff;
        font-size: 16px;
        margin-top: 37px;
      }
    }
    .basic-repay-left-down {
      width: 100%;
      height: 90px;
      line-height: 90px;
      font-size: 16px;
      cursor: pointer;
      color: #fff;
      background: #b1b1b1;
      position: absolute;
      bottom: 0;
      left: 0;
      text-align: center;
    }
  }
  .basic-repay-center {
    width: 596px;
    height: 350px;
    margin-left: 12px;
    border: 1px solid #e3e3e3;
    box-sizing: border-box;
    padding: 0 22px;
    .basic-repay-center-up {
      height: 147px;
      width: 100%;
      border-bottom: 1px solid #e3e3e3;
      position: relative;
      .personal-img {
        text-align: center;
        position: absolute;
        bottom: 15px;
        left: 15px;
        > div {
          position: relative;
          cursor: pointer;
          img {
            width: 70px;
            height: 70px;
            border-radius: 50%;
          }
          .change-img {
            display: none;
            position: absolute;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            top: -2px;
            left: 0;
            border-radius: 50%;
            text-align: center;
            line-height: 70px;
            span {
              color: #fff;
            }
          }
          &:hover {
            .change-img {
              display: block;
            }
          }
        }
        > p {
          font-size: 16px;
          line-height: 20px;
          color: #333333;
          margin-top: 8px;
          > i {
            vertical-align: middle;
            margin-left: 5px;
          }
        }
      }
      .credit-box {
        line-height: 36px;
        position: absolute;
        right: 0;
        bottom: 0;
        .title {
          font-size: 14px;
          color: #999999;
          margin-right: 15px;
        }
        div {
          .credit {
            margin-right: 10px;
          }
        }
      }
    }
    .basic-repay-center-down {
      height: 200px;
      width: 100%;
      box-sizing: border-box;
      padding-top: 55px;
      position: relative;
      .basic-money {
        font-size: 20px;
        text-align: center;
      }
      .basic-balance {
        text-align: center;
        font-size: 14px;
        color: #999999;
        margin-top: 6px;
      }
      .credit-btn {
        position: absolute;
        left: 50%;
        bottom: 20px;
        transform: translateX(-50%);
        a {
          height: 40px;
          width: 88px;
          line-height: 40px;
          text-align: center;
          border-radius: 4px;
          &.recharge {
            background: #d5041f;
            color: #fff;
            margin-right: 8px;
          }
          &.reflect {
            border: 1px solid #d5041f;
            color: #d5041f;
            background: #fff;
          }
        }
      }
    }
  }
  .basic-repay-right {
    width: 488px;
    height: 348px;
    border: 1px solid #e3e3e3;
    i.icon {
          margin-right: 10px;
          vertical-align: middle;
        }
    .basic-repay-right-up {
      height: 196px;
      width: 100%;
      box-sizing: border-box;
      padding-top: 75px;
      .basic-assets {
        text-align: center;
        font-size: 20px;
        color: #333333;
      }
      .basic-assets-str {
        line-height: 20px;
        font-size: 14px;
        color: #999999;
        text-align: center;
        margin-top: 10px;
      }
    }
    .basic-repay-right-down {
      height: 152px;
      width: 100%;
      border-top: 1px solid #e3e3e3;
      .basic-repay-right-down-1 {
        width: 49%;
        height: 152px;
        box-sizing: border-box;
        padding-top: 44px;
        border-right: 1px solid #e3e3e3;
        .basic-assets {
          text-align: center;
          font-size: 20px;
          color: #333333;
        }
        .basic-assets-str {
          line-height: 20px;
          font-size: 14px;
          color: #999999;
          text-align: center;
          margin-top: 10px;
        }
      }
      .basic-repay-right-down-2 {
        width: 49%;
        height: 152px;
        box-sizing: border-box;
        padding-top: 44px;
        .basic-assets {
          text-align: center;
          font-size: 20px;
          color: #333333;
        }
        .basic-assets-str {
          line-height: 20px;
          font-size: 14px;
          color: #999999;
          text-align: center;
          margin-top: 10px;
        }
      }
    }
  }
}
</style>
