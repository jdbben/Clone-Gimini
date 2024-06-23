import { createContext, useState } from "react";
import run from "../config/Genimi";

export const Context = createContext()

const ContextProvider = (props) =>{
    
    const delayPara = (index,nextworld) =>{


    }

 const [input , setInput] = useState("")
 const [recentPropmt , setRecentPrompt]=useState("")
 const [prevPrompt , setPrevPrompt] = useState([])
 const [showResult , setShowResult]=useState(false)
 const [loading, setLoading]=useState(false)
 const [resultData, setResultData] = useState("")

 const onSent = async(prompt)=>{
    setResultData("")
    setLoading(true)
    setShowResult(true)
    setRecentPrompt(input)
    const response = await run(input)
    let responseArray = response.split("**")
    let newResponse
    for(let i = 0 ;i < responseArray.length;i++){
        if(i === 0 || i%2 !== 1){
            newResponse += responseArray[i]
        }else{
            newResponse += "<b>"+responseArray[i]+"</b>"
        }
    }
    setResultData(newResponse)
    setLoading(false)
    setInput("")
}

    const contextValue = {
        prevPrompt,
        setPrevPrompt,
        onSent,
        setRecentPrompt,
        recentPropmt,
        showResult,
        loading,
        resultData,
        input,
        setInput
    }
    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider