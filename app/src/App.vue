<template>
    <div>
        <div id="app">
            <router-link to="/home">首页 </router-link>
            <router-link to="/a">a页面 </router-link>    
            <!-- 传参：params -->
            <router-link :to="{name:'b',params:{name:'zs',id:111}}">b页面 </router-link>   
            <router-link to="/c/666">c页面 </router-link>  
             <!-- 页面重定向 -->
            <router-link to="/b/888">重定向c页面 </router-link>  
             <!-- 用户看起来像在访问xxx但其实已经跳转到home了 -->
            <router-link to="/xxx">别名 </router-link>   
        </div>
        <transition name="fade">
          <router-view/>
        </transition>

        <button @click="goPrev()">&lt;</button>
        <button @click="goNext()">&gt;</button>
        <button @click="goHome()">home</button>

    </div>
</template>

<script>
export default {
  methods:{
    goPrev(){
      this.$router.go(-1);
    },
    goNext(){
      this.$router.go(1);
    },
    goHome(){
      this.$router.push('/');
    }
  }
}
</script>


<style>
  /* 进来之前 */
  .fade-enter{
    /* opacity: 0; */
    transform: translateX(-100%);
  }
  /* 进来的过渡动画 */
  .fade-enter-active{
    transition: transform 1s;
  }
  /* 进来之后 */
  .fade-enter-to{
    transform: translateX(0);
  }
  /* 离开之前 */
  .fade-leave{
    transform: translateX(0);
  }
  /* 离开的过渡动画 */
  .fade-leave-active{
    transition: transform 1s;
  }
  /* 离开之后 */
  .fade-leave-to{
    transform: translateX(100%);
  }
</style>