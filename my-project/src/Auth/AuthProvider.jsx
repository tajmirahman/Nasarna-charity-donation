import { createContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [comment, setComments] = useState([]);

    // for specific new id create
    const addNewComments = (comments) => {
        setComments(prev => [...prev, comments]);
    }

    useEffect(() => {

        const storedComments = localStorage.getItem('comments');

        if (storedComments) {
            setComments(JSON.parse(storedComments));
        }

    }, [])

    useEffect(() => {

        localStorage.setItem('comments', JSON.stringify(comment));

    }, [comment]);




    const authInfo = {
        comment,
        addNewComments
    }

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;