'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const LazyImage = ({ src, ...props }:{src:string}) => {
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