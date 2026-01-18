import { createContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [comment, setComments] = useState([]);
    const [loading, setLoading]=useState(false);

    // for specific new id create
    const addNewComments = (comments) => {
        setComments(prev => [...prev, comments]);
    }

    useEffect(() => {

        const storedComments = localStorage.getItem('comments');

        if (storedComments) {
            setComments(JSON.parse(storedComments));
        }
        setLoading(true);

    }, [])

    useEffect(() => {

        if(loading){
            localStorage.setItem('comments', JSON.stringify(comment));
        }

    }, [comment, loading]);




    const authInfo = {
        comment,
        addNewComments
    }

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;