//requst.js文件用来封装请求数据的函数
import { axiosPost } from './http'

//获取当天的数据的函数
function getDayData (date){
    return new Promise((resolve,reject)=>{
       axiosPost({
           url:"/api/calendar/day",
           data:{date},
           success(data){
               resolve (data)
           },
           error(err){
               reject(err)
           }
       })
    })
}

//获取近期数据的函数
function getRecentData (yearMonth){
    return new Promise((resolve,reject)=>{
       axiosPost({
           url:"/api/calendar/month",
           data:{
               "year-month":yearMonth
           },
           success(data){
               resolve (data)
           },
           error(err){
               reject(err)
           }
       })
    })
}

//获取当年数据的函数
function getYearData (year){
    return new Promise((resolve,reject)=>{
       axiosPost({
           url:"/api/calendar/year",
           data:{year},
           success(data){
               resolve (data)
           },
           error(err){
               reject(err)
           }
       })
    })
}


export{
    getDayData,
    getRecentData,
    getYearData
}