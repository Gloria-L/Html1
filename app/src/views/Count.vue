<template>
    <div>
        <h1>Count</h1>
        <!-- 标准写法 -->
        <!-- {{$store.state.count}} -->
        <!-- 用script方法返回值也可以 -->
        {{count}}
        ----- 
        {{msg}}
        ----- 
        {{num}}
        ----- 
        {{xx}}
        <button @click="add(8)">+++++</button>
        <button @click="reduce(5)">-----</button>
        <!-- 异步add加66 -->
        <button @click="addActions(66)">-----</button>

    </div>
</template>

<script>
    // 解构mapstate
    // 映射mapxxx
    import {mapState, mapMutations, mapGetters, mapActions} from 'vuex';
    export default {
        data:function(){
            return{

            }
        },
        // 方法一：通过computed的计算属性直接赋值
        // computed:{
        //     count(){
        //         return this.$store.state.count;
        //     }
        // },
        // 方法二：通过mapState的数组来赋值，解构
        computed:{
            ...mapState(['count','msg']),
            ...mapGetters(['num','xx']),
            
        },
        methods:{
            show(){
                console.log(this.$store.state.count);
            },
            fn(num){
                this.$store.commit('add',num);
            },
            // mapm返回的是对象，add reduce等以对象形式返回，要是想拿出来，就需要...才可以
            ...mapMutations(['add','reduce']),
            ...mapActions(['addActions'])
            
        }
    }
</script>

<style lang="scss" scoped>

</style>