import React,{useState} from 'react'
import Draggable from 'react-draggable';
import { useLocation,useHistory } from 'react-router-dom'
export default function Screen3() {
    const location = useLocation()
    const history=useHistory()
    const data = location.state.datas
    console.log(data)
    const [states,setStates]=useState(data)
    console.log(states)
    const onResult =()=>{
         history.push({
             pathname:"/result",
            state:{
                datas:states
            }})
    }
        
    return (
        <div className="screen">
            <div className="list" >
                {states.map((e)=>
                <div >
                    <Draggable>
                <img src={e.image} width="50px" height="50px" on/>
                </Draggable>
                </div>
                )}
            </div>
            <div className="border">
              <p>drop your items here to view</p>
            </div>
            <button onClick={onResult}>Result</button>
        </div>
    )
}
