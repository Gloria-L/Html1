<template>
    <div>
        <transition-group name="fade" tag="ul" class="slide-box">
            <li class="slide-item" v-for="(img,index) in imgs" :key="index" v-show="index == idx ">
                <img :src="img"/>
            </li>
        </transition-group>
    </div>
</template>
<script>
// [
//                     "https://img3.doubanio.com/lpic/s24468373.jpg",
//                     "https://img3.doubanio.com/lpic/s27102925.jpg",
//                     "https://img3.doubanio.com/lpic/s6989253.jpg"
//                 ],
    export default {
        props:['imgs'],
        data(){
            return {
                idx:0
            }
        },
        created() {
            setInterval(() => {
                this.idx++;
                if(this.idx == this.imgs.length ){
                    this.idx = 0;
                }
            }, 1000);
        },
    }
</script>

<style scoped>
    .slide-box{
        position: relative;
        overflow: hidden;
        height:4rem;
    }
    .slide-item{
        position: absolute;
        left:0px;
        top:0px;
        width:100%;
        height:4rem;
        /* display: none; */
    }
    /* .slide-item:first-child{
        z-index:2;
    } */
    .slide-item:first-child{
        display: block;
    }
    .slide-item img{
        width:100%  ;
        height:100%;
    }
    /* 过度的动画  */
    .fade-enter{
        transform: translateX(-100%);
    }
    .fade-enter-active{
        transition:transform 1s;
    }
    .fade-enter-to{
        transform: translateX(0);
    }
    .fade-leave{
        transform: translateX(0);
    }
    .fade-leave-active{
        transition:transform 1s;
    }
    .fade-leave-to{
        transform: translateX(100%);
    }
    
</style>