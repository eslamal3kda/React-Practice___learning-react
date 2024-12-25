import { useState } from "react";


export default function UseState() {

    let [counter, setCounter] = useState(0);
    
      //-------------------------------------------------
        let [toggle, setToggel] = useState(false);
    
        //------------------------------------------------
        let [backgroundColor, setBackgroundColor] = useState("#EEE");
    
        function changeColor() {
            const letters = "0123456789ABCDEF";
            let color = "#";
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
    }
    //--------------------------------

    let [inputValue,setInputValue] = useState('')

  return (
    <>
        <div className="container">
                <div className="btn">
                    <div className="increase" onClick={() => setCounter((num)=> ++num)}>Increase</div>
                    <div className="decrease" onClick={() => setCounter((num)=> --num)}>Decrease</div>
                    <div className="reset" onClick={() => setCounter(0)}>reset</div>
                </div>
                <div className="num">{counter}</div>
            </div>
            <hr />

            <div className="toggle-container">
                <button onClick={() => setToggel(!toggle)} className={toggle ? "on" : "off"}>
                    {toggle ? "on" : "off"}
                </button>
            </div>
            <hr />

            <div onClick={() => setBackgroundColor(changeColor)} style={{ background: backgroundColor }} className="background">Click here</div>
            <hr />

            <div className="form-Container">
              <form action="">
                <input placeholder="Type Any Thing..." type="text" onInput={(e)=>setInputValue(e.target.value)} />
                <div className="value">{inputValue}</div>
              </form>
            </div>
    </>
  )
}
