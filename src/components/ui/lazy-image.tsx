'use client';
import React, { useState } from 'react';
import Image, {StaticImageData} from 'next/image';

const LazyImage = ({ src, ...props }:{src:string | StaticImageData}) => {
    const [isReady, setIsReady] = useState(false);

    const onLoadCallback = () => {
        setIsReady(true);
    };

    return (
        <Image
            src={src}
            {...props}
            onLoad={onLoadCallback}
        />
    );
};

export default LazyImage;