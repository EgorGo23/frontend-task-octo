import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { withDataFetching, withGallery } from './hoc';
import Block from './Block';

const Gallery = (props) => {
    //const {data, isLoading, isError} = dataFetching;
    console.log(props);
    
    const GalleryContainer = styled.div`
        height: 170px;
        width: 100%;
        border: 1px solid black;
    `;
    
    return (
        <GalleryContainer>
            {
                
            }
        </GalleryContainer>
    );
}

export default withDataFetching(withGallery(Gallery)())();