<template>
    <div>
        音乐列表
        <aplayer :music="music" :list="musicData" showlrc v-if="isShow"/>
    </div>
</template>
<script>
    import axios from 'axios'
    import Aplayer from 'vue-aplayer'
    export default {
        data(){
            return {
                musicData:[],
                isShow:false
            }
        },
        computed: {
            music(){
                return this.musicData[0];
            }
        },
       components: {
           Aplayer
       },
       created() {
           axios.get('/data/musicdata.json')
           .then((result)=>{
               result.data.musicData.forEach((obj)=>{
                   let obj1 = {
                       title:obj.title,
                       author:obj.author,
                       src:obj.src,
                       pic:obj.musicImgSrc,
                       lrc:`http://localhost:8080/${obj.lrc}`
                   }
                   this.musicData.push(obj1);
               })
               this.isShow = true;
            //    {
            //         "title": "我要你",
            //         "author": "老狼",
            //         "src": "http://up.mcyt.net/down/43422.mp3",
            //         "musicImgSrc": "http://omratag7g.bkt.clouddn.com/%E6%88%91%E8%A6%81%E4%BD%A0.jpg",
            //         "lrc": "lrc/我要你.lrc"
            //     }
            //     {
            //         "title": "我要你",
            //         "author": "老狼",
            //         "src": "http://up.mcyt.net/down/43422.mp3",
            //         "pic": "http://omratag7g.bkt.clouddn.com/%E6%88%91%E8%A6%81%E4%BD%A0.jpg",
            //         "lrc": "lrc/我要你.lrc"
            //     }
           })
       },
    }
</script>

<style scoped>
    img{
       width:50%; 
    }

</style>