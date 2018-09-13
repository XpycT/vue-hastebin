<template>
    <div class="new">
        <div id="linenos" v-html="linenos"></div>
        <textarea ref="textarea" spellcheck="false" v-if="isNew"></textarea>
        <pre id="box" class="hljs" tabindex="0" v-else><code v-html="paste"></code></pre>
    </div>
</template>

<style lang="scss">
    @import '~highlight.js/styles/solarized-dark.css';

    .new {
        height: 100%;
        width: 100%;
    }

    textarea {
        background: transparent;
        border: 0;
        color: #fff;
        padding: 0;
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
        left: 0;
        width: 30px; /* 30 to get 20 away from box */
        font-size: 13px;
        font-family: monospace;
        text-align: right;
    }
    #box {
        padding: 0;
        margin: 0;
        width: 100%;
        border: 0;
        outline: none;
        font-size: 13px;
    }
    #box code {
        padding: 0;
        background: transparent !important; /* don't hide hastebox */
    }
</style>

<script>
    import {eventBus} from '../main';
    import hljs from 'highlight.js';

    export default {
        name: 'new-document',
        data() {
            return {
                paste : '',
                lineCount: 0
            }
        },
        created() {
            eventBus.$on('SAVE_DOCUMENT', () => this.saveDocument());
            if(this.$route.params.id){
                this.loadDocument();
            }
        },
        beforeDestroy() {
            eventBus.$off('SAVE_DOCUMENT');
        },
        computed: {
            isNew() {
                return this.$route.params.id === undefined;
            },
            linenos() {
                if(this.isNew){
                    return '&gt;';
                }else{
                    let h = '';
                    for (let i = 0; i < this.lineCount; i++) {
                        h += (i + 1).toString() + '<br/>';
                    }
                    return h;
                }
            },
        },
        watch: {
            isNew() {
                if (!this.isNew) this.loadDocument();
            }
        },
        methods: {
            loadDocument() {
                this.$http.get('/document/'+this.$route.params.id)
                    .then(resp =>{
                        if(resp.data.id){
                            let code = resp.data.data;
                            let high = hljs.highlightAuto(code);
                            this.lineCount = code.split('\n').length;
                            this.paste = high.value;
                        }
                    }).catch(err => {
                    console.error(err);
                })
            },
            saveDocument() {
                let paste = this.$refs.textarea.value.trim();
                this.$http.post('/document', {data: paste})
                    .then(resp => {
                        if(resp.data.id){
                            this.$router.push({ name: 'main', params: { id: resp.data.id }})
                        }
                    }).catch(err => {
                    console.error(err);
                })
            }
        }
    }
</script>
