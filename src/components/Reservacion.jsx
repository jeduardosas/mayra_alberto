import React from 'react'
let leyenda = ''
const Reservacion = ({pases}) => {
  if(pases > 1){
    leyenda = 'Lugares en tu honor'
  }else{
    leyenda = 'lugar en tu honor'
  }
  return (
    <>
      <h2 className="lugares-arriba">Hemos Reservado</h2>
      <div className='reserv-numero'>
        <p>{pases}</p>
      </div>
      <h2 className="lugares-abajo">{leyenda}</h2>
      <span className='lugares-leyenda'>&#40; favor de respetar este numero &#41;</span>
    </>
  )
}

export default Reservacion