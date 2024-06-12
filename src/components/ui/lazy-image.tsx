'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const LazyImage = ({ src, ...props }:any) => {
    // does not seem to be working
    const [isReady, setIsReady] = useState(false);

    const onLoadCallback = () => {
        setIsReady(true);
    };

    return (
        <Image
            src={src}
            className={`bg-zinc-400 transition duration-1000 ${
                isReady ? 'scale-100 bg-zinc-400 blur-0' : 'scale-120 blur-2xl'
            }`}
            {...props}
            onLoad={onLoadCallback}
        />
    );
};

export default LazyImage;