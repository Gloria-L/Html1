<template>
  <div id="app">
    <common-header :selectMenu="selectMenu"></common-header>
    <div id="content">
      <router-view></router-view>
    </div>
    <common-footer :menu="menu" :selectMenu="selectMenu" @change="fn"></common-footer>
  </div>
</template>

<script>
import CommonHeader from "@/components/CommonHeader.vue";
import CommonFooter from "@/components/CommonFooter.vue";

export default {
  data() {
    return {
      menu: [
        {
          name: "电影",
          path: "/movie",
          bg: "#f00"
        },
        {
          name: "音乐",
          path: "/music",
          bg: "#00ffee"
        },
        {
          name: "图书",
          path: "/book",
          bg: "#feef00"
        },
        {
          name: "图片",
          path: "/photo",
          bg: "#fabbaa"
        }
      ],
      selectMenu:{
          name: "电影",
          path: "/movie",
          bg: "#f00"
        },
    };
  },
  components: {
    CommonHeader,
    CommonFooter
  },
  methods: {
    fn(index){
      // console.log(index);
      this.selectMenu = this.menu[index];
    }
  },
  created() {
      // console.log(this.$route.path);
      this.menu.forEach((obj)=>{
          if(obj.path == this.$route.path){
             this.selectMenu = obj;
          }
      })
  },
};
</script>

<style  scoped>
#content {
  margin: 1rem 0;
}
</style>