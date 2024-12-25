import { Link, NavLink } from "react-router-dom";


export default function Navbar() {
  return (
    <>
        <nav>
            <div className="logo">
                <Link to={''}><h2>logo</h2></Link>
            </div>
            <ul>
                <li><NavLink to={''}>UseState</NavLink></li>
                <li><NavLink to={'useEffect'}>UseEffect</NavLink></li>
                <li><NavLink to={'commingSoon'}>comming soon ...</NavLink></li>
                <li><NavLink to={'commingSoon'}>comming soon...</NavLink></li>
            </ul>
        </nav>
        
    </>
  )
}
