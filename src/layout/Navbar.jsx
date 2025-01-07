import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { CounterContext } from "../context/counter";
import { IoMdNotifications } from "react-icons/io";
import { NotifyContext } from "../context/notify";


export default function Navbar() {
  const {count} = useContext(CounterContext)
  const {notify,setNotify} = useContext(NotifyContext)

  return (
    <>
        <nav>
            <div className="logo">
                <Link to={''}><h2>logo</h2></Link>
            </div>
            <div className="context-counter">
              <h3>Cart: {count }</h3>
              <div className="notify">
                <IoMdNotifications onClick={()=>setNotify(0)} />
                <div className="noti-count">{notify}</div>
              </div>
            </div>
            <ul>
                <li><NavLink to={''}>UseState</NavLink></li>
                <li><NavLink to={'useEffect'}>UseEffect</NavLink></li>
                <li><NavLink to={'useContext'}>UseContext</NavLink></li>
                <li><NavLink to={'todo'}>Todo</NavLink></li>
                <li><NavLink to={'blogs'}>Blogs</NavLink></li>
                <li className="log-in"><NavLink className={"log-in"} to={'login'}>LogIn</NavLink></li>
            </ul>
        </nav>
        
    </>
  )
}
