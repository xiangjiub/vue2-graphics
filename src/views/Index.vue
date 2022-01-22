<template>
  <Card>
    <Form :inline="true" :model="formState" class="demo-form-inline">
      <FormItem label="主机名字">
        <Input v-model="formState.name" placeholder="主机名字"></Input>
      </FormItem>
      <FormItem label="主机IP">
        <Input v-model="formState.ip" placeholder="主机IP"></Input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="onSearch"  icon="el-icon-search">查询</Button>
        <Button type="primary" @click="onReset">重置</Button>
      </FormItem>
    </Form>

    <Table :data="tableData" style="width: 100%">
      <TableColumn prop="name" label="名称" > </TableColumn>
      <TableColumn prop="ipAddress" label="接口"> </TableColumn>
      <TableColumn prop="isAvailable" label="可用性"> 
        <template slot-scope="scope">
          <Tag
            :type="scope.row.isAvailable == 'true' ? 'primary' : 'success'"
            disable-transitions>{{scope.row.isAvailable == 'true' ? '可用' : '不可用'}}
          </Tag>
        </template>
      </TableColumn>
      <TableColumn prop="status" label="状态"> </TableColumn>
      <TableColumn fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <Button @click="handleClickItem(scope.row)" type="text" size="small">查看明细</Button>
        </template>
      </TableColumn>
    </Table>
  </Card>
</template>

<script>
import {
  Button,
  Card,
  Form,
  FormItem,
  Input,
  Table,
  TableColumn,Tag,
} from "element-ui";
export default {
  name: "Index",
  components: {
    Button,
    Card,
    Form,
    FormItem,
    Input,
    Table,
    TableColumn,Tag
  },
  data() {
    return {
      formState: {
        //查询表单数据
        ip: "",
        name: "",
      },
      initData: [
        //表格数据
        {
          id: "1",
          name: "192.168.20.18-中央厨房数据库",
          ipAddress: "192.168.20.18:11050",
          isAvailable: "true",
          status: "已启用",
          graphics: "图形 30",
        },
        {
          id: "2",
          name: "192.168.20.19-两微一端数据库",
          ipAddress: "192.168.20.19:11050",
          isAvailable: "false",
          status: "已启用",
          graphics: "图形 29",
        },
        {
          id: "3",
          name: "Leibo-192.168.1.5-两微一端数据库",
          ipAddress: "192.168.1.5:11050",
          isAvailable: "false",
          status: "已启用",
          graphics: "图形 28",
        },
        {
          id: "4",
          name: "Leibo-192.168.1.6-中央厨房数据库",
          ipAddress: "192.168.1.6:11050",
          isAvailable: "true",
          status: "已启用",
          graphics: "图形 32",
        },
        {
          id: "5",
          name: "Renshou-192.168.2.171-教育缴费数据库",
          ipAddress: "192.168.2.171:11050",
          isAvailable: "false",
          status: "已启用",
          graphics: "图形 27",
        },
        {
          id: "6",
          name: "Renshou-192.168.2.173-新闻+数据库",
          ipAddress: "192.168.2.173:11050",
          isAvailable: "true",
          status: "已启用",
          graphics: "图形 27",
        },
        {
          id: "7",
          name: "Renshou-192.168.2.183-电商数据库",
          ipAddress: "192.168.2.183:11050",
          isAvailable: "false",
          status: "已启用",
          graphics: "图形 29",
        },
        {
          id: "8",
          name: "Renshou-192.168.2.187-两微一端数据库",
          ipAddress: "192.168.2.187:11050",
          isAvailable: "true",
          status: "已启用",
          graphics: "图形 29",
        },
      ], //初始化出局
      tableData: [], //表格数据
    };
  },
  methods: {
    //查询
    onSearch() {
      this.tableData = this.formState.ip?this.tableData.filter((item) => item.ipAddress == this.formState.ip):this.tableData;
      this.tableData = this.formState.name?this.tableData.filter((item)=> item.name == this.formState.name):this.tableData
    },
    //查看明细
    handleClickItem(row){
        this.$router.push({
            path:"/hostGraphics",
            query:{id:row.id}
        })
    },
    //重置
    onReset() {
      this.tableData = [...this.initData];
      this.formState.name = "";
      this.formState.ip = "";
    },
  },
  mounted() {
    this.tableData = [...this.initData];
  },
};
</script>

<style lang="less" scoped>
</style>