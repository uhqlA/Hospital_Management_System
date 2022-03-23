import * as React from "react";
import { authContext } from "../../App";



export function useAuth(){
    const [isAuth, setIsAuth] = React.useContext(authContext)

    return{
        isAuth, 
        login(){
            return new Promise ((res)=>{
                setIsAuth(true);
                res();
            });
        },
        logout(){
            return new Promise ((res)=>{
                setIsAuth(false);
                res();
            })
        }
    }
}

// export function AuthProvider({children}){
//     const {auth} = useAuth();

//     return <authContext.Provider value = {auth}>{children}</authContext.Provider>
// }

// export default function AuthConsumer () {
//     return React.useContext(authContext);
// }
