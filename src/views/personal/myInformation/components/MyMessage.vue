<template>
    <div class="my-message">
        <form v-show="false" action="api/users/post-avatar" method="post" enctype="multipart/form-data">
            <h2>单图上传</h2>
            <input type="file" name="logo">
            <input type="submit" value="提交">
        </form>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
<!--            <el-form-item label="用户头像" prop="avatar">-->
<!--                <div class="img">-->
<!--                    <img src="../../../../assets/personal/avatar/avatar01.jpg" alt="">-->
<!--                </div>-->
<!--                <input type="file" name="avatar">-->
<!--            </el-form-item>-->
            <el-form-item label="用户名" prop="username">
                <el-input type="text" v-model="ruleForm.username" :placeholder="user.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="年龄" prop="age">
                <el-input v-model.number="ruleForm.age" :placeholder="user.age"></el-input>
            </el-form-item>
            <el-form-item label="性别" prop="sex">
                <el-radio-group v-model="ruleForm.sex">
                    <el-radio label="男"></el-radio>
                    <el-radio label="女"></el-radio>
                    <el-radio label="外星人"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
                <el-input v-model.number="ruleForm.email" :placeholder="user.email"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">确定修改</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "MyMessage",
        data() {
            const checkAge = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('年龄不能为空'));
                }
                setTimeout(() => {
                    if (!Number.isInteger(value)) {
                        callback(new Error('请输入数字值'));
                    } else {
                        if (value < 9 || value > 99) {
                            callback(new Error('请输入有效年龄'));
                        } else {
                            callback();
                        }
                    }
                }, 400);
            };
            return {
                ruleForm: {
                    id: '',
                    username: this.$store.getters.user.name,
                    intro: '',
                    sex: this.$store.getters.user.sex,
                    age: this.$store.getters.user.age,
                    email: this.$store.getters.user.email,
                    avatar: ''
                },
                fileList: [],
                rules: {
                    username: [
                        { min: 2, max: 20, message: '长度在 2 到 20 个字符' }
                    ],
                    age: [
                        { validator: checkAge, trigger: 'blur' }
                    ],
                    email: [
                        { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$axios.post("api/users/postmsg", {
                            id: this.$store.getters.user.id,
                            username: this.ruleForm.username,
                            age: this.ruleForm.age,
                            sex: this.ruleForm.sex,
                            email: this.ruleForm.email
                        }).then((res) => {
                            // console.log(res.status);
                            localStorage.removeItem('Token');
                            this.$store.dispatch('clearCurrentState');
                            this.$router.push('/login')
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            submitUpload() {
                this.$refs.upload.submit();
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            }
        },
        computed: {
            user() {
                if(this.$store.getters.user){
                    // this.ruleForm.id = this.$store.getters.user.id;
                    // this.ruleForm.username = this.$store.getters.user.name;
                    // this.ruleForm.sex = this.$store.getters.user.sex;
                    // this.ruleForm.age = this.$store.getters.user.age;
                    // this.ruleForm.email = this.$store.getters.user.email;
                    return this.$store.getters.user;
                }
            }
        }
    }
</script>

<style scoped>
    .my-message{
        width: 60%;
        height: 100%;
        margin: 50px auto;
    }
    .img{
        width: 150px;
        height: 150px;
    }
    .img img{
        width: 100%;
        height: 100%;
    }
</style>