import React, { useState } from "react";
import {Auth} from './components/Auth';
import Cookies from 'universal-cookie';
const cookies = new Cookies()

 function App() {
  const [isAuth,setIsAuth] = useState(cookies.get("auth-token"))
  const [room, setRoom] = useState("")
  if (!isAuth){
  return (
  <>
    <Auth/>
  </>
  )
  }

  return <div>{room? <div>Chat</div> : <div className="room">
    <label>Enter Room Name</label></div>}</div>
}

export default App;