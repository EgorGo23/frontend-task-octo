import React from 'react';
import styled from 'styled-components';
import { withDataFetching } from './hoc';
import Title from './Title';

const GalleryContainer = styled.section`
    width: 100%;
    height: 543px;
    border: 1px solid black;
`;

const GalleryWithText = (props) => {

    return (
        <GalleryContainer>
            <Title tag={'h3'} />
        </GalleryContainer>
    );
};

export default GalleryWithText;