<template>
    <div>
        <h1>Page A</h1>
        <div>
            <router-link to="/a/test1">test1</router-link>
        </div>
        <div>
            <router-link to="/a/test2">test2</router-link>
        </div>

        <router-view></router-view>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>