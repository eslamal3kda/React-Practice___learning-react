import { NavLink } from "react-router-dom";


export default function Navbar() {
  return (
    <>
        <nav>
            <div className="logo">
                <h2>logo</h2>
            </div>
            <ul>
                <li><NavLink to={'useState'}>UseState</NavLink></li>
                <li><NavLink to={'useEffect'}>UseEffect</NavLink></li>
                <li><NavLink to={''}>comming soon ...</NavLink></li>
                <li><NavLink to={''}>comming soon...</NavLink></li>
            </ul>
        </nav>
        
    </>
  )
}
