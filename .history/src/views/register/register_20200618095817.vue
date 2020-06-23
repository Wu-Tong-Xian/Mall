<template>
  <div style="width: 500px">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="ruleForm.username"></el-input>
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password" show-password></el-input>
      </el-form-item>

      <el-form-item label="确认密码" prop="rePwd">
        <el-input v-model="ruleForm.rePwd" show-password></el-input>
      </el-form-item>

      <el-form-item label="邮箱" prop="email">
        <el-input v-model="ruleForm.email"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "FormView",

  components: {},

  props: {},

  data() {
    // 自定义验证规则都是一个函数 里面传入3个参数

    // rule:规则一般不用

    // value就代表输入框的值

    // callback必须调用callback 才能进入到下一步

    let validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("确认密码不能为空"));
      } else if (value !== this.ruleForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };

    return {
      ruleForm: {
        username: "",

        password: "",

        rePwd: "",

        email: ""
      },

      // 验证规则

      rules: {
        // 属性就是表单prop对应的值

        // 每一个验证都是一个数组

        // 数组里面就放验证规则 是一个对象

        // required:是否必填 message:错误提示 trigger:触发方式 通常都是blur 失去焦点之后做验证

        // 最小和最大输入长度 min和max

        username: [
          {
            required: true,
            message: "用户名不能为空",
            trigger: "blur"
          },

          {
            min: 2,
            max: 10,
            message: "用户名在2-10位之间",
            trigger: "blur"
          }
        ],

        password: [
          {
            required: true,
            message: "密码不能为空",
            trigger: "blur"
          },

          {
            min: 6,
            max: 15,
            message: "密码在6-15位之间",
            trigger: "blur"
          }
        ],

        rePwd: [
          {
            validator: validatePass,
            trigger: "blur"
          }
        ],

        email: [
          {
            required: true,
            message: "邮箱不能为空",
            trigger: "blur"
          },

          {
            type: "email",
            message: "请输入正确的邮箱",
            trigger: "change"
          }
        ]
      }
    };
  },

  methods: {
    login() {
      // validate是做验证的 里面有一个valid属性是布尔值 如果为true就是代表表单全部输入正确 如果为false 就代表表单输入不正确

      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          this.$message.success("登录成功");
        } else {
          this.$message.error("表单填写有误,请检查");

          return false;
        }
      });
    }
  },

  mounted() {},

  created() {},

  filters: {},

  computed: {},

  watch: {},

  directives: {}
};
</script>

<style scoped lang="scss">
</style>
 