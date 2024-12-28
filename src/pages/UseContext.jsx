import { Fragment, useContext } from "react"
import { CounterContext } from "../context/counter"
import { NotifyContext } from "../context/notify"

export default function UseContext() {
    const {setCount} = useContext(CounterContext)
    const {setNotify}= useContext(NotifyContext)
  return (
    <Fragment >
        <div className="context-page">
            <button className="count-context-btn" onClick={()=>setCount((prev)=>prev +1)}>Add to cart / increase countext number</button>
            <button className="notify-btn" onClick={()=>setNotify((prev)=>prev +1)}>add a notification</button>
        </div>
    </Fragment>
  )
}
