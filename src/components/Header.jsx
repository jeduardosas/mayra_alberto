import data from "../../data.js"

const Header = () => { 

  return (  

    
    <>
      <header className="header centrar">
          <div className="header-image">
            <img loading="lazy"  src={`/img/${data.img_header}`} alt="img_kamila" />
          </div>
      </header>
    

        <div className="frase">
          <p className="frase-text">{data.frase}</p>
        </div>
      
      {/* <div  className='header-img centrar animate__animated animate__fadeInUp'>
      </div> */}
    </>
  )
}

export default Header