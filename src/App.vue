<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
img{ display:block;outline:none;border:none;}
ul,li{margin:0;padding:0;list-style:none;}
a{color:#000; text-decoration:none; outline:none;}
.alert{
  color:#fff;
  background: rgba(0,0,0,0.5);
  width:50%;
  height: 50px;
  position:absolute;
  text-align: center;
  left:25%;
  top:50%;
  margin-top:-25px;
  border-radius:5px;
  line-height: 50px;
  }
</style>
