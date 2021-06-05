import React,{Fragment} from 'react'

    
function Division() {
    const [resultado, setResultado] = React.useState(0)
    const [Valor1, setValor1] = React.useState(0);
    const[Valor2, setValor2] = React.useState(0);
    const dividir =() => {
        console.log("Click")
        setResultado(parseInt(Valor1) / parseInt(Valor2));
    }
    return (
        <Fragment> 
            <input type="number"
            placeholder="Primer valor"
            onChange={(e)=> setValor1(e.target.value)}
            />
            <input type="number" placeholder="Segundo valor" onChange={(e)=>setValor2(e.target.value)}/>
            <input type="number" value={resultado} />
            <button onClick={ () =>dividir() }>Dividir</button>

            
        </Fragment>
    )
}

export default Division