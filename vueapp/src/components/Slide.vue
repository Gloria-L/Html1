<template>
    <div>
        <transition-group>
            <li class="slide-item" v-for="(img,index) in imgs" :key="index" v-show="index == idx">
                <img :src="img"/>
            </li>
        </transition-group>
    </div>
</template>

<script>

    export default {
        props:['imgs'],
        data(){
            return{
                idx:0
            }
        }
    }
</script>

<style scoped>
    .slide-box{
        position: relative;
    }
    .slide-item{
        position: absolute;
        left: 0px;
        right: 0px;
        width:100%;
        height: 4rem;
    }
    .slide-item:first-child{
        display: block;
    }
    .slide-item img{
        width: 100%;
        height: 100%;
    }
    /* 过渡的动画 */
    .fade-enter{
        transform: translateX(-100%);
    }
    .fade-enter-active{
        transition: transform 1s;
    }
    .fade-enter-to{
        transform: translateX(0);
    }
    .fade-leave{
        transform: translateX(0);
    }
    .fade-leave-active{
        transition: transform 1s;
    }
    .fade-leave-to{
        transform: translateX(100%);
    }
</style>