<template>
    <div class="main">
        <div class="center">
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px">
                <el-form-item label="用户名" prop="username">
                    <el-input placeholder="请输入用户名" v-model="ruleForm.username" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
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
        return {
            ruleForm: {
                username: '',
                password: ''
            },
            rules: {
                username:[
                    { validator: checkUsername,trigger: 'blur' }
                ],
                password: [
                    { validator: validatePass, trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    const name = this.ruleForm.username
                    const pass = this.ruleForm.password
                    this.cAccount(name, pass);
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        cAccount(username,password) {
            this.$axios.get("http://localhost:3000/userInfo", {
                params:{
                    'username': username,
                    'password': password
                }
            }).then((response) => {
                if(response.data.length === 0){
                    this.$message({
                        message: '用户名或密码错误，请重试！',
                        type: 'warning'
                    });
                }
                else{
                    this.$message({
                        message: '登录成功，欢迎您  '+response.data[0].username,
                        type: 'success'
                    });
                    this.$router.push("/")
                }
            }).catch((err) => {
                console.log(err)
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
