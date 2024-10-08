import data from "../../data"

const DatosNombres = ({datosVisible}) => {
  return (
    <>
      <p className={`datos-nombre-nb ${datosVisible && 'animate__animated animate__zoomIn'}`}></p>
      <p className={`datos-nombre-b ${datosVisible && 'animate__animated animate__zoomIn'}`}>{data.nombre_novia}</p>
      <p className={`datos-nombre-y ${datosVisible && 'animate__animated animate__zoomIn'}`}>&</p>
      <p className={`datos-nombre-g ${datosVisible && 'animate__animated animate__zoomIn'}`}>{data.nombre_novio}</p>
      
    </>
  )
}

export default DatosNombres