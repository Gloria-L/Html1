<template>
    <div>
        <h1>Page C</h1>
        {{$route.params.id}}
        ------
        {{$store.state.count}}
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>