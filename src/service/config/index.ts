export const BASE_URL='http://localhost:3000'

export const TIME_OUT=10000

//依赖当前开发环境
// let BASE_URL=''
// if(process.env.NODE_ENV)
// {
//     BASE_URL='http://localhost.dev:3000'
// }
// else
// {
//     BASE_URL='http://localhost.prod:3000'
// }

// export {BASE_URL}

//从定义的环境变量的配置文件中加载变量
console.log(process.env.REACT_APP_BASE_URL)
