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
        <router-view/>
    </div>
</template>

<style>
</style>