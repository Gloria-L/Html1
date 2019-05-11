<template>
    <div>
        <!-- <swipe class="my-swipe">
            <swipe-item class="slide1"></swipe-item>
            <swipe-item class="slide2"></swipe-item>
            <swipe-item class="slide3"></swipe-item>
        </swipe> -->
    </div>
</template>
<script>
import SlideVue from "../components/Slide.vue";

    // require('vue-swipe/dist/vue-swipe.css');
    // import { Swipe, SwipeItem } from 'vue-swipe';
    // export default {
    //     components: {
    //         Swipe,
    //         SwipeItem
    //     }
    // }
    <slide></slide>
</script>

<style scoped>
.my-swipe {
  height: 200px;
  color: #fff;
  font-size: 30px;
  text-align: center;
}
.slide1 {
  background-color: brown;
  color: #fff;
}
.slide2 {
  background-color: darksalmon;
  color: #000;
}
.slide3 {
  background-color: plum;
  color: #fff;
}
</style>