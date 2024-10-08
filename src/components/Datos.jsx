import DatosNombres from "./DatosNombres"
import DatosFecha from "./DatosFecha"
import DatosNombresPapas from "./DatosNombresPapas"

import '../styles/datos-nombres-papas.css';

const Datos = ({datosVisible, datosFechaVisible}) => {
  return (
    <div className='datos-nombres'>
      <DatosNombres datosVisible={datosVisible} />
      <DatosNombresPapas />
      <DatosFecha datosFechaVisible={datosFechaVisible}/>
    </div>
  )
}

export default Datos