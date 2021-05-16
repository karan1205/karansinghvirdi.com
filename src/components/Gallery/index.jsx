import React, {useRef, useEffect} from 'react';
import './index.scss';

const Gallery = ({sources, index, onClose}) => {
    const galleyRef = useRef(null);
    const handleClose = (e) => {
        if(galleyRef && !galleyRef.current.contains(e.target)) {
            onClose();
        }
    };
    useEffect(() => {
        document.addEventListener('click', handleClose)
    }, []);
    if(!sources[index]) {
        return null;
    }
    return (
        <section className="gallery">
            <div className="content">
                <img src={sources[index]} alt={`gallery: ${sources[index]}`} ref={galleyRef}/>
            </div>
        </section>
    )
};

export default Gallery;