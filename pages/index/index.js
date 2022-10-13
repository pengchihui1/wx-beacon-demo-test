//index.js
const app = getApp();

// H5项目地址
// const url = '127.0.0.1:8080/index.html';
const url='https://h5-beacon-demo.vercel.app'

Page({
    data: {
        url: "",
        beaconsHashString: ""
    },
    onLoad: function (options) {
        // hash定位模式
        this.setData({
            url: url
        });
    },
    onWebLoad(res) {
        // hash
        if (app.$locate.wechatMode === 'hash') {
            app.$locate.on('beacons', beacons => {
              console.log("分析后的有效beacons",beacons)
                this.setData({
                    beaconsHashString: '#' + beacons.toHashString()
                });
            });
        }
    }
});
