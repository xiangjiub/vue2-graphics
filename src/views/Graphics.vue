<template>
  <Card>
    <div class="back"><Button type="primary" @click="onBack">返回</Button></div>
    <div class="my-chart">
      <Row :gutter="20">
        <Col :span="8"
          ><div
            class="grid-content bg-purple"
            ref="main"
            id="main"
            :style="{ height: '350px' }"
          ></div
        ></Col>
        <Col :span="8"
          ><div
            class="grid-content bg-purple"
            id="main1"
            :style="{ height: '350px' }"
          ></div
        ></Col>
        <Col :span="8"
          ><div
            class="grid-content bg-purple"
            id="main2"
            :style="{ height: '350px' }"
          ></div
        ></Col>
      </Row>
    </div>
  </Card>
</template>

<script>
import Vue from "vue";
import { Card, Button, Row, Col } from "element-ui";

import * as echarts from "echarts";
Vue.prototype.$echarts = echarts;
// require('echarts/theme/macarons') // echarts theme
export default {
  name: "Graphics",
  components: { Card, Button, Row, Col },
  data() {
    return {
      labList: [],
    };
  },
  methods: {
    //返回
    onBack() {
      this.$router.go(-1);
    },
    initChart() {
      this.char = echarts.init(document.getElementById("main"));
      this.char.setOption({
        color: ["#80FFA5", "#00DDFF", "#37A2FF", "#FF0087", "#FFBF00"],
        title: {
          text: "Gradient Stacked Area Chart",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985",
            },
          },
        },
        legend: {
          data: ["Line 3"],
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "Line 3",
            type: "line",
            stack: "Total",
            smooth: true,
            lineStyle: {
              width: 0,
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgb(55, 162, 255)",
                },
                {
                  offset: 1,
                  color: "rgb(116, 21, 219)",
                },
              ]),
            },
            emphasis: {
              focus: "series",
            },
            data: [320, 132, 201, 334, 190, 130, 220],
          },
        ],
      });

       this.char1 = echarts.init(document.getElementById("main1"));
      this.char1.setOption({
        color: ["#80FFA5", "#00DDFF", "#37A2FF", "#FF0087", "#FFBF00"],
        title: {
          text: "Gradient Stacked Area Chart",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985",
            },
          },
        },
        legend: {
          data: ["Line 3"],
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "Line 3",
            type: "line",
            stack: "Total",
            smooth: true,
            lineStyle: {
              width: 0,
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgb(55, 162, 255)",
                },
                {
                  offset: 1,
                  color: "rgb(116, 21, 219)",
                },
              ]),
            },
            emphasis: {
              focus: "series",
            },
            data: [320, 132, 201, 334, 190, 130, 220],
          },
        ],
      });

 this.char2 = echarts.init(document.getElementById("main2"));
      this.char2.setOption({
        color: ["#80FFA5", "#00DDFF", "#37A2FF", "#FF0087", "#FFBF00"],
        title: {
          text: "Gradient Stacked Area Chart",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985",
            },
          },
        },
        legend: {
          data: ["Line 3"],
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "Line 3",
            type: "line",
            stack: "Total",
            smooth: true,
            lineStyle: {
              width: 0,
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgb(55, 162, 255)",
                },
                {
                  offset: 1,
                  color: "rgb(116, 21, 219)",
                },
              ]),
            },
            emphasis: {
              focus: "series",
            },
            data: [320, 132, 201, 334, 190, 130, 220],
          },
        ],
      });

      // this.$axios.get("请求的接口").then((res) => {
      //   console.log("访问后台");
      //   this.labList = res.data.data.labList;
      //   console.log(this.labList);
      //   this.char.setOption({
      //     series: [
      //       {
      //         name: "访问来源",
      //         type: "pie",
      //         radius: "55%",
      //         data: this.labList,
      //       },
      //     ],
      //   });
      // });
    },
  },
  mounted() {
    this.initChart();
  },
};
</script>

<style lang="less" scoped>
.back {
  display: flex;
  justify-content: flex-end;
  margin-right: 8rem;
}
</style>