import { createContext } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext=createContext();

const AuthProvider = ({children}) => {

    const name={
        name: 'utsob',
        email:'utsob@gmal.com'
    }


    const authInfo={
        name
    }

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;