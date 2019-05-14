import axios from 'axios';
import { Message, Loading } from 'element-ui';
import Router from './router'
let loading;
function startLoading(){
    loading = Loading.service({
        lock: true,
        text: '加载中...',
        background: 'rgba(0,0,0,.7)'
    });
}
function endLoading(){
    loading.close();
}
//请求拦截
axios.interceptors.request.use(
    config => {
        //加载动画
        startLoading();

        //过期Token处理
        if (localStorage.Token) {
            //设置统一的请求头
            config.headers.Authorization = localStorage.Token;
        }

        return config;
    },
    error => {
        return Promise.reject(error);
    }
)

//响应拦截
axios.interceptors.response.use(
    response => {
        //加载动画
        endLoading();
        return response;
    },
    error => {
        endLoading();
        Message.error(error.response.data);

        //获取错误状态码
        const { status } = error.response;
        //错误信息401代表 token 已经失效
        if(status == 401){
            Message.error('token失效，请重新登录！');
            //清除过期的token
            localstorage.removeItem('Token');

            Router.push('/login');
        }

        return Promise.reject(error);
    }
)

export default axios;
