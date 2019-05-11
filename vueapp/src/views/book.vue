<template>
    <div>
        <!-- <swipe class="my-swipe">
            <swipe-item class="slide1"></swipe-item>
            <swipe-item class="slide2"></swipe-item>
            <swipe-item class="slide3"></swipe-item>
        </swipe> -->
        <slide :imgs="imgs" ></slide>
    </div>
</template>
<script>
    // import 'vue-swipe/dist/vue-swipe.css';
    // import { Swipe, SwipeItem } from 'vue-swipe';
    // export default {
    //     components: {
    //         Swipe,
    //         SwipeItem
    //     }
    // }
    // 自定义的轮播图组件 
    import Slide from '@/components/Slide.vue';
    export default {
        data(){
            return {
                imgs:[
                    "https://img3.doubanio.com/lpic/s24468373.jpg",
                    "https://img3.doubanio.com/lpic/s27102925.jpg",
                    "https://img3.doubanio.com/lpic/s6989253.jpg"
                ]
            }
        },
        components: {
            Slide
        }
    }
</script>

<style scoped>
/* .my-swipe {
  height: 200px;
  color: #fff;
  font-size: 30px;
  text-align: center;
}
.slide1 {
  background-color: green;
  color: #fff;
}
.slide2 {
  background-color: #ffd705;
  color: #000;
}
.slide3 {
  background-color: #ff2d4b;
  color: #fff;
} */
</style>