import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import highlightWords from '../helpers/highlightWords';
import { withDataFetching } from './hoc';
import Block from './Block';

const Static = ({dataFetching}) => {
    const {data, isLoading, isError} = dataFetching;

    const StaticContainer = styled.section`
        font-family: ${(props) =>
            (props.theme.fonts)
            || 'sans-serif'
        };
        padding: 0 61px 0 60px;
        color: ${props => props.theme.colors.black};
        border: 1px solid black;
    `;
    
    return (
        !isLoading && !isError && data
        && (<StaticContainer>
            <Block data={data.static_blocks[0]} /> 
        </StaticContainer>)
    )
}

export default withDataFetching(Static)();
