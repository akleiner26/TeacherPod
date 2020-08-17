import React from "react";
import { Carousel } from "react-responsive-carousel";
import "./carousel.css"


function ImgCarousel () {
    return (
    <Carousel infiniteLoop autoPlay interval="5000">
            <div>
                <img alt="Angela Davidson" src="images/carousel/angelaDavidsonCarousel.jpg"/>
                <p className="legend">Angela Davidson</p>
            </div>
            <div>
                <img alt="Ted Kelly" src="images/carousel/tedKellyCarousel.jpg"/>
                <p className="legend">Ted Kelly</p>
            </div>
            <div>
                <img alt="Lillian Woods" src="images/carousel/lillianWoodsCarousel.jpg"/>
                <p className="legend">Lillian Woods</p>
            </div>
            <div>
                <img alt="Polly Shaffer" src="images/carousel/pollyShafferCarousel.jpg"/>
                <p className="legend">Polly Shaffer</p>
            </div>
            
    </Carousel>
    )
}

export default ImgCarousel