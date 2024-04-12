import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PrimarySearchAppBar from './components/NavBar.jsx'
import BasicPagination from './components/Pagination.jsx'
import SetCards from './components/Cards.jsx'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{backgroundColor:'lightgray'}}>
      <PrimarySearchAppBar />
      <div style={{ display: 'flex', justifyContent:'space-around'}}>
        <SetCards nombre="Ballesta Deportiva" descripcion="Ballesta de uso deportivo de acero" image="/src/images/ballesta.jpg" />
        <SetCards nombre="Camisa" descripcion="Playera de manga corta varios colores" image="/src/images/camisa.jpg" />
        <SetCards nombre="Automovil Blanco" descripcion="Estandar 2017" image="/src/images/carro.jpg" />
        <SetCards nombre="Control" descripcion="Joystick generico para PC" image="/src/images/control.jpg" />
      </div>
      <div style={{ display: 'flex', justifyContent:'space-around'}}>
        <SetCards nombre="Guitarra Acustica" descripcion="Guitarra para musico de 2da mano" image="/src/images/guitarra.jpg" />
        <SetCards nombre="Laptop" descripcion="Laptop Intel 2da generacion 8ram 254gb de almacenamiento" image="/src/images/laptop.png" />
        <SetCards nombre="Pulsera" descripcion="Pulsera Karma muñequera izquierda" image="/src/images/pulsera.jpg" />
        <SetCards nombre="Telefono" descripcion="Ta bonito no sé" image="/src/images/telefono.jpg" />
      </div>
      <div style={{justifyContent:'space-around'}}>
      <BasicPagination />
      </div>
    </div>
  );
}

export default App
