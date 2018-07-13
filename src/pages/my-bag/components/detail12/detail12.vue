<template lang="html">
<div class="bag-main-detail">
	<div class="breadcrumb-wrapper">
		<el-breadcrumb separator="/">
			<el-breadcrumb-item :to="{ path: '/' }">出借管理</el-breadcrumb-item>
			<el-breadcrumb-item>出借统计</el-breadcrumb-item>
		</el-breadcrumb>
	</div>
	<div class="detail-container">
		<div class="float-clearfixed">
			<h3>出借统计</h3>
			<div class="statistics-container">
				<div class="statistics-box">
					<div class="float-clearfixed">
						<p class="statistics">数据统计：实时</p>
					</div>
					<div class="chartWrapper">
						<div class="chartLegend">
							<ul>
								<li>
									<p class="name">福计划</p>
									<p class="money">￥0.00</p>
								</li>
								<li>
									<p class="name">福计划转让</p>
									<p class="money">￥0.00</p>
								</li>
								<li class="tips">
									<p class="name">散标</p>
									<p class="money">￥0.00</p>
								</li>
								<li class="tips">
									<p class="name">债转标</p>
									<p class="money">￥0.00</p>
								</li>
								<li>
									<p class="name">其它</p>
									<p class="money">￥0.00</p>
								</li>
								<li>
									<p class="name">可用余额</p>
									<p class="money">￥0.00</p>
								</li>
								<li>
									<p class="name">投标中金额</p>
									<p class="money">￥0.00</p>
								</li>
								<li>
									<p class="name">提现中金额</p>
									<p class="money">￥0.00</p>
								</li>
							</ul>
						</div>
						<div class="chartBox">
							<!-- 图 -->
							<div id="statisticsChart" style="width:100%;height:400px;display:inline-block;"></div>
						</div>
					</div>

				</div>
				<div class="statistics-box">
					<div class="bill-container float-clearfixed">
						<div class="dataTime1">
							<el-date-picker v-model="value" type="date" placeholder="选择日期1" prefix-icon="icon icon-data"></el-date-picker>
							<span>-</span>
							<el-date-picker v-model="value" type="date" placeholder="选择日期" prefix-icon="icon icon-data"></el-date-picker>
						</div>
					</div>
					<div id="myChart" style="width:100%;height:400px;display:inline-block;"></div>
				</div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
