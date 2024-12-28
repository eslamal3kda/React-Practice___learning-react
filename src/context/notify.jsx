import { createContext, useState } from "react";

const NotifyContext = createContext()

function NotifyProvider({children}) {
    const [notify,setNotify] = useState(0)
    return <NotifyContext.Provider value={{notify,setNotify}}>{children}</NotifyContext.Provider>
}

export {NotifyContext , NotifyProvider}