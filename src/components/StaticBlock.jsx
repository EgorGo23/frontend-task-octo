import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import highlightWords from '../helpers/highlightWords';
import Static from './Static';

const Title = styled.h3`
    font-size: ${(props) => {
        console.log(props);
    }};
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

const StaticBlock = (props) => {
    
    const pr = {
        'Egor': '24',
    }
    return (
        <Static data={pr}>
            <Title></Title>
            <Content>
                {/* <div dangerouslySetInnerHTML={{ __html: `${content}` }}>
                </div> */}
            </Content>
        </Static>
    )
}

export default StaticBlock;