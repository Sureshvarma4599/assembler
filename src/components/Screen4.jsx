import React,{useState} from 'react' 
import White from '../assets/white.jpg'
import { useLocation,useHistory } from 'react-router-dom'
export default function Screen4() {
    const location = useLocation()
    const data = location.state.datas
    console.log(data)
    const [cockpit,setCockpit]=useState(White)
    const [left,setLeft]=useState(White)
    const [body,setBody]=useState(White)
    const [right,setRight]=useState(White)
    const [tail,setTail]=useState(White)
    const filter = data
    const onClickHandler=()=>{
    filter.map((e)=>{
        if(e.no===1){
            setCockpit(e.image)
        }
        if(e.no===2){
            setLeft(e.image)
        }
        if(e.no===4){
            setRight(e.image)
        }
        if(e.no===3){
            setBody(e.image)
        }
        if(e.no===5){
            setTail(e.image)
        }
    })
}
    return (
        <div className="view">
            <button onClick={onClickHandler}>get image</button>
        <div className="result"> 
            <img src={White} width="100px" height="100px"/>
            <img src={cockpit}  width="100px" height="100px"/>
            <img src={White}  width="100px" height="100px"/>
            <img src={left}  width="100px" height="100px"/>
            <img src={body}  width="100px" height="100px"/>
            <img src={right}  width="100px" height="100px"/>
            <img src={White}  width="100px" height="100px"/>
            <img src={tail}  width="100px" height="100px"/>
            <img src={White}  width="100px" height="100px"/>
        </div>
        </div>
    )
}
