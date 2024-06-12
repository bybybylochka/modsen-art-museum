import React from 'react';
import Title from '@components/Title';
import { Wrapper } from '../global';
import OtherWorks from '@components/OtherArts';
import ForYou from '@components/ForYou';

const MainPage = () => {
    return (
        <Wrapper>
            <Title />
            <ForYou />
            <OtherWorks />
        </Wrapper>
    );
};

export default MainPage;
