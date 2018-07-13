<template lang="html">
<div class="bag-main-detail">
	<div class="breadcrumb-wrapper">
		<el-breadcrumb separator="/">
			<el-breadcrumb-item :to="{ path: '/' }">资金管理</el-breadcrumb-item>
			<el-breadcrumb-item>存管账户</el-breadcrumb-item>
		</el-breadcrumb>
	</div>
	<div class="detail-container">
		<div class="">
			<h3>存管账户</h3>
			<div class="depository-account">
				<el-form ref="form" :model="form" label-width="120px">
					<el-form-item label="客户姓名：">
						<el-input v-model="form.name" placeholder="请填写"></el-input>
					</el-form-item>
					<el-form-item label="开户行：">
						<el-select v-model="form.openBank" placeholder="请选择">
							<el-option label="区域一" value="shanghai"></el-option>
							<el-option label="区域二" value="beijing"></el-option>
						</el-select>
  					</el-form-item>
					<el-form-item label="开户行所在地：">
						<el-select v-model="form.openBankAddress" placeholder="请选择">
							<el-option label="区域一" value="shanghai"></el-option>
							<el-option label="区域二" value="beijing"></el-option>
						</el-select>
  					</el-form-item>
					<el-form-item label="支行名称：">
						<el-select v-model="form.bankBranch" placeholder="请选择">
							<el-option label="区域一" value="shanghai"></el-option>
							<el-option label="区域二" value="beijing"></el-option>
						</el-select>
  					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="onSubmit">保存</el-button>
						<el-button class="cancel">取消</el-button>
					</el-form-item>
				</el-form>
			</div>
			<div class="reminder">
				<p>温馨提示：</p>
				<ul>
					<li>
						1.需运营同志提供文案内容
					</li>
					<li>
						1.需运营同志提供文案内容
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>
</template>

<script>
export default {
	data() {
		return {
			form: {
				name: '',
				openBank: '',
				openBankAddress: '',
				bankBranch: '',
			}
		}
	},
	methods:{
		onSubmit(){
			
		}
	}
}
</script>

<style lang="css">
</style>
