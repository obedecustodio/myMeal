import { createContext, useState } from "react"

const AuthContext = createContext()


export function AuthProvider({children}){

    // const [user, setUser] = useState({username:'', isAuth:false})
    const [isAuth, setIsAuth] =useState(false)

    return(
        // <AuthContext.Provider value={{user, setUser}}>
        <AuthContext.Provider value={{isAuth, setIsAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider