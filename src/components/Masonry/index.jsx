import React, { useEffect, useRef, useState } from 'react';
import {resizeAllMasonryItems} from './helper';
import './index.scss';

const Masonry = ({imgSources}) => {
    const masonry = useRef(null);
    const [loading, setLoading] = useState(true);
    const eventHandler = () => {
        resizeAllMasonryItems(masonry.current);
        setLoading(false);
    }
    useEffect(() => {
        window.addEventListener('load', eventHandler);
        window.addEventListener('resize', eventHandler);
        return () => {
            window.removeEventListener('load', eventHandler);
            window.removeEventListener('resize', eventHandler);
        }
    }, []);


    return (
        <div className={!loading ? 'masonry--show' : 'masonry--hide'}>
            <div className='masonry' ref={masonry}>
                {
                    imgSources.map((item, index) => (
                        <div key={index} className="masonry--content">
                            <img src={item}/>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Masonry;
