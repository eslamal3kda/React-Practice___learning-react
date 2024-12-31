import { ErrorMessage, Field } from "formik";
import { useState } from "react";
import { FaAt,  FaLock,  FaLockOpen,  FaUser } from "react-icons/fa";

export default function WrapperInput({label,type ,name ,placeholder }) {
    const [showPass,setShowPass] = useState(false)
    const icons = {
        userName: <FaUser />,
        email:<FaAt /> ,
        password: showPass? <FaLockOpen onClick={()=>setShowPass((prev)=> !prev)} /> : <FaLock onClick={()=>setShowPass((prev)=> !prev)} /> ,
        confirmPassword: showPass? <FaLockOpen onClick={()=>setShowPass((prev)=> !prev)} /> : <FaLock onClick={()=>setShowPass((prev)=> !prev)} /> ,
    }

  return (
    <>
        <div className="input-container">
            <label htmlFor="userName">{label}</label>
            <div className="input-field">
                <Field type={name == 'password' || name == "confirmPassword" ? (showPass ? 'text' : 'password') :type} id={name} name={name} placeholder={placeholder} />
                <div className="icon">{icons[name]}</div>
            </div>
            <ErrorMessage className="errorMessage" name={name} component={"p"} />
        </div>
</>
  )
}
