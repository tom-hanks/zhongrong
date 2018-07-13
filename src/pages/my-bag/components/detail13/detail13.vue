<template lang="html">
<div class="bag-main-detail detail13">
	<div class="breadcrumb-wrapper">
		<el-breadcrumb separator="/">
			<el-breadcrumb-item :to="{ path: '/' }">出借管理</el-breadcrumb-item>
			<el-breadcrumb-item>基本信息</el-breadcrumb-item>
		</el-breadcrumb>
	</div>
	<div class="detail-container">
		<div class="float-clearfixed">
			<h3>基本信息</h3>
			<div class="statistics-container1">
				<div id='basics-box' class="statistics-box">
					<el-radio-group v-model="labelPosition" size="small">
						</el-radio-group>
						<div style="margin: 10px;"></div>
						<el-form :label-position="labelPosition" label-width="130px" :model="formLabelAlign">
						<el-form-item label="名称：">
							<P>某某某</P>
							<!-- <el-input v-model="formLabelAlign.name"></el-input> -->
						</el-form-item>
						<el-form-item label="身份证号：">
							<!-- <el-input v-model="formLabelAlign.region"></el-input> -->
							<p>31313131444441321</p>
						</el-form-item>
						<el-form-item label="性别：">
							<!-- <el-input v-model="formLabelAlign.type"></el-input> -->
							<P>男</P>
						</el-form-item>
						<el-form-item label="出生日期：">
							<!-- <el-input v-model="formLabelAlign.type"></el-input> -->
							<P>1994-08-29</P>
						</el-form-item>
						<el-form-item label="年龄：">
							<!-- <el-input v-model="formLabelAlign.type"></el-input> -->
							<p>35岁</p>
						</el-form-item>
						<el-form-item label="民族：">
    						<el-select v-model="form.region" placeholder="请选择民族">
    						  <el-option label="汉族" value="shanghai"></el-option>
    						  <el-option label="区域二" value="beijing"></el-option>
    						</el-select>
  						</el-form-item>
						<el-form-item label="婚姻状况：">
    						<el-select v-model="form.region" placeholder="请选择婚姻状况">
    						  <el-option label="已婚" value="shanghai"></el-option>
    						  <el-option label="未婚" value="beijing"></el-option>
    						</el-select>
  						</el-form-item>
						<el-form-item label="最高学历：">
    						<el-select v-model="form.region" placeholder="请选择最高学历">
    						  <el-option label="区域一" value="shanghai"></el-option>
    						  <el-option label="区域二" value="beijing"></el-option>
    						</el-select>
  						</el-form-item>
						  <el-form-item label="现居住地址：">
						  		<el-select v-model="value" placeholder="请选择">
    									<el-option
    									  v-for="item in options"
    									  :key="item.value"
    									  :label="item.label"
    									  :value="item.value">
    									</el-option>
  								</el-select>
								  <el-select v-model="value" placeholder="请选择">
    									<el-option
    									  v-for="item in options"
    									  :key="item.value"
    									  :label="item.label"
    									  :value="item.value">
    									</el-option>
  								</el-select>
								  <el-select v-model="value" placeholder="请选择">
    									<el-option
    									  v-for="item in options"
    									  :key="item.value"
    									  :label="item.label"
    									  :value="item.value">
    									</el-option>
  								</el-select>
  						</el-form-item>
						  <el-form-item label="籍贯：">
						  		<el-select v-model="value" placeholder="请选择">
    									<el-option
    									  v-for="item in options"
    									  :key="item.value"
    									  :label="item.label"
    									  :value="item.value">
    									</el-option>
  								</el-select>
								  <el-select v-model="value" placeholder="请选择">
    									<el-option
    									  v-for="item in options"
    									  :key="item.value"
    									  :label="item.label"
    									  :value="item.value">
    									</el-option>
  								</el-select>
								  <el-select v-model="value" placeholder="请选择">
    									<el-option
    									  v-for="item in options"
    									  :key="item.value"
    									  :label="item.label"
    									  :value="item.value">
    									</el-option>
  								</el-select>
  						</el-form-item>
						<el-form-item label="住宅电话：">
							<el-input v-model="formLabelAlign.type"></el-input>
						</el-form-item>
						<el-form-item label="电子邮箱：">
							<el-input v-model="formLabelAlign.type"></el-input>
						</el-form-item>
						<el-form-item label="QQ：">
							<el-input v-model="formLabelAlign.type"></el-input>
						</el-form-item>
						<el-form-item label="微信：">
							<el-input v-model="formLabelAlign.type"></el-input>
						</el-form-item>
						<el-form-item label="邮政编码：">
							<el-input v-model="formLabelAlign.type"></el-input>
						</el-form-item>
						<el-form-item label="家庭供养人数：">
							<el-input v-model="formLabelAlign.type"></el-input>
						</el-form-item>
						<el-form-item label="个人描述：">
							<el-input type="textarea" v-model="formLabelAlign.desc"></el-input>
						</el-form-item>
							<el-button type="primary">修改资料</el-button>
					</el-form>
				</div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
// 33cc99    cc99cc
export default {
	name:'detail13',
  data() {
    return {
		labelPosition: 'left',//表单对齐方向
        formLabelAlign: {
          name: '',
          region: '',
		  type: '',
		  desc:''
		},
		form:{
          region: ''
		},
		options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
	};
  },
  mounted() {
   
  }
};
</script>

<style  scoped>
	#basics-box{
		padding: 15px 0 22px 50px;
	}
	
	#basics-box>>>.el-input__inner{
		width: 200px;
	}
	#basics-box>>>.el-form-item__content{
		margin-left: 185px!important;
	}
	
	#basics-box>>>.el-textarea__inner{
		width: 756px;
	}
	#basics-box>>>.el-form-item{
		margin-bottom: 4px;
	}
	#basic-box>>>.el-input{
		width: 200px;
	}
	#basics-box>>>.el-form-item__label{
		color:#999999;
		font-size: 14px;
		/* margin-right: 111px; */
	}
	#basics-box>>>.el-button{
		width: 180px;
		height: 36px;
		margin-top: 26px;
	}
</style>
