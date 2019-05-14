<template>
  <div class="main">
    <div class="center">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px">
        <el-form-item label="邮箱" prop="email">
          <el-input placeholder="请输入邮箱" v-model="ruleForm.email" autocomplete="off"></el-input>
        </el-form-item><el-form-item label="用户名" prop="username">
          <el-input placeholder="请输入用户名" v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>	
</template>

<script>
export default {
	 data() {
      var checkEmail = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入邮箱'));
        } else{
          if(value !== ''){
            var reg=/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
            if(!reg.test(value)){
              callback(new Error('请输入有效的邮箱'));
            }
          }
          callback();
        }
      };
      var checkUsername = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'));
        } else{
          if(value.length > 24){
            callback(new Error('用户名长度过长，请控制在24个字符以下'));
          }
          callback();
        }
      };
      
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if(value.length < 6){
            callback(new Error('密码过短，请输入六位以上的密码'));
          }
          else if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          password: '',
          checkPass: '',
          email: '',
          username: ''
       },
        rules: {
          password: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          email: [
            { validator: checkEmail, trigger: 'blur' }
          ],
          username:[
            { validator: checkUsername,trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.registerUser();
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      registerUser () {
        const param = {
          username: this.ruleForm.username,
          password: this.ruleForm.password,
          email: this.ruleForm.email
        };
        this.$axios.post('api/users/register', param)
                .then((res) => {
                  if(res.data.email === "registed"){
                    this.$message({
                      message: '该邮箱已被注册！',
                      type: 'warning'
                    })
                  }
                })
      }
    }
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .main{
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 50px;
  }
  .center{
    width: 60%;
  }
</style>
