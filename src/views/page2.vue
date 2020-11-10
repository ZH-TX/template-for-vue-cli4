<template>
  <div>
    <div class="page2-content">
      <img src='~@/assets/image/page2/chat.png' alt="">
    </div>
    <div class="page2-content">
      <img src='~@/assets/image/page2/chat1.png' alt="">
    </div>
    <div class="join-font">
      <img src='~@/assets/image/page2/font.png' alt="">
    </div>
    <div class="center-bg"><img src="../assets/image/page1/bg2.png" alt=""></div>
    <div class="div-tip"><img class="tip" src="../assets/image/page2/tip2.png" alt=""></div>
    <div class="btn1"><img @click="go1" class="img-btn position1" src="../assets/image/page1/left-btn.png" alt=""></div>
    <div class="btn1"><img @click="go3" class="img-btn position3" src="../assets/image/page1/left-btn.png" alt=""></div>
    <!-- <div class="btn1"><img class="img-btn position5" src="../assets/image/page1/left-btn.png" alt=""></div> -->
    <div class="btn1"><img @click="go2" class="img-btn position2" src="../assets/image/page1/right-btn.png" alt=""></div>
    <div class="btn1"><img @click="go4" class="img-btn position4" src="../assets/image/page1/right-btn.png" alt=""></div>
    <!-- <div class="btn1"><img class="img-btn position6" src="../assets/image/page1/right-btn.png" alt=""></div> -->
  </div>
</template>

<script>

export default {
  created () {

  },
  data() {
    return {
      chat:require('../assets/image/page2/chat.png')
     
    };
  },
  
  methods: {
    go1(){
      window.location.href = 'http://o2o.yl1001.com/ylzhadui/web/v1/index.php?m=apply&a=detail&activity_id=4041598621008260&j-data-target='
    },
    go2(){
      window.location.href = 'http://o2o.yl1001.com/ylzhadui/web/v1/index.php?m=apply&a=detail&activity_id=8651598947799706&j-data-target='
    },
    go3(){
      window.location.href = 'http://o2o.yl1001.com/ylzhadui/web/v1/index.php?m=apply&a=detail&activity_id=1981598948343901&j-data-target='
    },
    go4(){
      window.location.href = 'http://o2o.yl1001.com/ylzhadui/web/v1/index.php?m=apply&a=detail&activity_id=7441598947340721&j-data-target='
    },
    
  },
};
</script>

<style lang="scss" scoped>
.page2-content{
  
	margin-top: 28px;
	border-radius: 5px;

  display: flex;
  justify-content: center;
  img{
    width: 345px;
    height: 192px;
  }
}
.join-font{
  margin-top: 32px;
  display: flex;
  justify-content: center;
  img{
    width: 345px;
    height: 150px;
  }
  
}
.center-bg{
  img{
    width: 100%;

  }
  
}
.div-tip{
    display: flex;
    justify-content: center;
    .tip{
      width: 345px;
      height: 478px;
      border-radius: 15px;

    }
  }
  .img-btn{
    position: absolute;
    width: 109px;
    height: 30px;
    top: 0;
  }
  .position1{
    top: 1030px;
    left: 30px;
  }
  .position2{
    top: 1120px;
    right: 20px;
  }
  .position3{
    top: 1210px;
    left: 30px;
  }
  .position4{
    top: 1295px;
    right: 20px;
  }
</style>