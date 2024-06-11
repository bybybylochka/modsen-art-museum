import React from 'react';
import Title from '@components/Title';
import { Wrapper } from '../global';
import Search from '@components/Search';
import OtherWorks from '@components/OtherArts';
import ForYou from '@components/ForYou';

const MainPage = () => {
    return (
        <Wrapper>
            <Title />
            <Search />
            <ForYou />
            <OtherWorks />
        </Wrapper>
    );
};

export default MainPage;
