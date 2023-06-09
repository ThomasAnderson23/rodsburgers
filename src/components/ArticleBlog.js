import { Link } from 'react-router-dom'
import SlideShow  from './SlideShow'
import Ranger from '../images/Ranger.png'
import UncleBill from '../images/UncleBill.png'
import BigPops from '../images/BigPops.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const ArticleBlog = () => {
const images = [Ranger, UncleBill, BigPops];

  return (
        <div className='article-blog'>
            <div className='d-flex justify-content-center'>
                <h3 className='my-4 fs-1'>RODS OF THE DAY</h3>
            </div>
            <div className='content-featured row'>
                <SlideShow images={images}/>
                
                <div className='description-featured col-md-6 col-12'>
                    <p>
                        If you love <strong>classic american flavors</strong>, you must try our <strong>Ranger</strong>, <strong>Uncle Bill</strong> or <strong>Big Pops</strong>, all with the tastiest curly fries aver made in the history of burgerdom!
                    </p>
                    <div className='container-read-blog'>
                        <Link className='btn-read-blog'>
                            Order
                            <span className='arrow-read-blog'>
                                <FontAwesomeIcon icon={faChevronRight} />
                            </span>    
                        </Link>
                    </div>
                </div>
            </div>
        </div>  )
}

export default ArticleBlog