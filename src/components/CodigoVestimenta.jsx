import React from 'react'
import '../styles/vestimenta.css'

const CodigoVestimenta = () => {
  return (
    <div className='vestimenta'>
      <h1 className='vestimenta-title'>Codigo de Vestimenta</h1>
      <div className='vestimenta-cards'>
        <div className='vestimenta-card'>
          <div className='vestimenta-card-icons'>

          </div>
          <div className='vestimenta-card-title'>
            <p>Formal Playa</p>
          </div>

          <div className='vestimenta-card-colors'>
            <div className='vestimenta-card-circle vestimenta-card-1'></div>
            <div className='vestimenta-card-circle vestimenta-card-2'></div>
            <div className='vestimenta-card-circle vestimenta-card-3'></div>
            <div className='vestimenta-card-circle vestimenta-card-4'></div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default CodigoVestimenta