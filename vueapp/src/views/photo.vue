<template>
    <div>
        <!-- 图片 -->
        <img v-for="(obj,index) in photoData" :key="index" :src="obj.src"/>
    </div>
</template>
<script>
    import axios from 'axios'
    export default {
        data(){
            return {
                photoData:[]
            }
        },
        created() {
            axios.get('/data/photodata.json')
            .then((result)=>{
                this.photoData = result.data.photoData;
            })
        },
    }
</script>

<style scoped>
    img{
        width:50%;
    }
</style>