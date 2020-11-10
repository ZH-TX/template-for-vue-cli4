<template>
    <div id="app">
      <keep-alive exclude="Guide Detail,ActivityDetail">
        <router-view />
      </keep-alive>
        
    </div>
</template>


<script>
export default {
  name: 'App'
};
</script>

<style>
#app {
  /* font-family: '微软雅黑'; */
  font-family: PingFangSC-Regular;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  max-width: 480px;
  /* min-width: 375px; */
  min-height: 100vh;
  /* overflow: hidden; */
  background: #fff;
}


</style>
