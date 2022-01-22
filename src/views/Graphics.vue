<template>
  <Card>
    <div class="back"><Button type="primary" @click="onBack" >返回</Button></div>
    <div class="my-chart">
      <Row :gutter="20">
        <Col :span="8" v-for="item in chartList" :key="item.id">
          <div
            class="grid-content bg-purple"
            ref="chartRef"
            :style="{ height: '350px' }"
          ></div>
        </Col>
      </Row>
    </div>
  </Card>
</template>

<script>
import { Card, Button, Row, Col } from "element-ui";

import * as echarts from "echarts";
export default {
  name: "Graphics",
  components: { Card, Button, Row, Col },
  data() {
    return {
      mychar: [],
      chartList: [
        {
          id: "1",
          text: "192.168.2.85: Processes",
          xAxis: ["12:00", "12:05", "12:10", "12:15", "12:20", "12:25", "12:30"],
          color:["#358b2d","#4084ae","#f7491e","#fc7fad","#7d6ce0","#80FFA5", "#00DDFF",],
          data: [
            {
              name: "Number of processes",
              ydata: [140, 232, 101, 264, 90, 340, 250],
            },
            {
              name: "Number of runing processes",
              ydata: [320, 132, 201, 334, 190, 130, 220],
            },
          ],
        },
        {
          id: "2",
          text: "Gradient Stacked Area Chart",
          xAxis: ["12:00", "12:05", "12:10", "12:15", "12:20", "12:25", "12:30"],
          color:["#fc7fad","#7d6ce0","#80FFA5", "#00DDFF","#358b2d","#4084ae","#f7491e"],
          data: [
            {
              name: "Number of processes",
              ydata: [140, 232, 101, 264, 90, 340, 250],
            },
            {
              name: "Number of runing processes",
              ydata: [320, 132, 201, 334, 190, 130, 220],
            },
          ],
        },
        {
          id: "3",
          text: "Gradient Stacked Area Chart",
          xAxis: ["12:00", "12:05", "12:10", "12:15", "12:20", "12:25", "12:30"],
          color:["#4084ae","#f7491e","#00DDFF","#80FFA5", "#358b2d","#fc7fad","#7d6ce0"],
          data: [
            {
              name: "Number of processes",
              ydata: [140, 232, 101, 264, 90, 340, 250],
            },
            {
              name: "Number of runing processes",
              ydata: [320, 132, 201, 334, 190, 130, 220],
            },
          ],
        },
      ],
    };
  },
  methods: {

    //返回
    onBack() {
      this.$router.go(-1);
    },
    setOption(){
      this.chartList.map((item, index) => {
      let legendData = []
      let myseries = item.data.map((series,seriesIndex)=>{
            legendData.push(series.name)
            series.type = "line",
            series.stack = "Total",
            series.smooth = true,
            series.lineStyle = {
              width: 0,
            },
            series.showSymbol = false,
            series.areaStyle = {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  // color: "rgb(128, 255, 165)",
                  color:item.color[seriesIndex]
                },
                {
                  offset: 1,
                  // color: "rgb(1, 191, 236)",
                  color:item.color[seriesIndex]
                },
              ]),
            },
            series.emphasis = {
              focus: "series",
            },
            series.data = [...series.ydata],
            series.markPoint = {
              symbol: "pin", //标记(气泡)的图形
              symbolSize: 40, //标记(气泡)的大小
              itemStyle: {
                color: item.color[seriesIndex], //图形的颜色。
                borderColor: "#000", //图形的描边颜色。支持的颜色格式同 color，不支持回调函数。
                borderWidth: 0, //描边线宽。为 0 时无描边。
                borderType: "solid", //柱条的描边类型，默认为实线，支持 ‘solid’, ‘dashed’, ‘dotted’。
              },
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" },
              ],
            },
            series.markLine = {
              data: [{ type: "average", name: "平均值" }],
            }
            return series
          })
      
  
      this.$nextTick(() => {
        if (!this.mychar[index].setOption) return

          this.mychar[index].setOption({
            color: [...item.color],
            title: {
              text: item.text,
              left: "center",
              textStyle: {
                color: '#333333',
                fontWeight: 'bold',
                fontSize: 15
              }
            },
            tooltip: {
              trigger: "axis",
              axisPointer: {
                type: "cross",
                label: {
                  backgroundColor: "#f40",
                },
              },
            },
            legend: {
              data: [
                ...legendData
              ],
              x: "left",
              y: "bottom",
              orient: "vertical",
              icon: "bar",
            },
            toolbox: {
              feature: {
                saveAsImage: {},
              },
            },
            grid: {
              left: "3%",
              right: "4%",
              // bottom: "10%",
              containLabel: true,
            },
            xAxis: [
              {
                type: "category",
                boundaryGap: false,
                data: [...item.xAxis],
              },
            ],
            yAxis: [
              {
                type: "value",
              },
            ],
            series:[...myseries],
          });
          
        });
      });
    },
    initChart() {
      this.chartList.map((item, index) => {
        this.mychar[index] = echarts.init(this.$refs.chartRef[index]);
        this.setOption()
      });
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart();
    });

    window.onresize = () => {
      this.chartList.forEach((item,index)=>{
        this.mychar[index].resize()
      })
    }
  },
};
</script>

<style lang="less" scoped>
.back {
  display: flex;
  justify-content: flex-end;
  margin-right: 8rem;

  padding: 15px 0;
}
</style>