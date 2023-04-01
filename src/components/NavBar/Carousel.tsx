import React, { FC } from 'react';

const CarouselComponent: FC = (): JSX.Element => {

    return (
        <div className="carousel">
        <div className="wrapper">
            <img
                src="./../img/pizzeria.jpg"
                title="Main Pict"
                alt="photo pizza"
                id="mainPhoto"
            />
        </div>
        <div className="img-wrapper">
            <img
                className="imgCarousel"
                title="yolo"
                src="./../img/pizzeria2.jpg"
                alt="photo pizza"
            />
            <img
                className="imgCarousel"
                title="yolo"
                src="./../img/pizzeria3.jpg"
                alt="photo pizza"
            />
            <img
                className="imgCarousel"
                title="yolo"
                src="./../img/pizzeria4.png"
                alt="photo pizza"
            />
            <img
                className="imgCarousel"
                title="yolo"
                src="./../img/client.png"
                alt="photo pizza"
            />
        </div>
    </div>
    );
};

export default CarouselComponent;