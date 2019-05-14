<template>
  <div id="app">
  	<router-view />
  </div>
</template>

<script>
    //  引入解析token的插件jwt
    import jwt_decode from 'jwt-decode'
    export default {
        name: "app",
        components: {},
        created(){
            if(localStorage.Token) {
                const decoded = jwt_decode(localStorage.Token);

                // 将解析的token存储到VUEX
                this.$store.dispatch("setAuthenticated",!this.isEmpty(decoded));
                this.$store.dispatch("setUser",decoded);
            }
        },
        methods:{
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

<style>

</style>
