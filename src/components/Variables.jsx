import React,{Fragment} from 'react'

const saludo= "Hola Hugo"
const numero= 10; 

const Variables = () => {
    return (
        <Fragment>
           <h1>{saludo}</h1> 
           <h1>Suma: {numero+numero}</h1> 
        </Fragment>
    )
}

export default Variables
