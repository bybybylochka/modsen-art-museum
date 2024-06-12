import React from 'react';
import {
    PreloaderContainer,
    PreloaderImage,
} from '@components/Preloader/styled';
import Gif from '@assets/preloader.gif';

const Preloader = () => {
    return (
        <PreloaderContainer>
            <PreloaderImage src={Gif} alt={'preloader'} />
        </PreloaderContainer>
    );
};

export default Preloader;
