<template>
<div id="app">
	<v-header :pageNo="4"></v-header>
	<div class="wufu-container">
		<div class="active-wrapper">
			<div class="active-banner">
				<img src="/static/active/banner.png" alt="">
			</div>
			<div class="active-content">
				<ul>
					<li>
						<img src="/static/active/img-1.jpg" alt="">
					</li>
					<li>
						<img src="/static/active/img-2.jpg" alt="">
					</li>
					<li>
						<img src="/static/active/img-3.jpg" alt="">
					</li>
					<li>
						<img src="/static/active/img-4.jpg" alt="">
					</li>
					<li>
						<img src="/static/active/img-5.jpg" alt="">
					</li>
				</ul>
			</div>
			<div class="page-box">
				<el-pagination background layout="prev, pager, next" :total="1000">
				</el-pagination>
			</div>
		</div>
	</div>
	<v-footer></v-footer>
	<!-- <nav-header :pageNo="1"></nav-header> -->

</div>
</template>

<script>
import VHeader from '../../components/header/header'
import VFooter from '../../components/footer/footer'
// import navHeader from '../../components/headNav'


export default {
	name: 'app',
    data(){
        return {

        }
    },
	//  页面加载之前
	created() {},
	//  页面加载后
	mounted() {

	},
	components: {
		// navHeader,
        VHeader,
        VFooter
	}
}
</script>

<style lang="less">
.active-wrapper{
	padding-bottom:70px;
	.active-banner{
		img{
			display:block;
		}
	}
	.active-content{
		text-align: center;
		ul{
			text-align: center;
			li{
				text-align: center;
				padding-top:30px;
			}
		}
	}
}
</style>
