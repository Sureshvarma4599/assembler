import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import Tail from '../assets/tail.png'
import Cockpit from '../assets/cockpit.png'
import Left from '../assets/left.png'
import Right from '../assets/right.png'
import Body from '../assets/body.png'
export default function Screen2() {
    const [colorT,setColorT]=useState("white")
    const [colorC,setColorC]=useState("white")
    const [colorB,setColorB]=useState("white")
    const [colorR,setColorR]=useState("white")
    const [colorL,setColorL]=useState("white")
    const data=[
        {
            "image":Tail,
            "name":"Tail",
            "no":5,
            "color":colorT
        },
        {
            "image":Cockpit,
            "name":"Cockpit",
            "no":1,
            "color":colorC
        },
        {
            "image":Left,
            "name":"Left arm",
            "no":2,
            "color":colorL
        },
        {
            "image":Right,
            "name":"Right arm",
            "no":4,
            "color":colorR
        },
         {
            "image":Body,
            "no":3,
            "name":"Body",
            "color":colorB
        },
    ]
    const parts=[]
    const trash=[]
    var count=0;
    const onCheckHandler=(image,name,no,color)=>{ 
       
       parts.push({image,name,no,color})
       count=count+1;
        console.log(parts)
    }
    const history = useHistory()
    const onNextHandler=()=>{
        if(count>2){
        history.push({
            pathname:"/assembly",
            state:{datas:parts}
        })
     }else{
         alert('add atleast 3')
     }
    
    }
    return (
        <div className="cart">
        <div className="section" >
            {data.map((e)=>
            <div className="card" style={{}} onClick={()=>onCheckHandler(e.image,e.name,e.no,e.color)}>
            <img src={e.image} width="120px" alt="" />
            <p>{e.name}</p>
             </div>
            )}
        </div>
        <p>click on images to add</p>
        <button onClick={onNextHandler} >Add to Shop</button>    
        </div>
    )
}
