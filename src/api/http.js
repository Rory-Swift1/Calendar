//http.js文件用来封装axios请求，设置一些请求配置
import axios from 'axios'
import qs from 'qs'
import {JUHE_APPKEY} from '../configs/keys.js'

//封装axios实例对象上的Post请求
function axiosPost(options){
    axios({
        url:options.url,
        method:'post',
        header:{
            "Content-Type":"application/x-www-form-urlencoded"
        },
        data:qs.stringify({
            ...options.data,
            //由于聚合接口请求时需要KEY，所以分装时直接把KEY分装进来，以后请求就不用加KEY了
            key:JUHE_APPKEY
        })
    })
    .then(res=>{
        options.success(res.data)
    })
    .catch(err=>{
        options.error(err)
    })
}

//封装axios实例对象上的Get请求

function axiosGet(options){
    axios(options.url + "&key=" +JUHE_APPKEY)
    .then(res=>{
        options.success(res.data)
    })
    .catch(err=>{
        options.error(err)
    })
}


//向外暴露这两个封装的方法
export {
    axiosPost,
    axiosGet
}