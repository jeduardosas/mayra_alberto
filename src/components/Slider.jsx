import ImageGallery from 'react-image-gallery'
import getArray from '../functions/getArray';
import 'react-image-gallery/styles/css/image-gallery.css'

const Slider = () => {
  const images = [];

  getArray(9,images) //funcion que llena el array de las imagenes, el primer parametro es el numero de imagenes, el segundo es el array que se va a llenar

  return(
    <div className='galeria' >
      <h3 className='galeria-title'>Galería </h3>
      <ImageGallery
        lazyLoad={true}
        items={images}
        showPlayButton={false}
        showFullscreenButton={true}
        showThumbnails={true}
        showBullets={false}
        showNav={false}
        autoPlay={true}
        slideDuration={1000}
      />
    </div>
  )
};

export default Slider;
