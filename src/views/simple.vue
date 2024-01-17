<template>
  <div id="main"></div>
</template>
<script>
import * as echarts from 'echarts';
export default {
  mounted() {
    this.initChart()
  },
  methods: {
    initChart() {
      var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

option = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
        tooltip: {
          trigger: "axis",
          // formatter函数动态修改tooltip样式
          formatter: function (params) {
            console.log('....', params[0])
            const {name, value} = params[0]
            return `${name}: ${value}` 
          }
        },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    }
  ]
};

option && myChart.setOption(option);

    }
  },
}
</script>
<style lang="less" scoped>
#main {
  width: 100%;
  height: 400px;
}
</style>
