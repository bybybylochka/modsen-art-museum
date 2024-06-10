import React from 'react';
import Title from '../components/Title';
import { Wrapper } from '../global';
import Search from '../components/Search';
import ForYouPictures from '../components/ForYouPictures';
import OtherWorks from '../components/OtherWorks';

const MainPage = () => {
    return (
        <Wrapper>
            <Title />
            <Search />
            <ForYouPictures />
            <OtherWorks />
        </Wrapper>
    );
};

export default MainPage;
