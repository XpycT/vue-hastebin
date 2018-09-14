<template>
    <div id="app">
        <aside-component/>
        <router-view/>
    </div>
</template>

<style lang="scss">
    #app,
    html {
        height: 100%;
    }

    body {
        background: #002B36;
        margin: 0;
        height: calc(100% - 40px);
    }

    #app {
        padding: 20px 50px;
        margin-right: 30px;
    }
</style>

<script>
    import AsideComponent from '@/components/Aside.vue'

    export default {
        components: {
            AsideComponent
        }
    }
</script>
