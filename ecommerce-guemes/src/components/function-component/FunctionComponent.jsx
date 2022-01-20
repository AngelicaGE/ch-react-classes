import React from 'react';

//const FunctionComponent = (props) => {
const FunctionComponent = ({name, age}) => {
    //console.log(props)
    return(
        <>
            <div>
                <h1>nombre props.name</h1>
                <h1>Edad props.age</h1>
            </div>
            <div>
                <h1>nombre {name}</h1>
                <h1>Edad {age}</h1>
            </div>
        </>
    );
}

export default FunctionComponent;
