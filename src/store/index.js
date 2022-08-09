//创建store实例对象
//引入vuex来管理项目数据
import { createStore } from 'vuex'

export default createStore({
    state: {
        headerTitle: "当天信息",
        placeholderText:"",
        searchText:'',
        error_code:0,
        dayDate:{},
        monthDate:[],
        yearDate:[],
        field:'day'
    },
    mutations: {
        //改变header组件的信息
        changeheaderTitle(state, routername) {
            switch (routername) {
                case 'Today':
                    state.headerTitle = "当天信息"
                    break;
                case 'Recent':
                    state.headerTitle = "近期信息"
                    break;
                case 'Year':
                    state.headerTitle = "当年信息"
                    break;
                default:
                    break;
            }
        },
        //改变输入框的placeholder
        changeplaceholderText(state,routername){
            const  date = new Date()
            let year = date.getFullYear()
            let month = date.getMonth()+1
            let day = date.getDate()
            month = month < 10 ? '0'+ month :month
            day = day < 10 ? '0' + day : day
      
            switch (routername) {
              case 'Today':
                state.placeholderText = `输入格式：${year}${month}${day}(${year}年${month}月${day}日)`
                break;
              case 'Recent':
                state.placeholderText = `输入格式：${year}${month}(${year}年${month}月)`
                break;
              case 'Year':
                state.placeholderText = `输入格式：${year}(${year}年)`
                break;
              default:
                break;
        }
        },
        //更改搜索框的文本，我们需要搜索框的内容，以便来更新数据
        setsearchText(state,searchText){
          state.searchText = searchText
        },
        //更改错误的信息
        setErrorcode(state,errorCode){
          state.error_code = errorCode
        },
        //setDate用来将我们从服务器上获取的信息，保存到state中
        //我们触发这个mutation时，我们需要传入一个对象作为参数
        //这个对象需要包括 field 用来判断到底是 day recent 还是 year
        //其次就是需要更改的数据
        setDate(state,payload){
          //用解构赋值将它解构出来，以便直接用
          const {field,data} = payload
          //通过switch来判断field的值，将不同的数据保存到不同的state属性中
          switch (field) {
            case 'day':
              state.dayDate = data
              break;
            case 'recent':
              state.monthDate = data
              break;
            case 'year':
              state.yearDate = data
              break;
            default:
              break;
          }
        }
}})