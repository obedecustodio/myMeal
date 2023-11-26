import { useContext } from "react";
import DataContext from '../providers/Data'

const useAuth = () =>{
    return useContext(DataContext)
}

export default useAuth;