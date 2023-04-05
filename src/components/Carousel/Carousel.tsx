import { FC } from "react";

import { useCommonContextProvider } from "../../providers/CommonContextProvider";

import styles from "./style.module.css";

const CarouselComponent: FC= (): JSX.Element => {
    const { isNavBarOpen, carouselImages, selectedImage, updateSelectedImage } = useCommonContextProvider();

    return (
        <div 
            className={`${styles.carousel} ${isNavBarOpen ? styles.show__carousel : ""}`}
            style={{transition: `right ${isNavBarOpen ? '2s' : '.1s'} ease-in-out`}}
        >
            <div className={styles.carousel__wrapper}>
                {selectedImage && (
                    <img
                        title={selectedImage.title}
                        src={selectedImage.source}
                        alt={selectedImage.title}
                    />
                )}
            </div>
            <div className={styles.carousel__images}>
                {carouselImages.map((img, idx) => (
                    <img
                        key={idx}
                        className={styles.carousel__images__image}
                        title={img.title}
                        src={img.source}
                        alt={img.title}
                        onClick={() => updateSelectedImage(img)}
                    />
                ))}
            </div>
        </div>
    );
};

export default CarouselComponent;
