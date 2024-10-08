import data from "../../data"

const DatosFecha = ({datosFechaVisible}) => {
  return (
    <div id='datosFechaSection' className={`datos-fecha ${datosFechaVisible && 'animate__animated animate__slideInUp'}`}>
      <p className='datos-fecha-title'>Celebremos Juntos el día</p>
      <div className="datos-fecha_div">
        <p>{data.fecha_dia}</p>
        <p>{data.fecha_mes}</p> 
        <p>{data.fecha_year}</p>
      </div>
    </div>
  )
}

export default DatosFecha