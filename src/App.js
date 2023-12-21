import { useState } from 'react';
import './App.css';
import Pc1 from './pc/pc';
import Smart from './smartphone/smart1';
const App = () => {
  const [button,setButton]=useState("スマホ画面へ")
  const [change, setChange] = useState(0)
  const swich = () => {
    setChange(change === 1 ? 0 : 1);
    setButton(change === 0 ? "PC画面へ" : "スマホ画面へ")
  }
  return (
    <div>
      {change === 0 ? <Pc1 /> : <Smart />}
      <button
        onClick={swich}
      >{button}</button>
    </div>

  )
};

export default App;

//こんにちじは

//hello
//hellowhellow