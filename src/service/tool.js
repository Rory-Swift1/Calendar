//这个文件用来保存一些方法（函数）
//由于使用了VUE3 在VUE3中的方法都在setup可以直接定义，所以可以
//用一个单独的文件 取名tool.js来保存一些多个组件中都需要用到的方法,提取出来方便维护

//获取新日期的函数 并输出为2022-1-1的格式
function getnewDate(field){
    let currentdate=new Date()
    let currentyear=currentdate.getFullYear()
    let currentmonth= currentdate.getMonth()+1
    let currentday = currentdate.getDate()
    switch (field) {
        case 'day':
        return `${currentyear}-${currentmonth}-${currentday}`
            break;
        case 'recent':
        return `${currentyear}-${currentmonth}`    
            break;
        case 'year':
        return `${currentyear}`        
            break;
        default:
            break;
    }
}
//将日期数据转换成中国样式（年月日）的函数
function formatChsDate(date,type){
    const _arr = date.split('-')
    switch (type) {
        case 'day':
            return `${_arr[0]}年${_arr[1]}月${_arr[2]}日`
            break;
        case 'recent':
            return `${_arr[0]}年${_arr[1]}月`
            break;
        case 'year':
            return `${_arr[0]}年`
            break;
        default:
            return `${_arr[0]}年${_arr[1]}月${_arr[2]}日`
            break;
    }
}

//分装一个将数据用map函数展开的函数
function mapForChsDate(data,key){
    return data.map((item)=>{
        item[key] = formatChsDate(item[key])
        return item
    })
}

//导出分装的函数
export {
    getnewDate,
    formatChsDate,
    mapForChsDate
}