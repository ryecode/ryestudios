import React from 'react'
import { useContext } from 'react';
import { useState } from 'react'
import { AppContext } from '../App';

export const ChangeUserName = () => {
    const { setUserName } = useContext(AppContext)
    const [newUserName, setNewUserName] = useState("");
  return (
    <div id="askName">
        <h4>Greetings Guest,<br/>please enter your name..</h4>
        <input onChange={(event) => {setNewUserName(event.target.value)}} /><br />
        <button class="neon-button" style={{marginTop:"1em"}} onClick={() => {setUserName(newUserName) }}>
            ENTER
        </button>
    </div>
  )
}
