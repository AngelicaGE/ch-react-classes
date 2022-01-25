import React, {useState, useEffect} from 'react';

//const FunctionComponent = (props) => {
const FunctionComponent = ({name, age}) => {
    //if(!name){
    //    return <h1>name does not exist</h1>
    //}

    const [stateName, setStateName] = useState("bruno");
    const [stateSurname, setStateSurname] = useState("madrigal");

    const [user, setUser] = useState({
        userName: "bruno",
        userSurname: "madrigal"
    });

    useEffect(() => {
        console.log("HOLA")
        return () => {
            console.log("Voy a hacer eliminado");
        }
    }, [user])

    // if true nothing else will render. only the h1 in this if
    if(!name){
        return <h1>name does not exist</h1>
    }

    const updateNameAndSurname = () => {
        setStateName("maribel");
        setStateSurname("garcia");
        setUser({ userName: "maribel", userSurname: "garcia"})
        //setUser({...user, name: "maribel"})
    };
    
    return(
        <>
            <div>
                <h1>nombre {stateName}</h1>
                <h1>surname {stateSurname}</h1>
                <hr/>
                <h1>nombre {user.userName}</h1>
                <h1>surname {user.userSurname}</h1>
                <button onClick={updateNameAndSurname}>Cambiar stateProps</button>
            </div>
        </>
    );
}

export default FunctionComponent;