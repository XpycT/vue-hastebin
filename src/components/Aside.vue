<template>
  <aside class="tools">
    <div>
      <ul>
        <li><a class="hint--left" aria-label="Save" @click="saveDocument"><font-awesome-icon icon="save" /></a></li>
        <li><router-link :to="{name:'new'}" class="hint--left" aria-label="New" @click="newDocument"><font-awesome-icon icon="file" /></router-link></li>
        <li><router-link :to="{name:'new'}" class="hint--left" aria-label="Duplicate & Edit" @click="duplicateDocument"><font-awesome-icon icon="copy" /></router-link></li>
        <li><a class="hint--left" aria-label="Raw" @click="rawDocument"><font-awesome-icon icon="file-code" /></a></li>
        <li><router-link :to="{name:'upload'}" class="hint--left" aria-label="Image Upload" @click="imgDocument"><font-awesome-icon icon="camera" /></router-link></li>
      </ul>
    </div>
  </aside>
</template>

<script>
  export default {
      methods: {
          saveDocument() {
          },
          newDocument() {},
          duplicateDocument() {},
          rawDocument() {},
          imgDocument() {},
      }
  }
</script>

<style scoped lang="scss">
  @import '~hint.css/hint.base.css';

  .tools {
    width: 50px;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    background: #00222b;
    text-align: center;

    &>div{
      padding:5px;
    }
  }

  ul{
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      padding:5px;

      a{
        display: block;
        text-align: center;
        color:#ccc;
        text-decoration: none;
        font-size:32px;
        width: 32px;

        &:hover {
          color: #BAC3C6;
        }

        &.disabled{
          color: #2F5662;
          cursor: default;
        }
      }
    }
  }
</style>
