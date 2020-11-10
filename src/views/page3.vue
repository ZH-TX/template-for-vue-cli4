<template>
  <div class="page3">
    <div class="title">
      <img class="page3-module" src="../assets/image/page3/module.png" alt="" />
    </div>

    <div class="page3-content">
      <div class="con-item" @click="goToDetail(item.id)" v-for="(item, index) in liveArr" :key="index">
        <img :src="item.liveThumbnail" alt="" />
        <div class="item-rg">
          <div class="item-title">{{ item.liveName }}</div>
          <div class="item-name">讲师: {{ item.tutorName }}</div>
          <div>{{ item.liveBeginTime }}</div>
          <div class="item-num">
            <img src="../assets/image/page3/people.png" alt="" />
            <span>{{ item.watchUser || 0 }}人参与</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      liveArr: {},
      liveList: {},
      liveIds: [786, 858,886,944,902,963,939,973],
    };
  },
  created() {
    this.liveIds.forEach((ele, index) => {
      this.getLiveData(ele, index);
    })
  },
  methods: {
    getLiveData(id, index) {
      this.$http
        .post("/sys/live/info", { id })
        .then((res) => {
          if(res.data.code==200){
            this.$set(this.liveArr, index, JSON.parse(JSON.stringify(res.data.data)));
            this.getNum(id, index);
          }
          
        });
    },
    getNum(id, index) {
      this.$http
        .post("sys/comments/info", {
          info: `{"comId":0,"liveId":${id}}`,
        })
        .then((res) => {
          if(res.data.code==200){
            this.$set(this.liveArr[index], "watchUser", res.data.online);
          }
          // console.log(res);     
        });
    },
    goToDetail(id) {
      let param = { live_id: id };
      let userAgent = navigator.userAgent;
      if (this.$route.query.uid == 19390429) {
        alert(userAgent);
      }
      if (
        userAgent.indexOf("APPS_IOS_IPHONE") >= 0 ||
        userAgent.indexOf("YL1001_APPS_IOS_IPHONE") >= 0
      ) {
        location.href = "https://m.job1001.com/zphJumpLiveDetail?live_id=" + id;
      } else if (
        userAgent.indexOf("APPS_ANDROID_PHONE") >= 0 ||
        userAgent.indexOf("YL1001_ANDROID_PHONE") >= 0
      ) {
        HostApp.zphJumpLiveDetail(param);
      } else {
        let url = "https://m5.yl1001.com/marketing/zhibo/live-share.html";
        window.location.href = `${url}?live_id=${id}`;
      }
    },
    
  },
};
</script>

<style lang="scss" scoped>
.page3 {
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
}
.page3-module {
  margin-top: 42px;
  width: 345px;
  height: 170px;
}
.page3-content {
  margin-top: 28px;
  width: 345px;
  background: #5d39be;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 14px;
  .con-item {
    background: #fff;
    box-sizing: border-box;
    padding: 14px 10px;
    margin: 10px 0;
    display: flex;
    img {
      width: 125px;
      height: 75px;
      margin-right: 10px;
    }
    .item-rg {
      width: 150px;
      display: flex;
      // align-items: center;
      flex-direction: column;
      .item-title {
        font-size: 16px;
        color: #222222;
        font-weight: bold;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .item-name {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      div {
        font-size: 12px;
        line-height: 20px;
        color: #888888;
      }
      .item-num {
        img {
          width: 10px;
          height: 10px;
        }
      }
    }
  }
}
</style>