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
                    <el-button type="primary" @click="loginUser">登录</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    import jwt_decode from 'jwt-decode'
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
                    console.log(1)
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        loginUser () {
            this.$axios.post('api/users/login', {
                username: this.ruleForm.username,
                password: this.ruleForm.password
            }).then((res) => {
                console.log(res.data.status);
                if(res.data.status === "none") {
                    this.$message({
                        message: '当前用户不存在！',
                        type: 'error'
                    });
                }else if(res.data.status === "error"){
                    this.$message({
                        message: '密码错误！',
                        type: 'warning'
                    });
                }else{
                    this.$message({
                        message: '登录成功！ 欢迎您   ',
                        type: 'success'
                    });
                    console.log(res);
                    const { token } = res.data;
                    localStorage.setItem('Token', token);

                    const decoded = jwt_decode(token);
                    // console.log(decoded);

                    this.$store.dispatch("setAuthenticated",!this.isEmpty(decoded));
                    this.$store.dispatch("setUser",decoded);

                    this.$router.push("/");
                }
            })
        },
        isEmpty(value){
            return (
                value === undefined ||
                value === null ||
                (typeof value === "object" && Object.keys(value).length === 0) ||
                (typeof value === "string" && value.trim().length === 0)
            );
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
