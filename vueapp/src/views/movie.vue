<template>
    <div class="movie-container">
        <ul>
            <li v-for="(obj,index) in movieList" :key="index" class="movie-list">
                <img class="movie-img" src="xx.jpg"/>
                <div class="movie-text">
                    <h4>{{obj.title}}</h4>
                    <p>
                        <span v-for="(cast,index) in obj.casts" :key="index">{{cast.name}}</span>
                    </p>
                    <p>590302已观看</p>
                    <p>年份：2019</p>
                    <p>奇幻/</p>
                </div>
            </li>
 
        </ul>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data(){
            return {
                movieList:[]
            }
        },
        created () {
            // No 'Access-Control-Allow-Origin' 跨域
            // 域名 协议  端口号 只要有一个不同即为跨域 安全限制 
    // https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/in_theaters?city=广州&start=0&count=10
            axios.get('https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/in_theaters?city=广州&start=0&count=10')
            .then((result)=>{
                this.movieList = result.data.subjects;
                console.log(this.movieList);
            })
        }
    }
</script>

<style scoped>
.movie-container{
    padding:0 0.2rem;
}
    .movie-list{
        display: flex;
        border-bottom: 1px solid #000;
        padding:0.2rem 0;
    }
    .movie-img{
        width:100px;
        height:150px;
        margin-right:0.2rem;
    }
    .movie-text{
        flex:1;
    }
</style>