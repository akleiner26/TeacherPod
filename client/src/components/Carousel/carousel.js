import React from "react";
import { Carousel } from "react-responsive-carousel";


function ImgCarousel () {
    return (
    <Carousel infiniteLoop autoPlay interval="5000">
            <div>
                <img alt="Angela Davidson" src="images/carousel/angelaDavidsonCarousel.jpg"/>
                <p className="legend">Angela Davidson: Algebra</p>
            </div>
            <div>
                <img alt="Ted Kelly" src="images/carousel/tedKellyCarousel.jpg"/>
                <p className="legend">Ted Kelly: Middle School History</p>
            </div>
            <div>
                <img alt="Lillian Woods" src="images/carousel/lillianWoodsCarousel.jpg"/>
                <p className="legend">Lillian Woods: Third Grade</p>
            </div>
            <div>
                <img alt="Roger Horne" src="images/carousel/rogerHorneCarousel.jpg"/>
                <p className="legend">Roger Horne: Physics</p>
            </div>
            <div>
                <img alt="Polly Shaffer" src="images/carousel/pollyShafferCarousel.jpg"/>
                <p className="legend">Polly Shaffer: 4th Grade</p>
            </div>
            
    </Carousel>
    )
}

export default ImgCarousel