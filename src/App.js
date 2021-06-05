import Suma from "./components/Suma";
import Division from "./components/Operaciones/Division";
import Multiplicacion from "./components/Operaciones/Multiplicacion";
import Resta from "./components/Operaciones/Resta";
function App() {
  return (
    <div> 
      <h1>Calculadora de operaciones</h1>

   
  {/* <Eventos />*/}
     <table>
       <h1><Suma /></h1>
       <h1><Division /></h1> 
       <h1><Multiplicacion /></h1>
       <h1><Resta /></h1>
     </table>
    

   </div>
  );
}

export default App;
