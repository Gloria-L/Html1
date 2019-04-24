<template>
    <div>
        <h1>Page B</h1>

        {{$route.params.name}}
        ------
        {{$route.params.id}}
    </div>
</template>

<script>
    export default {
        data:function(){
            return{
                msg:'hello'
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>