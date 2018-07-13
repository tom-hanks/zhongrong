<template lang="html">
	<div id="certify">
		<swiper :options="swiperOption" ref="mySwiper">
			<swiper-slide>
				<img src="/static/info/jian-1.png" alt="">
			</swiper-slide>
			<swiper-slide>
				<img src="/static/info/jian-2.png" alt="">
			</swiper-slide>
			<swiper-slide>
				<img src="/static/info/jian-3.png" alt="">
			</swiper-slide>
			<div class="swiper-button-prev" slot="button-prev"></div>
			<div class="swiper-button-next" slot="button-next"></div>
		</swiper>
	</div>
</template>

<script>
import {swiper,swiperSlide} from 'vue-awesome-swiper'
export default {
	data(){
		return{
			swiperOption:{
				watchSlidesProgress: true,
				slidesPerView: 'auto',
				centeredSlides: true,
				loop: true,
				loopedSlides: 5,
				autoplay: true,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				pagination: {
					el: '.swiper-pagination',
					//clickable :true,
				},
				on: {
					progress: function(progress) {
						// console.log(progress)
						let _this = this;
						console.log('_this',_this)
						console.log('_this.slides.length',_this.slides.length)
						for (let i = 0; i < _this.slides.length; i++) {
							let slide = _this.slides.eq(i);
							let slideProgress = _this.slides[i].progress;
							console.log()
							let modify = 1;
							if (Math.abs(slideProgress) > 1) {
								modify = (Math.abs(slideProgress) - 1) * 0.12 + 1;
							}
							let translate = slideProgress * modify * 331 + 'px';
							let scale = 1 - Math.abs(slideProgress) / 5;
							let zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
							slide.transform('translateX(' + translate + ') scale(' + scale + ')');
							slide.css('zIndex', zIndex);
							slide.css('opacity', 1);
							if (Math.abs(slideProgress) > 3) {
								slide.css('opacity', 0);
							}
						}
					},
					setTransition: function(transition) {
						let _this = this;
						console.log(_this.slides.length)
						for (let i = 0; i < _this.slides.length; i++) {
							let slide = _this.slides.eq(i)
							slide.transition(transition);
						}
					}
				}
            }
		}
	},
	computed:{
         // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
        swiper() {
            return this.$refs.mySwiper.swiper
            console.info(this.$refs.mySwiper.swiper)
        }
    },
	components:{
        swiper,
        swiperSlide
    },
}
</script>

<style lang="less">
#certify {
	position: relative;
	max-width: 1200px;
	margin: 0 auto
}

#certify  .swiper-slide {
	max-width: 520px;
	max-height:364px;
	overflow: hidden;
	background: #fff;
	box-shadow: 0 8px 30px #ddd;
}
#certify  .swiper-slide img{
	display:block;
}
#certify  .swiper-slide p {
	line-height: 98px;
	padding-top: 0;
	text-align: center;
	color: #636363;
	font-size: 1.1em;
	margin: 0;
}

#certify .swiper-pagination {
	width: 100%;
	bottom: 20px;
}

#certify .swiper-pagination-bullets .swiper-pagination-bullet {
	margin: 0 5px;
	border: 3px solid #fff;
	background-color: #d5d5d5;
	width: 10px;
	height: 10px;
	opacity: 1;
}

#certify .swiper-pagination-bullets .swiper-pagination-bullet-active {
	border: 3px solid #00aadc;
	background-color: #fff;
}



#certify .swiper-button-prev:hover {
	background: url(/static/common/prev-active.png) no-repeat;
}



#certify .swiper-button-next:hover {
	background: url(/static/common/next-active.png) no-repeat;
}
#certify .swiper-button-prev {
	background: url(/static/common/prev.png) no-repeat;
}
#certify .swiper-button-next {
	background: url(/static/common/next.png) no-repeat;
}
</style>
