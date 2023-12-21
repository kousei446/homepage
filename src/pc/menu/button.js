import "./menu.css"
import { useState } from "react"
import from from "./from"
export const Button=()=>{

    const[screen,setScreen]=useState(true)
    const change=()=>{
        setScreen(screen)
        console.log("こんにちわ")
        console.log("こんにちわ＋＋")
        
        if (screen===1) {
            return(
                {from}
            )
        }
    }

    return(
        <div >
            <button style={{
                alignItems: "center",
                cursor: "pointer",
                display: "flex",
                margin: "0px",
            }}
            onClick={change}
            >
                <p>出身</p>
            </button>
        </div>
    )
}