import React ,{useContext}from 'react'
import './main.css'
import { assets } from '../../assets/assets'
import {Context} from '../../context/context'

function Main() {
  const{onSent,recentPrompt,showResult,loading,resultData,setInput,input}=useContext(Context)

  
    const loadPrompt=async(prompt) => {
      setRecentPrompt(prompt)
      await onSent(prompt)
    }
    return (
        <div className='main'>
          <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
          </div>
          <div className="main-container">
            {!showResult
            ?
            <>
                <div className="greet">
              <p><span>Hello,Dev.</span></p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div onClick={()=>{onSent("Suggest Beautiful places to see on an upcoming road trip")}} className="card">
                <p > Suggest Beautiful places to see on an upcoming road trip</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div onClick={(prompt)=>{onSent("Biefly summarize this concept:urban planning")}} className="card">
                <p>Biefly summarize this concept:urban planning </p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div onClick={()=>{onSent("Brainstorm team bonding activities for our wprk retreat")}} className="card">
                <p>Brainstorm team bonding activities for our wprk retreat</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div onClick={()=>{onSent("Improve the readability of a followig code")}} className="card">
                <p>Improve the readability of a followig code </p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
            </>
            :<div className='result'>
              <div className='result-title'>
                <img src={assets.user_icon} alt="" />
                <p>{recentPrompt}</p>

              </div>
             <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading?<div className='loader'>
                <hr />
                <hr />
                <hr />

              </div>:<p dangerouslySetInnerHTML={{__html:resultData}}></p>
               }
              
             </div>
            </div>
            }
          
            <div className="main-bottom">
              <div className="searchbox">
                <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
                <div>
                  <img src={assets.gallery_icon} alt="" />
                  <img src={assets.mic_icon} alt="" />
                  {input?<img onClick={()=>onSent()} src={assets.send_icon} alt="" />:null}
                </div>
              </div>
              <p className="bottom-info">
                Gemini may display inaccurate info,including about people ,so double-check its responses.your privacy and Gemini Apps
              </p>
            </div>
          </div>
        </div>
    )
}

export default Main
