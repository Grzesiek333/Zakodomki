
import React, { useState, useEffect, useRef } from 'react';
import { Galleria } from 'primereact/galleria';
import { PhotoService } from '../services/photo_pyzdra';


export default function Gallery_Pyzdra()  {
    const [images, setImages] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);    
    const galleria = useRef(null);

    useEffect(() => {
        PhotoService.getImages().then(data => setImages(data));
    }, []);

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />;
    }

    return (
        <div className="card flex justify-content-center">
            <Galleria ref={galleria} value={images} numVisible={7} style={{ maxWidth: '1200px' }}
            activeIndex={activeIndex} onItemChange={(e) => setActiveIndex(e.index)}
            circular fullScreen showItemNavigators showThumbnails={false} item={itemTemplate} thumbnail={thumbnailTemplate} />
            <div className="grid" style={{ maxWidth: '1228px' }}>
                {
                    images && images.map((image, index) => {
                        let imgEl = <img src={image.thumbnailImageSrc} alt={image.alt} style={{ cursor: 'pointer' }} onClick={
                            () => {setActiveIndex(index); galleria.current.show()}
                        } />
                        return (
                            <div className="box_img" key={index}>
                                {imgEl}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}