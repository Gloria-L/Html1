<template>
    <div>
        <router-link to="/photo">
            <v-touch class="img-box" :style="{backgroundImage:'url('+url+')'}" @swipeleft="next()" @swiperight="per()"></v-touch>
        </router-link> 
   </div>
</template>

<script>
    import Vue from 'vue';
    import VueTouch from 'vue-touch';
    Vue.use(VueTouch,{name:'v-touch'});
    export default {
        data(){
            return{
                idx:this.$route.params.index,
            }
        },
        computed:{
            url(){
                return this.$store.state.photoData[this.idx].src;
            }
        },
        methods:{
            next(){
                this.idx++;
                if(this.idx == this.$store.state.photoData.length)
                    this.idx = 0;
            },
            per(){
                this.idx--;
                if(this.idx == 0)
                    this.idx = this.$store.state.photoData.length;
            }
        }
    }
</script>

<style scoped>
    .img-box{
        position: absolute;
        left:0px;
        top:1rem;
        bottom:1rem;
        right:0px;
        background: #000 0 center no-repeat;
        background-size: contain;
    }
</style>