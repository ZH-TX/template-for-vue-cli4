<template>
  <div>
     <div class="main-center">
        <img src="../assets/image/page1/join.png" alt="">
      </div>
      <div>
        <img class="bg1" src="../assets/image/page1/bg1.png" alt="">
      </div>
      <div class="div-tip"><img class="tip" src="../assets/image/page2/tip2.png" alt=""></div>
      <div class="btn1"><img @click="goto1" class="img-btn position1" src="../assets/image/page1/left-btn.png" alt=""></div>
      <div class="btn1"><img @click="goto3" class="img-btn position3" src="../assets/image/page1/left-btn.png" alt=""></div>
      <div class="btn1"><img @click="goto5" class="img-btn position5" src="../assets/image/page1/left-btn.png" alt=""></div>
      <div class="btn1"><img @click="goto7" class="img-btn position7" src="../assets/image/page1/left-btn.png" alt=""></div>
      <div class="btn1"><img @click="goto9" class="img-btn position9" src="../assets/image/page1/left-btn.png" alt=""></div>
      <div class="btn1"><img @click="goto11" class="img-btn position11" src="../assets/image/page1/left-btn.png" alt=""></div>
      <!-- <div class="btn1"><img class="img-btn position13" src="../assets/image/page1/left-btn.png" alt=""></div> -->
      <div class="btn1"><img @click="goto2" class="img-btn position2" src="../assets/image/page1/right-btn.png" alt=""></div>
      <div class="btn1"><img @click="goto4" class="img-btn position4" src="../assets/image/page1/right-btn.png" alt=""></div>
      <div class="btn1"><img @click="goto6" class="img-btn position6" src="../assets/image/page1/right-btn.png" alt=""></div>
      <div class="btn1"><img @click="goto8" class="img-btn position8" src="../assets/image/page1/right-btn.png" alt=""></div>
      <div class="btn1"><img @click="goto10" class="img-btn position10" src="../assets/image/page1/right-btn.png" alt=""></div>
      <div class="btn1"><img @click="goto12" class="img-btn position12" src="../assets/image/page1/right-btn.png" alt=""></div>
  </div>
</template>

<script>


export default {
  data() {
    return {
      list: [],
      
    };
  },
  
  methods: {
    goto1(){
      window.location.href = 'http://o2o.yl1001.com/ylzhadui/web/v1/index.php?m=apply&a=detail&activity_id=8911599557549201'
    },
    goto2(){
      window.location.href = 'http://o2o.yl1001.com/ylzhadui/web/v1/index.php?m=apply&a=detail&activity_id=6491599567733194'
    },
    goto3(){
      window.location.href = 'http://o2o.yl1001.com/ylzhadui/web/v1/index.php?m=apply&a=detail&activity_id=1061599804523648'
    },
    goto4(){
      window.location.href = 'http://o2o.yl1001.com/ylzhadui/web/v1/index.php?m=apply&a=detail&activity_id=7171599568213980'
    },
    goto5(){
      window.location.href = 'http://o2o.yl1001.com/ylzhadui/web/v1/index.php?m=apply&a=detail&activity_id=8771599805092287'
    },
    goto6(){
      window.location.href = 'http://o2o.yl1001.com/ylzhadui/web/v1/index.php?m=apply&a=detail&activity_id=3901599567905489'
    },
    goto7(){
      window.location.href = 'http://o2o.yl1001.com/ylzhadui/web/v1/index.php?m=apply&a=detail&activity_id=1681599804757973'
    },
    goto8(){
      window.location.href = 'http://o2o.yl1001.com/ylzhadui/web/v1/index.php?m=apply&a=detail&activity_id=7931599806442575&j-data-target='
    },
    goto9(){
      window.location.href = 'http://o2o.yl1001.com/ylzhadui/web/v1/index.php?m=apply&a=detail&activity_id=9091600422570357&j-data-target='
    },
    goto10(){
      window.location.href = 'http://o2o.yl1001.com/ylzhadui/web/v1/index.php?m=apply&a=detail&activity_id=2541600159522669&j-data-target='
    },
    goto11(){
      window.location.href = 'http://o2o.yl1001.com/ylzhadui/web/v1/index.php?m=apply&a=detail&activity_id=7661600155687398&j-data-target='
    },
    goto12(){
      window.location.href = 'http://o2o.yl1001.com/ylzhadui/web/v1/index.php?m=apply&a=detail&activity_id=2211600158641536&j-data-target='
    },
  }
}
</script>

<style lang="scss" scoped>
  .main-center{
    img{
      width: 100%;
      height: 519px;
    }
  }
  .bg1{
    width: 100%;

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
  .btn1{
    // position: relative;
  }
  .img-btn{
    position: absolute;
    width: 109px;
    height: 30px;
    top: 0;
  }
  .position1{
    top: 929px;
    left: 30px;
  }
  .position2{
    top: 1013px;
    right: 20px;
  }
  .position3{
    top: 1097px;
    left: 30px;
  }
  .position4{
    top: 1193px;
    right: 20px;
  }
  .position5{
    top: 1275px;
    left: 30px;
  }
  .position6{
    top: 1365px;
    right: 20px;
  }
  .position7{
    top: 1454px;
    left: 30px;
  }
  .position8{
    top: 1542px;
    right: 20px;
  }
  .position9{
    top: 1626px;
    left: 30px;
  }
  .position10{
    top: 1714px;
    right: 20px;
  }
  .position11{
    top: 1804px;
    left: 30px;
  }
  .position12{
    top: 1894px;
    right: 20px;
  }
</style>