// 33cc99    cc99cc
export default {
	data(){
		return{
			myChart: {},
			statisticsChart: {},
			value: '',
			legendData:[
			            {
			                name:'福计划',
			                icon:'',
							value:10,
			            },
			            {
			                name:'福计划转让',
			                icon:'',
							value:20,
			            },
						{
			                name:'散标',
			                icon:'image:///static/common/tip.png',
							value:10,
			            },{
			                name:'债转标',
			                icon:'image:///static/common/tip.png',
							value:10,
			            },{
			                name:'其它',
			                icon:'',
							value:10,
			            },
						{
			                name:'可用余额',
			                icon:'',
							value:10,
			            },
						{
			                name:'投标中金额',
			                icon:'',
							value:10,
			            },
						{
			                name:'体现中金额',
			                icon:'',
							value:20,
			            },
			        ],
			option :{
			    tooltip: {
			        trigger: 'axis'
			    },
			    legend: {
					bottom: 0,
			        data:['累计年化收益率','当月年化收益率']
			    },
			    xAxis: {
					type: 'category',
					boundaryGap: false,
					data: ['2018-01','2018-02','2018-03','2018-04','2018-05'],
					axisLine:{
						lineStyle:{
							color:'#ccc',
						}
					},
					axisLabel:{
						color:'#000'
					},
			    },
			    yAxis: {
			        type: 'value',
					splitLine:{show: false},
			        axisLabel: {
						color:'#000',
			            formatter: '{value} %'
			        },
					axisLine:{
						lineStyle:{
							color:'#fff'
						}
					},
					splitLine:{
						type:'dotted'
			        }
			    },
			    series: [
			        {
			            name:'累计年化收益率',
			            type:'line',
						symbolSize:10,
						symbol:'circle',
						color:['#cc99cc'],
			            data:[7, 20, 25, 17, 18],
						itemStyle : {
                            normal : {
                                lineStyle:{
                                    color:'#cc99cc'
                                }
                            }
                        },
			        },
			        {
			            name:'当月年化收益率',
			            type:'line',
						symbolSize:10,
						symbol:'circle',
						color:['#33cc99'],
			            data:[3, 10, 8, 7, 13],
						itemStyle : {
                            normal : {
                                lineStyle:{
                                    color:'#33cc99'
                                }
                            }
                        },
			        }
			    ]
			},
			statisticsOption: {
				title: { //标题
			        text: '总资产(元)',
					subtext:"¥1,230.82",//主标题的副标题文本内容，如果需要副标题就配置这一项
					left:200,
					textAlign:'center',
					textStyle:{//标题内容的样式
						color:'#b5b5b6',
                    	fontSize:17,
						fontWeight:'normal',
						icon:'image:///static/common/tip.png',
                	},
					subtextStyle:{//副标题内容的样式
						color:'#333',//绿色
						fontSize:30//主题文字字体大小，默认为12px
					},
			    },
			    legend: {//右侧
					// show:false,
			        orient: 'horizontal',
			        x: 'right',
					right: '14%',
					top:80,
					itemWidth: 0,
					itemHeight: 0,
					itemGap: 0,
					width:620,
					opacity:0,
					// data: [{
					// 		name:'福计划',icon:'pie',textStyle:{
					// 			fontSize:12,
			        //             fontWeight:'bolder',
			        //             color:'#fff',
					// 			icon:'image:///static/common/tip.png'
					// 		}
					// 	},{
					// 		name:'福计划转让',icon:'',
					// 	},{
					// 		name:'散标',icon:'image:///static/common/tip.png'
					// 	},{
					// 		name:'债转标',icon:'image:///static/common/tip.png'
					// 	},{
					// 		name:'其它',icon:''
					// 	},{
					// 		name:'可用余额',icon:''
					// 	},{
					// 		name:'投标中金额',icon:''
					// 	},{
					// 		name:'体现中金额',icon:''
					// 	}],
					formatter:  function(name){
						console.log(name)
	                    var total = 0;
	                    var target;
						var data = [{
				                name:'福计划',icon:'',value:10,
				            },{
				                name:'福计划转让',icon:'',value:20,
				            },{
				                name:'散标',icon:'image:///static/common/tip.png',value:10,
				            },{
				                name:'债转标',icon:'image:///static/common/tip.png',value:10,
				            },{
				                name:'其它',icon:'',value:10,
				            },{
				                name:'可用余额',icon:'',value:10,
				            },{
				                name:'投标中金额',icon:'',value:10,
				            },{
				                name:'体现中金额',icon:'',value:20,
				            }];
						for (var i = 0, l = data.length; i < l; i++) {
							total += data[i].value;
								if (data[i].name == name) {
									target = data[i].value;
								}
							}
	                    var arr = ['{a|'+name+'}','{b|￥'+target+'}']
                    	return arr.join('\n')
                	},
					textStyle:{
					   rich:{
						   a:{
							   fontSize:14,
							   verticalAlign:'top',
							   align:'left',
							   color:'rgba(0,0,0,0)',
							   padding:[0,0,27,0],
							   width:190,
						   },
						   b:{
							   fontSize:0,
							   align:'left',
							   color:'rgba(0,0,0,0)',
							   lineHeight:45,
						   }
					   }
				   }
			    },
			    series: [
			        {
			            name:'',
			            type:'pie',
			            radius: ['40%', '55%'],
						center: ['20%', '60%'],
			            avoidLabelOverlap: false,
			            label: {
			                normal: {
			                    show: false,
			                    position: 'center'
			                },
			                emphasis: {//饼中内容
			                    show: true,
			                    textStyle: {
			                        fontSize: '18',
			                        fontWeight: 'normal',
			                    },
								formatter:'{b} \n {d}%'
			                },
			            },
			            labelLine: {
			                normal: {
			                    show: true
			                }
			            },
			            data:[
			                {value:10, name:'福计划'},
			                {value:20, name:'福计划转让'},
			                {value:10, name:'散标'},
			                {value:10, name:'债转标'},
			                {value:10, name:'其它'},
			                {value:10, name:'可用余额'},
			                {value:10, name:'投标中金额'},
			                {value:20, name:'体现中金额'},
			            ]
			        }
			    ]
			},
		}
	},
	mounted() {
		this.myChart = echarts.init(document.getElementById('myChart'));
		this.myChart.setOption(this.option)
		this.statisticsChart = echarts.init(document.getElementById('statisticsChart'));
		this.statisticsChart.setOption(this.statisticsOption)
	}
}
</script>

<style lang="less" scoped>
.chartWrapper{
	font-size:0;
	position: relative;
	>div{
		display:inline-block;
		width: 100%;
		vertical-align: top;
		&.chartBox{
		}
		&.chartLegend{
			// position: absolute;
			// margin-top:70px;
			    position: absolute;
		    margin-top: 80px;
		    left: 48%;
		    top: 12px;
		    width: 50%;
			ul{
				font-size:0;
				li{
					display: inline-block;
					width:33.33%;
					padding:16px 0;
					cursor: pointer;
					.name{
						position: relative;
						display: inline-block;
						font-size:17px;
						color:#b5b5b6;
					}
					.money{
						font-size:20px;
						padding-top:10px;
					}
					&.tips{
						.name{
							position: relative;
							&::after{
								position:absolute;
								display: block;
								content:'';
								width:14px;
								height:14px;
								right:-20px;
								top:0;
								background:url(/static/common/tip.png)
							}
						}
					}
				}
			}
		}
	}
}
</style>
