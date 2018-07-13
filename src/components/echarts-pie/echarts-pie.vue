<template lang="html">
<div class="">
	<p>饼状图</p>
	<div id="myChart" style="width: 600px;height:400px;"></div>
	<div id="myChart1" style="width: 600px;height:400px;display:inline-block;"></div>
	<div id="myChart2" style="width: 600px;height:400px;display:inline-block;"></div>
</div>
</template>

<script>
// import echarts from 'echarts'
export default {
	data(){
		return{
			myChart: {},
			myChart1: {},
			option:{
	            title: {text: 'ECharts 入门示例'},
            	tooltip: {},
	            legend: {
	                data:['销量']
	            },
	            xAxis: {
	                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
	            },
            	yAxis: {},
	            series: [{
	                name: '销量',
	                type: 'bar',
	                data: [5, 20, 36, 10, 10, 20]
	            }]
        	},
			option1:{
			    tooltip: {
			        trigger: 'item',
			        formatter: "{a} <br/>{b}: {c} ({d}%)"
			    },
			    legend: {
			        orient: 'vertical',
			        x: 'left',
			        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
			    },
			    series: [
			        {
			            name:'访问来源',
			            type:'pie',
			            radius: ['50%', '70%'],
			            avoidLabelOverlap: false,
			            label: {
			                normal: {
			                    show: false,
			                    position: 'center'
			                },
			                emphasis: {
			                    show: true,
			                    textStyle: {
			                        fontSize: '30',
			                        fontWeight: 'bold'
			                    }
			                }
			            },
			            labelLine: {
			                normal: {
			                    show: false
			                }
			            },
			            data:[
			                {value:335, name:'直接访问'},
			                {value:310, name:'邮件营销'},
			                {value:234, name:'联盟广告'},
			                {value:135, name:'视频广告'},
			                {value:1548, name:'搜索引擎'}
			            ]
			        }
			    ]
			},
			option2:{
			    tooltip: {
			        trigger: 'item',
			        formatter: "{a} <br/>{b}: {c} ({d}%)"
			    },
			    legend: {
			        orient: 'vertical',
			        x: 'left',
			        data:['直接访问','邮件营销']
			    },

			    series: [
			        {
			            name:'访问来源',
			            type:'pie',
			            radius: ['50%', '70%'],
			            avoidLabelOverlap: false,
			            label: {
			                normal: {
			                    show: true,
			                    position: 'center',
								formatter:function (argument) {
		                            var html;
		                            html='本月业绩\r\n\r\n'+'50单';
		                            return html;
		                        }
			                },
			                emphasis: {
			                    show: false,
			                    textStyle: {
			                        fontSize: '30',
			                        fontWeight: 'bold'
			                    }
			                },
							// formatter:function (argument) {
			                //             var html;
			                //             html='本月业绩\r\n\r\n'+'50单';
			                //             return html;
			                //         },
			            },
			            labelLine: {
			                normal: {
			                    show: false
			                }
			            },
			            data:[
			                {value:335, name:'直接访问'},
			                {value:310, name:'邮件营销'}
			            ]
			        }
			    ]
			}
		}
	},
	mounted(){
		this.myChart= echarts.init(document.getElementById('myChart'));
		this.myChart.setOption(this.option)
		this.myChart1= echarts.init(document.getElementById('myChart1'));
		this.myChart1.setOption(this.option1)
		this.myChart2= echarts.init(document.getElementById('myChart2'));
		this.myChart2.setOption(this.option2)
	},
	methods:{
		// myChart.setOption(this.option);
	},
	computed:{

	}
}
</script>

<style lang="css">
</style>
