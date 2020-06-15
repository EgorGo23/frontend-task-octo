import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import highlightWords from '../helpers/highlightWords';
import { withDataFetching } from './hoc';

const Title = styled.h3`
    font-size: ${(props) => props.theme.fontSizes.large};
    font-weight: ${props => props.theme.fontWeights.bold};
    line-height: 120%;
    margin-bottom: 18px;
`;
    
const Content = styled.div`
    font-size: ${(props) => props.theme.fontSizes.sm};
    font-weight: ${props => props.theme.fontWeights.normal};
    line-height: 160%;

    & > div {
        display: flex;
        flex-flow: column;
        align-items: flex-start;
        justify-content: space-between;
        width: 985px;
        height: 270px;
    }
`;

const Block = (props) => {
    console.log(props);
    return (
        <>
            <Title></Title>
            <Content>
                {/* <div dangerouslySetInnerHTML={{ __html: `${content}` }}>
                </div> */}
            </Content>
            
        </>
    )
}

export default Block;