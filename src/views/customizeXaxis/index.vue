
<template>
  <div id="main" class="chart"></div>
</template>
<script>
import * as echarts from 'echarts';
var originData = [150, 193, 230, 333, 224, 324, 218, 123 ]
var option = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'aaa','Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    axisLabel: {
       interval: function(index) {
         if(index ===1 || index === 3 || index === 5 || index === 7) {
           return false
         }
         return true
      }
    },
    axisTick: {
      interval: function(index) {
         if(index ===1|| index === 3 || index === 5 || index === 7) {
           return false
         }
         return true
      },
      alignWithLabel: true
    }
  },
  tooltip: {
    show: true,
    trigger: 'axis',
    formatter: function(params) {
      const {dataIndex, name} = params[0]
      return '<div>'+ name+ ':' + originData[dataIndex]+'</div>'
    }
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [150, null, 230, null, 224, null, 218, null ],
      type: 'bar'
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
