import React,{Fragment} from 'react'

function Eventos (){
const [saludo, setSaludo] = React.useState("Hola mundo!!")

const cambiarEstado = () => {
    console.log("Diste click")
    setSaludo("Que onda") 
    console.log("Hey")
}
    return (
        <Fragment>
            {saludo}
            <button onClick={() => cambiarEstado()}>Click</button>

        </Fragment>
    )
}

export default Eventos
