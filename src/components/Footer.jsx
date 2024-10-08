import React from 'react'
import '../styles/footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-div-img'>
        <a target='_blank' href="https://www.facebook.com/monadas.invitaciones">
          <img className='footer-img' src="/img/logo_footer.png" alt="logo_footer" />
        </a>
      </div>
      <div className='footer-div-text'>
        
        <p className='footer-text'>Todos los derechos reservados. <a target='_blank' href="https://www.facebook.com/monadas.invitaciones">Monadas Invitaciones</a> 2024.</p>
      </div>
    </div>
  )
}

export default Footer