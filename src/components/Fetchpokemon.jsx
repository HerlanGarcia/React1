import React from 'react'

function Fetchpokemon() {
    const[pokemones, setPokemones]= React.useState([]); 
    const obtenerPokemones = async() => {
        console.log("Hello world")
        const res = await fetch("https://pokeapi.co/api/v2/pokemon/")
        const datos = await res.json()
        setPokemones(datos.results)
        console.log(datos)
    }
        
    return (
        <div>
            <table ClassName='table table-dark'>
                <tr>
                    <th>Nombre</th>
                    <th>URL</th>
                </tr>
                {
                     pokemones.map((pokemon, index) => (
                    
                     <tr key={index} >
                        <td>{pokemon.name}</td>
                        <td><a href={pokemon.url}>Pagina de pokemon</a></td>
                     </tr>
                    ))
              }
            </table>
            
            
          <button onClick={ () => obtenerPokemones()}>Obtener pokemones</button>
        </div>
    )
}

export default Fetchpokemon
