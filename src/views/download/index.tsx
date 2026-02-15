import React ,{memo}from 'react'
import type {ReactNode} from 'react'

interface IProps{
    children?:ReactNode //一定要加上children属性,因为现在的版本FC特性不支持直接用children
    name:string
    age:number
    height?:number
}


const Download:React.FC<IProps>=(props)=>{
    return (
        <div>
            <div>name:{props.name}</div>
            <div>age:{props.age}</div>
            <div>height{props.height}</div>
        </div>
    )
}


//直接对props进行类型约束
// const Download =(props:Iprops)=>{
//     return (
//         <div>
//             <div>name:{props.name}</div>
//             <div>age:{props.age}</div>
//             <div>height{props.height}</div>
//         </div>.
//     )
// }

export default memo(Download)
