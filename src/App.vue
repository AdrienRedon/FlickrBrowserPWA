<template>
    <div>
        <top-bar class="topbar"></top-bar>
        <router-view class="content"></router-view>
    </div>
</template>

<script>
    import TopBar from './components/TopBar.vue';

    export default {
        components: {
            TopBar,
        }
    }
</script>

<style>
    html, body {
        margin: 0;
        padding: 0;
    }
    .topbar {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
    }
    .content {
        margin-top: 60px;
    }
</style>