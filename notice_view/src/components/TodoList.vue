<template>
  <div class="todoList">
    <el-form label-width="80px" :rules="rules">
      <el-form-item 
        v-for="(item, index) in todolist" 
        :key="item.id" 
        :label="index == 0? '添加事项' : item.id + ''"
        >
        <el-row :gutter="20">
          <el-col :span="8">
            <el-input :disabled="!(index == 0)" v-model="item.message"></el-input>
          </el-col>
          <el-col :span="6">
            <el-button size="small" type="success" icon="el-icon-plus" @click="addNote(item.message)" v-if="index == 0"></el-button>
            <el-button size="small" type="denger" icon="el-icon-delete" @click="remove(item.id)" v-if="index !== 0"></el-button>
          </el-col>
        </el-row>
      </el-form-item>
    </el-form>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      todolist: [{id: 0, message: ""}],
      initId: 0,
      rules: {
        message: [
          {
            required: true,
            message: '请输入待办事项',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    addNote (str) {
      let node = {
        id: ++ this.initId,
        message: str,
      }
      this.todolist[0].message = "";
      this.todolist.push(node);
    },
    remove (id) {
      if (this.todolist.length === 1) {
        this.addNote('');
      }
      this.removeNode(id);
    },
    removeNode (id) {
      const arr = this.todolist;
      for(let i = 0; i < arr.length; i++) {
        if (arr[i].id === id) {
          return arr.splice(i, 1);
        }
      }
    }
  },
  components: {

  }
}
</script>

<style scoped lang="scss">
</style>

