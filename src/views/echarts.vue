<template>

  <div class="eWrap">
    <div id="echartsDom"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {
      xData: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"], // 两个echarts公用的x轴的数据
      y1Data: [8888, 9999, 7777, 10000, 3334, 7878, 6543], // 小件货物

      y2Data: [56, 64, 32, 58, 64, 76, 81], // 网点负荷

      y3Data: [88, 99, 77, 100, 21, 66, 95], // 大件货物
    };
  },
  mounted() {
    this.drawEcharts();
  },
  methods: {
    // 画图方法
    drawEcharts() {
      const myChart = echarts.init(document.getElementById("echartsDom"));
      myChart.setOption({
        color: ["#bfa", "#baf", "pink", "#baf"], // 配置数据颜色
        grid: [
          // 配置第一个折线图的位置

          {
            left: "14.5%",

            right: "12%",

            top: "10%",
            height: "42%",
          },
          // 配置第二个折线图位置
          {

            left: "14.5%",
            right: "12%",
            top: "60%",
            height: "32%",

          },

        ],
        tooltip: {
          trigger: "axis",
          // formatter函数动态修改tooltip样式
          formatter: function (params) {
            if (params) {
              console.log(',,,,', params)
              var htmlStr = "";
              htmlStr += params[0].name.replace(/\-/g, "/") + "<br/>"; //x轴的名称
              for (var i = 0; i < params.length; i++) {
                var param = params[i]; // 存一份item项

                var seriesName = param.seriesName; //图例名称
                var value = param.value; //y轴值
                var color = param.color; //图例颜色
                htmlStr += "<div>";
                htmlStr +=
                  '<span style="margin-right:5px;display:inline-block;width:10px;height:10px;border-radius:5px;background-color:' +
                  color +

                  ';"></span>';
                //圆点后面显示的文本
                htmlStr += seriesName + "：" + value;
                switch (seriesName) {
                  case "小件货物":
                    htmlStr += " " + "件";
                    break;
                  case "网点负荷":
                    htmlStr += " " + "%";
                    break;
                  case "大件货物":
                    htmlStr += " " + "件";
                    break;
                  default:
                    htmlStr += " ";
                }

                htmlStr += "</div>";
              }

              return htmlStr;
            } else {
              return;
            }
          },
          backgroundColor: "#ccc",
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 10,
          textStyle: {
            color: "#000",

            fontSize: 12,
            align: "left",
          },
        },
        legend: {
          show: true,
          x: "center",
          y: "0",
          data: ["小件货物", "网点负荷", "大件货物", "网点负荷"],
          textStyle: {
            fontSize: 12,
          },
        },
        // 将上下两个tootip合成一个

        axisPointer: {
          link: { xAxisIndex: "all" },
        },
        xAxis: [

          {
            type: "category",
            scale: true,
            axisLabel: {
              show: false,
            },
            axisTick: {
              alignWithLabel: true,
            },
            splitLine: {
              show: false,
            },
            data: this.xData, //x轴时间的数据
          },
          {
            gridIndex: 1,
            type: "category",
            scale: true,
            axisLabel: {

              fontSize: 10,

            },
            axisTick: {
              alignWithLabel: true,

            },
            splitLine: {

              show: false,
            },

            data: this.xData, //x轴时间的数据
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "件数",
            nameLocation: "center",
            nameGap: 50,
            nameTextStyle: {
              fontSize: 12,
              fontWeight: "500",
            },
            axisLabel: {
              fontSize: 12,
            },
            min: function (value) {
              return parseInt(value.min);
            },

            max: function (value) {
              return parseInt(value.max * 1.05);
            },
            scale: false,

            boundaryGap: [0, "100%"],
            splitLine: {
              show: false,
            },
            splitNumber: 4, //设置坐标轴的分割段数

          },

          {
            type: "value",
            name: "负荷/百分比",

            nameLocation: "center",
            nameGap: 42,
            nameTextStyle: {
              fontSize: 12,
            },
            axisLabel: {
              fontSize: 12,
            },
            // min: function (value) {
            //   return parseInt(value.min);
            // },

            // max: function (value) {
            //   return parseInt(value.max * 1.05);
            // },
            scale: true,

            boundaryGap: [0, "100%"],
            splitLine: {
              show: false,
            },
            splitNumber: 4, //设置坐标轴的分割段数

          },

          {
            type: "value",
            name: "件数",
            nameLocation: "center",
            gridIndex: 1,
            nameGap: 30,
            nameTextStyle: {
              fontSize: 12,
            },
            axisLabel: {
              fontSize: 12,
            },
            min: function (value) {

              return parseInt(value.min);
            },
            max: function (value) {
              return parseInt(value.max * 1.05);
            },
            scale: true,

            boundaryGap: [0, "100%"],
            splitLine: {
              show: false,
            },
            splitNumber: 4, //设置坐标轴的分割段数

          },

          {
            type: "value",
            name: "负荷/百分比",

            nameLocation: "center",
            gridIndex: 1,

            nameGap: 42,
            nameTextStyle: {

              fontSize: 12,

            },
            axisLabel: {

              fontSize: 12,

            },
            // min: function (value) {
            //   return parseInt(value.min);
            // },
            // max: function (value) {
            //   return parseInt(value.max * 1.05);
            // },
            scale: true,
            boundaryGap: [0, "100%"],
            splitLine: {
              show: false,
            },
            splitNumber: 4, //设置坐标轴的分割段数
          },
        ],
        // dataZoom: [
        //   {
        //     type: "inside",
        //     startValue: this.y1Data.length - 4, // 放置最后4个数组
        //     endValue: this.y1Data.length - 1,
        //     xAxisIndex: [0, 1], // 显示 0 1 的数据，这个要加，不加的话，悬浮提示就会出问题
        //   },
        // ],
        series: [

          {
            name: "小件货物",
            type: "line",
            xAxisIndex: 0,
            yAxisIndex: 0,
            data: this.y1Data, //小件货物

          },

          {
            name: "网点负荷",
            type: "line",
            xAxisIndex: 0,
            yAxisIndex: 1,
            data: this.y2Data, //网点负荷

          },

          {
            name: "大件货物",
            type: "line",
            xAxisIndex: 1,
            yAxisIndex: 2,
            data: this.y3Data, //大件货物

          },

          {
            name: "网点负荷",
            type: "line",
            xAxisIndex: 1,
            yAxisIndex: 3,
            data: this.y2Data, //网点负荷

          },

        ],
      });
      // 自适应
      // window.addEventListener("resize", () => {
      //   this.myChart.resize();
      // });
    },
  },
};
</script>
<style lang="less" scoped>
.eWrap {
  width: 100%;
  height: 400px;
  #echartsDom {
    width: 100%;
    height: 100%;
  }

}
</style> 
