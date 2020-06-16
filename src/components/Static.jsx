import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { withDataFetching } from './hoc';
import Block from './Block';
import StaticContainer from './Static';

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
        && (
            <>
                {/* <StaticContainer style={{height: '562px'}}>
                    <Block 
                        data={data.static_blocks[0]}
                        isGallery={true}
                        isDescription={false}
                        highlightedContentWords={['SWOT', 'VIP']}
                        sizes={{titleSizes: {width: '603px', height: '48px'}, contentSizes:{width: '985px', height: '357px'}}}
                    /> 
                </StaticContainer> */}

                <StaticContainer style={{height: '629.41px'}}>
                    <Block 
                        data={data.static_blocks[1]}
                        isDescription={true}
                        isGallery={false}
                        highlightedContentWords={[]}
                        sizes={{titleSizes: {width: '507px', height: '48px'}, contentSizes:{}}}
                    /> 
                </StaticContainer>

                {/* <StaticContainer style={{height: '902px'}}>
                    <Block 
                        data={data.static_blocks[2]}
                        isDescription={false}
                        isGallery={false}
                        highlightedContentWords={[]}
                        sizes={{titleSizes: {width: '505px', height: '48px'}, contentSizes:{}}}
                    /> 
                </StaticContainer> */}
            </>
        )
    )
}

export default withDataFetching(Static)();