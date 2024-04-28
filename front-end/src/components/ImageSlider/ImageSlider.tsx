import { useState } from 'react';

import Image from 'next/image';

import { fromJSON } from 'postcss';
import styles from './ImageSlider.module.scss';

import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNext from '@mui/icons-material/NavigateNext';

interface IProps {
    slides: string[],
    width: number,
    height: number,
}

function ImageSlider(props: IProps) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const sliderStyles = {
        width: props.width
    }

    const slideStyles = {
        width: props.width,
        height: props.height,
        backgroundImage: `url(${props.slides[currentIndex]})`,
    }

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? props.slides.length -1 : currentIndex - 1;
        setCurrentIndex(newIndex)
        console.log('CR')
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === props.slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
        console.log('CL')
    }

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
    }

    return (
        <div className={styles.slider} style={sliderStyles}>
            {
                props.slides.length > 1 ?
                <>
                    <div className={styles['left-arrow']} onClick={goToPrevious}><NavigateBeforeIcon /></div>
                    <div className={styles['right-arrow']} onClick={goToNext}><NavigateNext /></div>
                    <div className={styles['dot-container']}>
                        {
                            props.slides.map((slide, slideIndex) => 
                                <>
                                    <div key={slideIndex} className={styles['dot-controls']} onClick={() => goToSlide(slideIndex)}>⬤</div>
                                </>
                            )
                        }
                    </div>
                </>
                :
                null
            }
            <Image style={slideStyles} className={styles.slide} width={500} height={500} src={props.slides[currentIndex]} priority></Image>
        </div>
    );
};

export { ImageSlider };
