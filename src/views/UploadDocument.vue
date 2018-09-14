<template>
    <div class="upload">
        <el-upload v-if="isNew"
                   class="upload-form"
                   ref="upload"
                   drag
                   :show-file-list="false"
                   accept="image/*"
                   action="/img"
                   :on-success="onFileSuccess"
                   :on-error="onFileError"
        >
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">Drop image here or <em>click to upload</em></div>
        </el-upload>
        <div class="img" v-else>
            <img :src="imageData">
        </div>
    </div>
</template>

<style lang="scss">
    .img {
        text-align: center;
        padding: 50px;
        img {
            max-width: 80%;
        }
    }

    .el-upload {
        width: 100%;
        .el-upload-dragger {
            background: #08323C;
            border-width: 2px;
            width: 100%;
        }
        .el-upload__text {
            color: #eee;
        }
    }
</style>

<script>
    export default {
        name: 'upload-document',
        data() {
            return {
                img: null
            }
        },
        created() {
            if (this.$route.params.id) {
                this.loadDocument();
            }
        },
        computed: {
            isNew() {
                return this.$route.params.id === undefined;
            },
            imageData() {
                return this.img ? `data:${this.img.mimetype};base64,${this.img.b64}` : '';
            }
        },
        methods: {
            loadDocument() {
                this.$http.get('/img/' + this.$route.params.id)
                    .then(resp => {
                        if (resp.data.id) {
                            this.img = resp.data;
                        }
                    }).catch(err => {
                    console.error(err);
                })
            },
            onFileSuccess(response) {
                if (!response.id) {
                    this.$refs.upload.clearFiles();
                    this.$message.error('Upload error: only image files are allowed');
                    return;
                }
                this.$message.success('Your file has been uploaded successfully!');
                this.img = response;
                this.$router.push({name: 'upload', params: {id: response.id}})
            },
            onFileError() {
                this.$message.error('Upload error: only image files are allowed');
            },
        }
    }
</script>
