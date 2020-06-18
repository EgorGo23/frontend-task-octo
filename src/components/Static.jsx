import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { withDataFetching } from './hoc';
import variables from '../variables';
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
        <>
            {
                !isLoading && !isError && data
                && (
                    <>
                        <StaticContainer style={{height: '562px'}}>
                            <Block 
                                data={data.static_blocks[0]}
                                isGallery={true}
                                isDescription={false}
                                highlightedContentWords={['SWOT', 'VIP']}
                                sizes={{blockSizes: {width: '100%', height: '562px', display: 'flex', flexFlow: 'column'}}}
                            /> 
                        </StaticContainer>

                        {/* <StaticContainer style={{position: 'relative'}}>
                            <Block 
                                data={data.static_blocks[1]}
                                isDescription={true}
                                isGallery={false}
                                highlightedContentWords={[]}
                                sizes={{blockSizes: {width: '1015px', height: '621px', display: 'flex', flexFlow: 'column'}}}
                            /> 
                        </StaticContainer> */}

                        {/* <StaticContainer>
                            <Block 
                                data={data.static_blocks[2]}
                                isDescription={false}
                                isGallery={false}
                                highlightedContentWords={[]}
                                sizes={{blockSizes: {width: '992px', height: '902px', display: 'flex', flexFlow: 'column'}}}
                            /> 
                        </StaticContainer> */}
                    </>
                )
            }
            {
                isLoading 
                && (
                    <div>Загрузка...</div>
                )
            }  
        </>
    )
}

export default withDataFetching(Static)(variables.link);