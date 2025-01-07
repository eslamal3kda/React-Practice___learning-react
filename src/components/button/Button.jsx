
import { useNavigate } from "react-router-dom"
import "./button.scss"


export default function Button({title,url}) {
  const navigate = useNavigate()

  return (
    <div className='global_btn' onClick={() => {
      if (url) {
        //Navigate
        navigate(url)
      } else {
        //Do function
      }
    }}  >{title}</div>
  )
}
