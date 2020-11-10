<template>
  <div class="page4">
    <img class="img-bg" src="../assets/image/page4/bg1.png" alt="" />
    <div class="temp1">
      <!-- <div style="font-size: 16px; color: #fff">10月14日15:00上线 敬请期待</div> -->

      <div class="temp-scorll">
        <div class="con-item" @click="goToDetail(item.id)" v-for="(item,index) in liveList1" :key="index">
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
    <div class="temp2">
      <div class="temp-scorll">
        <div class="con-item" @click="goToDetail(item.id)" v-for="(item,index) in liveList2" :key="index">
          <img :src="item.liveThumbnail" alt="" />
          <!-- <img src="" alt=""> -->
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
    <div class="temp3">
      <!-- <div style="font-size: 16px; color: #fff">10月16日15:00上线敬请期待</div> -->

      <div class="temp-scorll">
        <div class="con-item" @click="goToDetail(item.id)" v-for="(item,index) in liveList3" :key="index">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      liveIds1:[879],//职业规划,与下面 的list对应
      liveIds2:[496,964],//简历
      liveIds3:[894], //面试
      liveList1: {},
      liveList2: {},
      liveList3: {},
    };
  },
  created() {
    this.liveIds1.forEach((ele, index) => {
      this.getLiveDataFun(ele, index,this.liveList1);
    })
    this.liveIds2.forEach((ele, index) => {
      this.getLiveDataFun(ele, index,this.liveList2);
    })
    this.liveIds3.forEach((ele, index) => {
      this.getLiveDataFun(ele, index,this.liveList3);
    })

  },
  methods: {
    goToDetail(id) {
      let param = { live_id: id };
      let userAgent = navigator.userAgent;
      if (this.$route.query.uid == 19390429) {
        alert(userAgent);
      }
      if (userAgent.indexOf("APPS_IOS_IPHONE") >= 0 || userAgent.indexOf("YL1001_APPS_IOS_IPHONE") >= 0) {
        location.href = "https://m.job1001.com/zphJumpLiveDetail?live_id=" + id;
      } else if (userAgent.indexOf("APPS_ANDROID_PHONE") >= 0 || userAgent.indexOf("YL1001_ANDROID_PHONE") >= 0) {
        HostApp.zphJumpLiveDetail(param);
      } else {
        let url = "https://m5.yl1001.com/marketing/zhibo/live-share.html";
        window.location.href = `${url}?live_id=${id}`;
      }
    },

    getLiveDataFun(id, index,liveArr) {
      this.$http
        .post("/sys/live/info", { id })
        .then((res) => {
          if(res.data.code==200){
            this.$set(liveArr, index, JSON.parse(JSON.stringify(res.data.data)));
            this.getNumFun(id, index,liveArr);
          }
        });
    },
    getNumFun(id, index,liveArr) {
      this.$http
        .post("sys/comments/info", {
          info: `{"comId":0,"liveId":${id}}`,
        })
        .then((res) => {
          if(res.data.code==200){
            this.$set(liveArr[index], "watchUser", res.data.online);
          }
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.page4 {
  .img-bg {
    margin-top: 26px;
    width: 100%;
  }
  .temp1 {
    position: absolute;
    top: 620px;
    right: 0;
    width: 280px;
    max-height: 330px;
    background-color: #55893d;
    box-shadow: 0px 11px 10px 0px rgba(28, 73, 25, 0.13);
    border-radius: 10px;
    padding: 12px;
    overflow-y: scroll;
  }
  .temp-scorll {
    box-sizing: border-box;
    max-height: 330px;
    overflow-y: scroll;
  }
  .temp2 {
    position: absolute;
    top: 1040px;
    left: 20px;
    max-width: 280px;
    max-height: 330px;
    background-color: #55893d;
    box-shadow: 0px 11px 10px 0px rgba(28, 73, 25, 0.13);
    border-radius: 10px;
    padding: 12px;
    overflow-y: scroll;
  }
  .temp3 {
    position: absolute;
    top: 1480px;
    right: 0;
    width: 280px;
    max-height: 330px;
    background-color: #55893d;
    box-shadow: 0px 11px 10px 0px rgba(28, 73, 25, 0.13);
    border-radius: 10px;
    padding: 12px;
    overflow-y: scroll;
  }
  .con-item {
    position: relative;
    background: #fff;
    box-sizing: border-box;
    padding: 14px 10px;
    margin: 10px 0;
    display: flex;
    img {
      width: 100px;
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