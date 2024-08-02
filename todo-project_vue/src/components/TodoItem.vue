<template>
  <div>
    <el-col :span="12">
      <el-card class="box-card" shadow="hover" style="margin: 5px 0;">
        <el-row :gutter="12">
          <el-col :span="21">{{ todo }}{{ issue }}</el-col>
          <el-col :span="3">
            <el-button v-if="todo" @click="removeTodo" type="success" icon="el-icon-check" circle></el-button>
            <el-button v-if="issue" @click="closeIssue" type="danger" icon="el-icon-check" circle></el-button>
          </el-col>
        </el-row>
      </el-card>
    </el-col>
  </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: ['todo', 'issue', 'index'],
  methods: {
    removeTodo() {
      this.$emit('removeToDo');
    },
    closeIssue() {
      this.$emit('closeIssue', this.index);
    }
  },
};
</script>
