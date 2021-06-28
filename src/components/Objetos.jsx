import React, {Fragment} from 'react'

const Objetos = () => {
    const superheroes =[
     {
        Nombres:{
            ironman: {
                poder1:"vuelo",
                poder2: "Armas",
            },
            spiderman: {
                poder1: "Trepa muros",
                poder1: "Lanza telaraña",
            },
            hulk: {
                poder1: "Superfuerza",
                poder2: "regeneracion",
            }
        }

    },
    {
        Nombres:{
            vision: {
                poder1:"laser",
                poder2: "mente",
            },
            capitanAmerica: {
                poder1: "granfuerza",
                poder1: "Lanza telaraña",
            }
        }

    },

    ]
    
  const{ poder1 } = superheroes.Nombres.ironman

    return (
        <Fragment>
            <h1>Hola mundo</h1>
            {
                poder1
            }
            {
                superheroes.map((nombres)=> (
                    <div key= {nombres.vision}>
                        <h3> poder1 </h3>
                       

                    </div>
                ))
            }
        </Fragment>
        

    )
}

export default Objetos
