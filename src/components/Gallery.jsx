import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import highlightWords from '../helpers/highlightWords';
import { withDataFetching } from './hoc';
import Block from './Block';

const Gallery = ({dataFetching}) => {
    const {data, isLoading, isError} = dataFetching;

    const GalleryContainer = styled.div`
        
    `;
    
    return (<GalleryContainer></GalleryContainer>);
}

export default withDataFetching(Gallery)();