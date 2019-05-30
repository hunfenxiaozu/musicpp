<template>
    <div class="personal">
        <div class="black-card"></div>
        <p-canvas :username="user.name"></p-canvas>
        <p-content ></p-content>
    </div>
</template>

<script>
    import PCanvas from './components/PCanvas'
    import PContent from './components/PContent'
    export default {
        name: "Personal",
        components: { PCanvas, PContent },
        data () {
            return {
                username: '',
                avatar: ''
            }
        },
        methods: {
            checkU(){
                if(localStorage.Token){
                    const token = localStorage.Token;
                    const decoded = jwt_decode(token);
                    console.log(decoded);
                    this.username = decoded.name;
                    this.login = false;
                }
            }
        },
        computed: {
            user() {
                if(this.$store.getters.user){
                    return this.$store.getters.user;
                }
            }
        }
    }
</script>

<style scoped>
    .personal{
        width: 100%;
        height: 100%;
        background: url("../../assets/personal/canvas/canvas03.jpg");
        background-attachment:fixed;
        z-index:-10;
        zoom: 1;
        background-repeat: no-repeat;
        background-size: cover;
        -webkit-background-size: cover;
        -o-background-size: cover;
        background-position: center 0;
    }
    /*.black-card{*/
    /*    position: fixed;*/
    /*    width: 100%;*/
    /*    left: 0;*/
    /*    top: 0;*/
    /*    bottom: 0;*/
    /*    z-index: 1;*/
    /*    background-color: rgba(28,28,28,0.7);*/
    /*}*/
    .personal{
        padding-top: 20px;
    }
</style>