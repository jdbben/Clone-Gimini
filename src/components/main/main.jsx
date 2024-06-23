import React, { useContext } from 'react'
import "./main.css"
import "../../assets/assets"
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {
    const {onSent,recentPropmt,showResult,loading,resultData,setInput,input}=useContext(Context)
  return (
    <div className='main'>
         <div className="Nav">
            <p className="app-Name">Gemini</p>
            <img className="user-img" src={assets.user_icon} alt="" />
        </div>
    <div className="container">
        {!showResult
        ?<>
         <div className="hello-msg">
        <p><span>Hello,Dev</span></p>
        <p>How can i help you today?</p>
    </div>
    <div className="boxs">
        <div className="msg-box">
            <p>Suggest beautiful places to see on an upcoming road trip</p>
            <img src={assets.compass_icon} alt="" />
        </div><div className="msg-box">
            <p >Briefly summarize this concept: urban planning</p>
            <img src={assets.bulb_icon} alt="" />
        </div><div className="msg-box">
            <p>Brainstorm team bonding activities for our work retreat</p>
            <img src={assets.message_icon} alt="" />
        </div><div className="msg-box">
            <p>Tell me about React js and React native</p>
            <img src={assets.code_icon} alt="" />
        </div>
    </div></>:<div className='result'>
        <div className="result-title">
            <img src={assets.user_icon} alt="" />
           
            <p>{recentPropmt}</p>
            </div>
            <div className="result-data">
                <img src={assets.gemini_icon} alt="" />
                {loading
                ?<div className='loader'>
                    <hr />
                    <hr />
                    <hr />
                    </div>
                    :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
                    }
                
            </div>
        
    </div>
        }
   
    <div className="main-bottom">
        <div className="search-box">
            <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
            <div>
                <img src={assets.gallery_icon} alt="" />
                <img src={assets.mic_icon} alt="" />
               {input?
               <img onClick={()=> onSent()} src={assets.send_icon} alt="" />:null
               } 
            </div> 
        </div>
        <p className='bottom-info'>Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</p>
    </div>
    </div>
    </div>
  )
}

export default Main
