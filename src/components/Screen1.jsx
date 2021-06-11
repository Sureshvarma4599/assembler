import React from 'react'
import {useHistory} from 'react-router-dom'
import Logo from '../assets/aeroplane.png'
export default function Screen1() {
    const history = useHistory()
    const onNextHandler=()=>{
     history.push('/parts')
    }
    return (
        <div className="screens">
              <h1>Assembler</h1>
      <p>Assemble the parts to build a Aeroplane as shown below</p>
      <img src={Logo} width="320px" height="380px" style={{margin:"auto"}}/>
     <button onClick={onNextHandler} style={{margin:"auto",marginTop:"3%",width:"200px",height:"40px"}} >START</button>
        </div>
    )
}
