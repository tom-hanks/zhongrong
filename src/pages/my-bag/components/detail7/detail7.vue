<template lang="html">
<div class="bag-main-detail">
	<div class="breadcrumb-wrapper">
		<el-breadcrumb separator="/">
			<el-breadcrumb-item :to="{ path: '/' }">出借管理</el-breadcrumb-item>
			<el-breadcrumb-item>散标与债转标</el-breadcrumb-item>
		</el-breadcrumb>
	</div>
	<div class="detail-container">
		<div class="detail-tabs-box">
			<el-tabs v-model="activeName" @tab-click="handleClick">
			    <el-tab-pane label="散标" name="first">
					<div class="bill-container">
						<div class="mark-wrapper">
							<div class="mark-title">
								<p class="name">散标资产（元）</p>
								<p class="money">￥60000.00</p>
							</div>
							<asset></asset>
						</div>
					</div>
				</el-tab-pane>
			    <!-- <el-tab-pane label="债转标" name="second">
					<div class="bill-container">
						<div class="mark-wrapper">
							<div class="mark-title">
								<p class="name">债转标资产（元）</p>
								<p class="money">￥60000.00</p>
							</div>
							<asset></asset>
						</div>
					</div>
				</el-tab-pane> -->
			</el-tabs>
		</div>
	</div>
</div>
</template>

<script>
import asset from './assets.vue'
export default {
	data(){
		return{
			activeName: 'first',
		}
	},
	methods: {
	 	handleClick(tab, event) {
	   		console.log(tab, event);
		}
	},
	components: {
		asset
	}
}
</script>

<style lang="css">
</style>
