<template>
  <div class="home">
    <img class="head-img" src="../assets/image/page1/head.png" alt="" />
    <div class="content">
      <div class="main-btn">
        <div
          class="btn"
          v-for="(item, index) in btnArr"
          :key="index"
          @click="changeItem(index)"
        >
          <img :src="currIndex == index ? item.active : item.default" alt="" />
        </div>
      </div>
    </div>
    <page1 v-show="currIndex == 0"></page1>
    <page2 v-show="currIndex == 1"></page2>
    <page3 v-show="currIndex == 2"></page3>
    <page4 v-show="currIndex == 3"></page4>

    <div @click="share">
      <img class="btn-share" src="../assets/image/page1/share.png" alt="" />
    </div>
    <van-overlay :show="show" @click="show = false">
      <img class="share-arrow" src="../assets/image/arrow.png" alt="" />
      <div class="fonttip">
        <p><span>第一步：</span><span>立即分享</span></p>
        <p><span>第二步：</span><span>关注“一览英才网”公众号，输入“应届生”即可获取礼包</span></p>
      </div>
    </van-overlay>

    <!-- <van-dialog  v-model="dialog" title="扫码领取礼包" show-cancel-button>
      <div class="dialog-div">
        <img class="dialog-img" src="../assets/image/wxcode.jpg" />
      </div>
    </van-dialog> -->
  </div>
</template>

<script>
import page1 from "./page1.vue";
import page2 from "./page2.vue";
import page3 from "./page3.vue";
import page4 from "./page4.vue";
import axios from "axios";
export default {
  name: "Home",
  components: {
    page1,
    page2,
    page3,
    page4,
  },
  created() {
    console.log(process.env.VUE_APP_API_URL, process.env.VUE_APP_MODE);
  },
  mounted() {
    this.wxShare();
  },

  data() {
    return {
      show: false,
      dialog:false,
      currIndex: 0,
      btnArr: [
        {
          default: require("../assets/image/btn.png"),
          active: require("../assets/image/btn-a.png"),
        },
        {
          default: require("../assets/image/btn1.png"),
          active: require("../assets/image/btn1-a.png"),
        },
        {
          default: require("../assets/image/btn2.png"),
          active: require("../assets/image/btn2-a.png"),
        },
        {
          default: require("../assets/image/btn3.png"),
          active: require("../assets/image/btn3-a.png"),
        },
      ],
    };
  },
  methods: {
    changeItem(e) {
      this.currIndex = e;
    },
    share() {
      this.dialog=true
      this.show = true;
      // this.wxShare();
    },

    wxShare() {
      let that=this
      const share_api_param = {
          url: window.location.href.split("#")[0],
        }
      this.$jsonp(
     `//m.yl1001.com/community/web/v1/index.php?m=schoolApi&a=api&func=getWechatParam&api_param=${encodeURIComponent(JSON.stringify(share_api_param))}`,
      ).then((res) => {
        // debugger
        // console.log('微信分享',res);
        const config = {
          debug: false, // 开启调试模式,
          appId: res.appId, // 必填，企业号的唯一标识，此处填写企业号corpid
          timestamp: res.timestamp, // 必填，生成签名的时间戳
          nonceStr: res.nonceStr, // 必填，生成签名的随机串
          signature: res.signature, // 必填，签名，见附录1
          jsApiList: ["updateAppMessageShareData", "updateTimelineShareData"], // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        };
        let coverUrl = require("../assets/image/page1/head.png");
        // console.log('url是否一致',window.location.origin+this.$route.path,window.location.href.split("?")[0]);
        const linkObj = {
          // title: document.title, // 分享标题
          title: "一览英才网2021届秋季校园招聘节盛大开启",     // 分享标题
          desc: "秋招来袭,诚邀您的参与",
          link: window.location.href.split("#")[0], // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: sessionStorage.getItem("liveCoverUrl") || coverUrl, // 分享图标
        };

        wx.config(config);
        wx.ready(()=> {
          wx.checkJsApi({
            jsApiList: [
              "checkJsApi",
              "onMenuShareTimeline",
              "onMenuShareAppMessage",
              "updateAppMessageShareData",
              "updateTimelineShareData",
            ],
            success: function (res) {},
          });
          wx.updateAppMessageShareData({
            title: linkObj.title, // 分享标题
            desc: linkObj.desc, // 分享描述
            link: linkObj.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: linkObj.imgUrl, // 分享图标
            success:  ()=> {
              // that.dialog=true
              console.log("updateAppMessageShareData",that.dialog);
              // 设置成功
            },
          });
          wx.updateTimelineShareData({
            title: linkObj.title, // 分享标题
            link: linkObj.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: linkObj.imgUrl, // 分享图标
            success:  ()=> {
              // that.dialog=true
              console.log("updateTimelineShareData",that.dialog);
              // 设置成功
            },
          });
          wx.onMenuShareTimeline({
            title: linkObj.title, // 分享标题
            desc: linkObj.desc, // 分享描述
            link: linkObj.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: linkObj.imgUrl, // 分享图标
            success: ()=> {
              // that.dialog=true
              console.log("onMenuShareTimeline");
              // 设置成功
            },
          });
          wx.onMenuShareAppMessage({
            title: linkObj.title, // 分享标题
            link: linkObj.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: linkObj.imgUrl, // 分享图标
            success: ()=> {
              // that.dialog=true
              console.log("onMenuShareAppMessage");
              // 设置成功
            },
          });
        });
        wx.error( (res)=> {
          // alert(JSON.ifystring);
          console.log(res);
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  // height: 2540px;
  padding-bottom: 60px;
  background: #17034d;
}
.head-img {
  width: 100%;
  height: 280px;
  background: #17034d;
}

.main-btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 15px;
  .btn {
    img {
      width: 80px;
      height: 42px;
    }

    display: flex;
    align-items: center;
    justify-content: center;
  }
  .actvie {
    background: linear-gradient(to right, rgb(255, 205, 74), rgb(236, 104, 62));
  }
}

.btn-share {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
}
.fonttip {
  margin-top: 80px;
  font-weight: bold;
  font-size: 18px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 8vw;
  
  p {
    display: flex;

    span:first-of-type {
      flex-shrink: 0;
    }

    &:first-of-type {
      margin-bottom: 48px;
    }
  }
}

.share-arrow {
  position: absolute;
  top: 0;
  right: 20px;
  width: 80px;
  height: 80px;
}
.dialog-div{
  display: flex;
  justify-content: center;
}
.dialog-img{
  // width: 300px;
  height: 300px;
}
</style>