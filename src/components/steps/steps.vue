<template lang="html">
	<div class="step-wrapper">
		<div>
			<ul>
				<li class="active" v-for="(item,index) in stepData" :key="index">
					<span></span>
					<div class="">
						<p>{{item.text}}</p>
					</div>
				</li>
				<!-- <li>
					<span></span>
					<div class="">
						<p>资金信息</p>
					</div>
				</li>
				<li>
					<span></span>
					<div class="">
						<p>出借管理</p>
					</div>
				</li>
				<li>
					<span></span>
					<div class="">
						<p>借款管理</p>
					</div>
				</li>
				<li>
					<span></span>
					<div class="">
						<p>市场推广</p>
					</div>
				</li> -->
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return{
			stepData:[
				{text:"账户信息"},
				{text:"资金信息"},
				{text:"出借管理"},
				{text:"借款管理"},
				{text:"市场推广"}
			]
		}
	}
}
</script>

<style lang="less">
.step-wrapper{
	// margin:40px;
	div{
		ul{
			li{
				height: 40px;
				padding-bottom:20px;
				span{
					width:10px;
					height:10px;
					border:2px solid #d5041f;
					background:#fff;
					border-radius: 50%;
					position: relative;
					margin:4px 0;
					&::after{
						position:absolute;
						display: block;
						content:'';
						height: 38px;
						width: 2px;
						background:#d5041f;
						top:16px;
						left:4px;
					}
				}
				div{
					display: inline-block;
					padding-left:24px;
					vertical-align: top;
					p{
						font-size:14px;
						color:#333;
					}
				}
				&:last-child{
					span{
						&::after{
							width: 0px;
						}
					}
				}
				&.active{
					span{
						background:#d5041f;
					}
					div{
						p{
							color:#d5041f;
						}
					}
				}
			}
		}
	}
}
</style>
