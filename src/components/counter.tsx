import React from "react";
import {useSelector,useDispatch} from "react-redux"
import { ICounter } from "../interface/counter";


type Props={}

const Counter =()=>{
    const counter = useSelector((state:ICounter)=>state)
    const dispatch= useDispatch()
    return <div>
        Counter : {counter.count}
        <button onClick={()=>dispatch({type :"icrement"})}>icrement</button>
        <button onClick={()=>dispatch({type :"decrement"})}>decrement</button>
        <button onClick={()=>dispatch({type :"increase",payload:10})}>increase</button>
    </div>
}

export default Counter