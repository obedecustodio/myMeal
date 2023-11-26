import { createContext, useState } from "react"

const DataContext = createContext()


export function DataProvider({children}){

    const [dados, setDados] = useState([])
    return(
        <DataContext.Provider value={{dados, setDados,}}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext