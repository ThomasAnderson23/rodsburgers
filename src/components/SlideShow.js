import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const SlideShow = ({images}) => {
    const [currentImage, setCurrentImage] = useState(0);
    const amount = images.length;

    const nextImage = () => {
        setCurrentImage(currentImage === amount - 1 ? 0 : currentImage + 1)
    }

    const previusImage = () => {
        setCurrentImage(currentImage === 0 ? amount - 1 : currentImage - 1);
    }

    return (
        <div className='col-md-6 col-12 container-burger'>
            <FontAwesomeIcon
                //className='mx-3'
                role="button"
                icon={faChevronLeft} 
                onClick={previusImage}
                />
            <figure className='container-slideshow my-4'>
                {images.map((image, index) => {
                    return (
                        <div className={currentImage === index ? "slide active" : "slide"} >
                            {currentImage === index && (
                                <img key={index} src={image} alt="Rods" className='Ranger'/>
                            )}
                        </div>
                    )
                })}
            </figure>
            <FontAwesomeIcon
                className='mx-3'
                role="button" 
                icon={faChevronRight} 
                onClick={nextImage}
            />
        </div>
    )
}

export default SlideShow