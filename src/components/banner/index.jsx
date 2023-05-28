import './style.css';
import Carousel from 'react-bootstrap/Carousel';

const banner1 = require('../../img/banner.jpg');
const banner2 = require('../../img/crepe.jpeg')

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                   
                </Carousel.Item>
            </Carousel>
        </>
    );

}

export default Banner;