module.exports = {
    devServer:{
        host:'localhost',
        port:8080,
        proxy:{
            '/api':{
                target:'http://v.juhe.cn',
                changeOrigin:true,
                secure:false,
                pathRewrite:{
                    '^/api':''
                }
            }
        }
 
    },
    //关闭eslint语法检查
    lintOnSave:false
}