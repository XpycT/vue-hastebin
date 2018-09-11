<template>
    <div class="new">
        <div id="linenos">&gt;</div>
        <textarea ref="code" spellcheck="false"></textarea>
    </div>
</template>

<style lang="scss">
    .new{
        height: 100%;
        width: 100%;
    }
    textarea {
        background: transparent;
        border: 0px;
        color: #fff;
        padding: 0px;
        width: 100%;
        height: 100% !important;
        font-family: monospace;
        outline: none;
        resize: none;
        font-size: 13px;
    }
    #linenos {
        color: #7d7d7d;
        z-index: -1000;
        position: absolute;
        top: 20px;
        left: 0px;
        width: 30px; /* 30 to get 20 away from box */
        font-size: 13px;
        font-family: monospace;
        text-align: right;
    }
</style>

<script>
    export default {
        name: 'new'
    }
</script>
