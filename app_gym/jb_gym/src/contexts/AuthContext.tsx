import { UserDTO } from "@dtos/UserDTO";
import { ReactNode, createContext } from "react";

export type AuthContextDataProps = {
    user: UserDTO;
}

type AuthContextProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

export const AuthContextProvider = ({children}: AuthContextProviderProps) => {
    return(
        <AuthContext.Provider value={{
            user:{
                id: '1',
                name: 'Jonathan',
                email: 'jonathan.alves25@outlook.com',
                avatar: 'rodrigo.png'
            }
        }}>
            {children}
        </AuthContext.Provider>
    );
}