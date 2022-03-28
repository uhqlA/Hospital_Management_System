import * as React from "react";
import { authContext } from "../../App";



export default function useAuth(){
    const [isAuth, setIsAuth] = React.useContext(authContext)

    return{
        isAuth, 
        makeTrue(){
            return new Promise ((res)=>{
                setIsAuth(true);
                res();
            });
        },
        logout(){
            return new Promise ((res)=>{
                setIsAuth(false);
                res();
            });
        }
    }
}
