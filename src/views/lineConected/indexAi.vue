<template>
  <div id="main" class="chart"></div>
</template>
<script>
import * as echarts from 'echarts';

// 定义两个图表的数据
var option1 = {
  // 第一个图表的配置项和数据
  grid: {
    left: 50,
    top: 50,
    right: 50,
    bottom: 50,
  },
  xAxis: {
    type: 'category',
    data: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      type: 'line',
      data: [10, 20, 30, 40, 50, 60, 70],
    },
  ],
};

var option2 = {
  // 第二个图表的配置项和数据
  grid: {
    left: 50,
    top: 50,
    right: 50,
    bottom: 50,
  },
  xAxis: {
    type: 'category',
    data: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      type: 'line',
      data: [70, 60, 50, 40, 30, 20, 10],
    },
  ],
};



export default {
  mounted() {
    this.initChart()
  },
  methods: {
    initChart() {

      var chartDom = document.getElementById('main');
      var myChart = echarts.init(chartDom);
// 使用 setOption 同时绘制两个图表
myChart.setOption([option1, option2]);

// 通过事件监听，获取tooltip的实例
var tooltip1 = myChart.getZr().handler._tooltip;

// 监听鼠标移动事件
myChart.getZr().on('mousemove', function (params) {
  // 获取当前鼠标位置
  var pointInPixel = [params.offsetX, params.offsetY];
  // 根据鼠标位置显示tooltip
  tooltip1.showTip({ dataIndex: 0, seriesIndex: 0 }, pointInPixel);
});
    }
  }
}
</script>
<style lang="less" scoped>
.chart {
  width: 100%;
  height: 100vh;
}
</style>
