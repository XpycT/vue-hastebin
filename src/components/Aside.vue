<template>
  <aside class="tools">
    <div>
      <ul>
        <li><a href="#"><font-awesome-icon icon="save" /></a></li>
        <li><a href="#"><font-awesome-icon icon="file" /></a></li>
        <li><a href="#" class="disabled"><font-awesome-icon icon="copy" /></a></li>
        <li><a href="#" class="disabled"><font-awesome-icon icon="file-code" /></a></li>
        <li><a href="#"><font-awesome-icon icon="camera" /></a></li>
      </ul>
    </div>
  </aside>
</template>

<style scoped lang="scss">
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
