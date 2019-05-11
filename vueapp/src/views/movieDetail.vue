<template>
    <div>
        {{$route.params.id}}
        {{movie.title}}
        <img :src="movie.images.medium"/>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data(){
            return {
                movie:{}
            }
        },
        created() {
            axios.get('https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/subject/'+this.$route.params.id)
            .then((result)=>{
                // console.log(result)

                this.movie = result.data;
            })
        },
    }
</script>

<style lang="scss" scoped>

</style>