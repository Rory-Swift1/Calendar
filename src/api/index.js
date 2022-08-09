//分装收到的数据，并把数据存入store中

//引入获取数据的方法
import {
    getDayData,
    getRecentData,
    getYearData
} from './request'

//引入改换成中国格式日期的函数和展开的函数
import {formatChsDate,mapForChsDate} from '../service/tool'

//由于axios发请求之后返回的是promise对象，是异步的
//而我们需要等数据返回之后在进行操作,所以使用 async 和 await 来将多个异步变成同步
//而且由于我们需要将获得的数据存入store中，我们需要传入一个store来commit mutation
export default async (store,field, date) => {
    let data = null
    //等待请求，获得数据后保存到data中
    switch (field) {
        case 'day':
            data = await getDayData(date)
            break;
        case 'recent':
            data = await getRecentData(date)
            break;
        case 'year':
            data = await getYearData(date)
            break;
        default:
            break;
    }
    // 判断返回的数据成功与否
    //如果不成功，就把错误数据，存到state中，在从页面直接读取，展示给用户
    if(data.error_code !== 0){
        store.commit('setErrorcode',data.error_code)
        return
    }else{
        //如果成功，我们创建一个新的空对象，用来保存我们所需要的数据
        let res = null
        switch (field) {
            case 'day':
            res = data.result.data
            res.date = formatChsDate(res.date,'day')
            res['year-month'] = formatChsDate(res['year-month'],'recent')
                break;
            case 'recent':
            res = data.result.data.holiday_array
            res = mapForChsDate(res,'festival')
                break;
            case 'year':
            res = data.result.data.holiday_list
            res = mapForChsDate(res,'startday')
                break;
            default:
                break;
        }
        
        //成功获得了我们需要的数据
        //通过commit方法调用setDate mutation来更改store实例上的数据
        store.commit('setDate',{
            field,
            data:res
        })
    }
}