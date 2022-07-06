<template>
    <div>
        <van-nav-bar  :title="activeTitle" />
        <div class="main">
            <router-view></router-view>
        </div>

        <van-tabbar v-model="active">
            <van-tabbar-item icon="home-o" to="/layout/home">主页</van-tabbar-item>
            <van-tabbar-item icon="search" to="/layout/search">搜索</van-tabbar-item>
        </van-tabbar>

    </div>
</template>

<script>
export default {
    data() { 
        return {
            active: 0,
            activeTitle:'首页'
        }
    },
    // 监听路由切换，$route对象改变
    watch:{
        $route(){
            // console.log(this.$route);
            this.activeTitle = this.$route.meta.title;
        }
    }

}
</script>

<style scoped>
</style>