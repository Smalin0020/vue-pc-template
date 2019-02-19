<template>
  <div>
    Smalin @ 2019
  </div>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>

<style lang="scss" scoped>
  div {
    position: fixed;
    bottom: 0;
    line-height: 30px;
    width: 100%;
    color: white;
    font-size: 12px;
    background-color: rgba(0, 0, 0, .8);
  }
  a {
    cursor: pointer;
  }
  a:link {
    color: white;
    text-decoration:none;
  }
  a:active {
    color: white;
    }
  a:visited {
    color:white;
    text-decoration:none;
    }
  a:hover {
    color: white;
    text-decoration:underline;
    }
</style>
