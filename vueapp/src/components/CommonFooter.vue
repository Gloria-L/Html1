<template>
    <div class="footer">
        <ul class="footer-list" :style="{background:selectMenu.bg}">
            <li v-for="(obj,index) in menu" :key="index" @click="$emit('change',index)">
                <router-link :to="obj.path">{{obj.name}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props:["menu","selectMenu"]
    }
</script>

<style scoped>
    .footer{
        position: fixed;
        bottom:0px;
        height: 1rem;
        line-height: 1rem;
        background: #ff0000;
        width: 100%;
    }
    .footer-list{
        display: flex
    }
    .footer-list li{
        flex: 1;
        text-align: center;
    }
    .footer-list a{
        color:#000;
        outline: none;
    }
    .footer-list a.router-link-active{
        color:#fff;
    }
    .footer-list a:active{
        background: none;
    }

</style>