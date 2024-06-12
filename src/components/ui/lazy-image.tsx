'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const LazyImage = ({ src, ...props }) => {
    const [isReady, setIsReady] = useState(false);

    const onLoadCallback = () => {
        setIsReady(true);
    };

    return (
        <Image
            objectFit='cover'
            src={src}
            {...props}
            onLoad={onLoadCallback}
        />
    );
};

export default LazyImage;