<template>
  <div id="main" class="chart"></div>
</template>
<script>
import * as echarts from 'echarts';

var option;

// prettier-ignore
const data = [["2000-06-05", 116], ["2000-06-06", 129], ["2000-06-07", 135], ["2000-06-08", 86], ["2000-06-09", 73], ["2000-06-10", 85], ["2000-06-11", 73], ["2000-06-12", 68], ["2000-06-13", 92], ["2000-06-14", 130], ["2000-06-15", 245], ["2000-06-16", 139], ["2000-06-17", 115], ["2000-06-18", 111], ["2000-06-19", 309], ["2000-06-20", 206], ["2000-06-21", 137], ["2000-06-22", 128], ["2000-06-23", 85], ["2000-06-24", 94], ["2000-06-25", 71], ["2000-06-26", 106], ["2000-06-27", 84], ["2000-06-28", 93], ["2000-06-29", 85], ["2000-06-30", 73], ["2000-07-01", 83], ["2000-07-02", 125], ["2000-07-03", 107], ["2000-07-04", 82], ["2000-07-05", 44], ["2000-07-06", 72], ["2000-07-07", 106], ["2000-07-08", 107], ["2000-07-09", 66], ["2000-07-10", 91], ["2000-07-11", 92], ["2000-07-12", 113], ["2000-07-13", 107], ["2000-07-14", 131], ["2000-07-15", 111], ["2000-07-16", 64], ["2000-07-17", 69], ["2000-07-18", 88], ["2000-07-19", 77], ["2000-07-20", 83], ["2000-07-21", 111], ["2000-07-22", 57], ["2000-07-23", 55], ["2000-07-24", 60]];
const dateList = data.map(function (item) {
  return item[0];
});
const valueList = data.map(function (item) {
  return item[1];
});
option = {
  // Make gradient line here
  visualMap: [
    {
      show: false,
      type: 'continuous',
      seriesIndex: 0,
      min: 0,
      max: 400
    },
    {
      show: false,
      type: 'continuous',
      seriesIndex: 1,
      dimension: 0,
      min: 0,
      max: dateList.length - 1
    }
  ],
  axisPointer: {
    link: [{ xAxisIndex: 'all' }]
  },
  title: [
    {
      left: 'center',
      text: 'Gradient along the y axis'
    },
    {
      top: '55%',
      left: 'center',
      text: 'Gradient along the x axis'
    }
  ],
  tooltip: {
    trigger: 'axis',
    renderMode: 'richText',
    formatter: [
    '{a|这段文本采用样式a}',
    '{b|这段文本采用样式b}这段用默认样式{x|这段用样式x}'
  ].join('\n'),
    rich: {
     a: {
        color: 'red',
        lineHeight: 10
      },
    }
  },
  xAxis: [
    {
      data: dateList,
      show: false,
      axisLabel: {
        show: false
      }
    },
    {
      data: dateList,
      gridIndex: 1,
      axisLabel: {
        show: false
      }
    },
    {
      data: dateList,
      gridIndex: 2
    },
  ],
  yAxis: [
    {
      name: '测试Y轴1'
    },
    {
      gridIndex: 1,
    },
    {
      name: '测试Y轴2',
      gridIndex: 2
    },
  ],
  grid: [
    {
      top: '10%',
      height: '30%',
    },
    {
      top: '40%',
      height: '20%',
    },
    {
      top: '60%',
      height: '30%',
      // offset: '20%'
    }
  ],
  series: [
    {
      type: 'line',
      showSymbol: false,
      data: valueList
    },
    {
      type: 'line',
      xAxisIndex: 1,
      yAxisIndex: 1
    },
    {
      type: 'line',
      showSymbol: false,
      data: valueList,
      xAxisIndex: 2,
      yAxisIndex: 2
    }
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
