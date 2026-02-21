import React,{PureComponent} from 'react'

interface IProps{
    name:string,
    age?:number
}

class Demo02 extends PureComponent<IProps> {
    constructor(props:IProps){
        super(props)
    }
    render():React.ReactNode{
        return <div>Demo02</div>
    }
}

export default Demo02
