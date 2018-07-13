<template lang="html">
  <div class="news-items">
  	<ul>
  		<li v-for="(item,index) in dataList" :key="index">
			<a :href="'/news-detail.html?num='+num+'&id=0'" :numIndex="num">{{item.text}}</a>
            <!-- <router-link to="/news-detail.html">{{item.text}}</router-link> -->
		</li>
  	</ul>
  </div>
</template>

<script>
import Bus from '../../../../common/bus.js'
export default {
    data(){
        return{
            num:'',
            dataList:[{"text":"急急急急急急"}]
        }
    },
    created:function(){
      this.num = this.$route.params.num;
        //console.log(this.num)
        if(this.num == 0){
            this.dataList=[{"text":"急急急急急急"}]
        }else if(this.num == 1){
            this.dataList=[{"text":"急急急急急急11111"}]
        }else if(this.num == 2){
            this.dataList=[{"text":"急急急急急急22222"}]
        }
    },
    mounted:function(){
     // alert(this.name);
    },
    watch:{
		$route(){
            this.num = this.$route.params.num;
            if(this.num == 0){
                this.dataList=[{"text":"急急急急急急"}]
            }else if(this.num == 1){
                this.dataList=[{"text":"急急急急急急11111"}]
            }else if(this.num == 2){
                this.dataList=[{"text":"急急急急急急22222"}]
            }
            Bus.$emit('numIndex',this.num);
            console.log('this.num',this.num)
            console.log('busa',Bus)
      }
	},
}
</script>

<style lang="css">
</style>
