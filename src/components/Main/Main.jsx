import React from 'react'
import './Main.css'
import {assets} from '../../assets/assets'

function Main() {
  const [active, setActive] = React.useState(false)
  return (
    <div className='main'>
      <div className="nav">
        <div className="left">
          Gemini
        </div>
        <div className="right">
          <img src={assets.user_icon} alt="" />
        </div>
        
      </div>

      <div className="main-container">
        <div className="greetings">
          <p><span>Hello, User.</span></p>
          <p>How can I help you today?</p>
        </div>

        <div className="cards">
          <div className="card">
            <p>Suggest beautiful places to see on an upcoming road trip</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>Breifly summarize this concept:urban planning</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>Brainstorm team bonding activites for our work retreat</p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card">
            <p>Tell me about React js and React native</p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>

        <div className="main-bottom-container">
          <div className="searchbar">
            <input type="text" placeholder='Enter a prompt here' onChange={(e) =>
        setActive(e.target.value.trim() !== '' && document.activeElement === e.target)
      }
      onFocus={(e) =>
        setActive(e.target.value.trim() !== '')
      }
      onBlur={() => setActive(false)} />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {active && <img src={assets.send_icon} alt="Send" />}
            </div>
          </div>
          <p className='bottom-info'>Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</p>
        </div>
      </div>

      
    </div>
  )
}

export default Main
