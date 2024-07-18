<template>
  <div id="main" class="chart"></div>
</template>
<script>
import * as echarts from 'echarts';

var option;
/* 常用图表所描述的数据大部分是“二维表”结构，上述的例子中，我们都使用二维数组来容纳二维表。
 * 现在，当我们把系列（series）对应到“列”的时候，那么每一列就称为一个“维度（dimension）”，而每一行称为数据项（item）。
 * 反之，如果我们把系列（series）对应到表行，那么每一行就是“维度（dimension）”，每一列就是数据项（item）。
*/
option = {
  legend: {},
  tooltip: {},
  dataset: {
    dimensions: ['product','2012', '2013', '', '2014', '2015' ],
    source: [
      { product: 'Matcha Latte', '2012': 41.1, '2013': 30.4, '2014': 65.1, '2015':53.3},
      { product: 'Milk Tea', '2012': 86.5, '2013': 92.1, '2014': 85.7, '2015': 83.1},
      { product: 'Cheese Cocoa', '2012': 24.1, '2013': 67.2, '2014': 79.5, '2015': 86.4}
    ]
  },
  xAxis: [
    { type: 'category', gridIndex: 0 },
    { type: 'category', gridIndex: 1 },
    { type: 'category', gridIndex: 2 }
  ],
  yAxis: [{ gridIndex: 0 }, { gridIndex: 1 }, { gridIndex: 2}],
  grid: [{ top: '15%', height: '30%' }, { top: '45%', height: '20%' }, {top: '65%', height: '30%'}],
  series: [
    { type: 'bar', name: '2012' },
    { type: 'bar', name: '2013' },
    { xAxisIndex: 1, yAxisIndex: 1, type: 'line'},
    { type: 'bar', xAxisIndex: 2, yAxisIndex: 2, name: '2014' },
    { type: 'bar', xAxisIndex: 2, yAxisIndex: 2, name: '2015' }
  ]
};


export default {
  mounted() {
    this.initChart()
  },
  methods: {
    initChart() {

      var chartDom = document.getElementById('main');
      var myChart = echarts.init(chartDom);
      option && myChart.setOption(option);
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
