// 定位服务SDK
const brtloc = require('./libs/brtloc.miniprogram.js');

App({
    // // 示例建筑ID
    buildingID: 'ZS020227',
    // // 建筑有效token
    token: '5d4dfa4205ba4e2283e782780e091236',
    // 示例建筑ID
    // buildingID: '00230083',
    // 建筑有效token
    // token: '9846c87aab7848679b9c001415f1d6be',
    // 唯一ID （建议使用openId）  - RandomUserId：随机分配唯一ID
    userId: brtloc.RandomUserId(),
    // 定位对象
    $locate: null,
    onLaunch: function (options) {
          var that=this
          // 定位服务
          that.$locate = new brtloc.Location({
            userId: that.userId,
            buildingID: that.buildingID,
            token: that.token
          });

          // ready
          that.$locate.on('ready', () => {
                // // 监听扫描ibeacon
                // wx.onBeaconUpdate(res => {
                //   console.log(res.beacons)
                //     // 分析beacons， 计算定位点
                //     this.$locate.beaconAnalysis(res.beacons);
                // });

                // //开启 ibeacon扫描
                // wx.startBeaconDiscovery({
                //     // uuids: this.$locate.uuids,
                //     uuids:['e2c56db5-dffb-48d2-b060-d0f5a71096e0'],
                //     success: res => {
                //       console.log("獲取了設備信息")
                //     }
                // });

                // // 蓝牙监听
                // wx.onBluetoothAdapterStateChange(res => {
                //     if (res.available) {
                //         //开启 ibeacon扫描
                //         wx.startBeaconDiscovery({
                //             // uuids: this.$locate.uuids,
                //             uuids:['e2c56db5-dffb-48d2-b060-d0f5a71096e0'],
                //             success: res => {}
                //         });
                //     }
                // });
                // wx.openBluetoothAdapter();
                   //检测蓝牙状态
                wx.openBluetoothAdapter({
                  success: function (res) {//蓝牙状态：打开
                    wx.startBeaconDiscovery({//开始搜索附近的iBeacon设备
                      uuids: ['e2c56db5-dffb-48d2-b060-d0f5a71096e0'],//参数uuid
                      // uuids:['fda50693-a4e2-4fb1-afcf-c6eb07647825'],
                      success: function (res) {
                        wx.onBeaconUpdate(function (res) {//监听 iBeacon 设备的更新事件  
                          console.log("掃描的設備",res.beacons)
                          that.$locate.beaconAnalysis(res.beacons);
                          console.log("掃描設備分析後")
                        });
                      },
                      fail: function (res) {
                        console.log(res)
                      }
                })
              }
          })
        })
    },
    onShow: function (options) {
        // 设置屏幕常亮
        wx.setKeepScreenOn({
            keepScreenOn: true
        });
    }
})
