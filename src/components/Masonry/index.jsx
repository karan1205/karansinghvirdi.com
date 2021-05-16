import React, {Fragment, useEffect, useRef, useState} from 'react';
import {resizeAllMasonryItems} from './helper';
import Gallery from "../Gallery";
import './index.scss';

const Masonry = ({imgSources}) => {
    const masonry = useRef(null);
    const imgPromises = useRef([]);
    const [loading, setLoading] = useState(true);
    const [carouselData, setCarouselData] = useState(null);
    const [showGallery, toggleGallery] = useState(false);

    const eventHandler = () => {
        resizeAllMasonryItems(masonry.current);
    }
    useEffect(() => {
        window.addEventListener('resize', eventHandler);
        return () => {
            window.removeEventListener('resize', eventHandler);
        }
    }, []);

    const handleLoading = () => {
        imgPromises.current.push(true);
        if(imgPromises.current.length === imgSources.length) {
            setLoading(false);
        }
    }

    const onImgLoad = (e) => {
        if(e.target) {
            resizeAllMasonryItems(masonry.current, e.target);
        }
        handleLoading();
    }
    const onImgError = () => {
        handleLoading();
    };

    const onImgClick = (e, index) => {
        setCarouselData(index);
        toggleGallery(true);
    };
    const onGalleryClose = () => {
        toggleGallery(false);
    };
    return (
        <Fragment>
            <div className={!loading ? 'masonry--show' : 'masonry--hide'}>
                <div className='masonry' ref={masonry}>
                    {
                        imgSources.map((item, index) => (
                            <div key={index} className="masonry--content">
                                <img src={item}
                                     alt={`masonry-images: ${item}`}
                                     onLoad={onImgLoad}
                                     onError={onImgError}
                                     onClick={e => onImgClick(e, index)} />
                            </div>
                        ))
                    }
                </div>
            </div>
            {showGallery && <Gallery sources={imgSources} index={carouselData} onClose={onGalleryClose}/>}
        </Fragment>
    );
};

export default Masonry;
