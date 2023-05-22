import * as React from 'react';
import axios from 'axios';
import base_Url from '../my_axios'

const MedicalContext = React.createContext({})
export function  GetContext ()  { return React.useContext(MedicalContext)}
export default function Context({children}){
   // console.log(props)

    const [userData,SetUser] = React.useState({})
  

    const login = async (email , password) => {

        try {
            const reponse = await axios.post(base_Url+"/auth/login" , {
                email: email,
                password: password
            })
            const resulst = reponse.data
            SetUser(resulst)
            return resulst
        } catch (error) {
            console.log(error)
        }
    
    }

    return(
        <MedicalContext.Provider value={{userData , login}}>
            {children}
        </MedicalContext.Provider>
    )
}
