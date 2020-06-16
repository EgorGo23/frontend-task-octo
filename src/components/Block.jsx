import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import highlightWords from '../helpers/highlightWords';
import Title from './Title';
import Gallery from './Gallery';

const Block = ({data, isDescription, isGallery, highlightedContentWords, sizes}) => {
    const counterAW = 0;
    const Content = styled.div`
        font-size: ${(props) => props.theme.fontSizes.sm};
        font-weight: ${props => props.theme.fontWeights.normal};
        line-height: 160%;

        & > div {
            display: flex;
            flex-flow: column;
            align-items: flex-start;
            justify-content: space-between;

            ol {
                list-style: none;
                counter-reset: counterAW;

                & > li {
                    counter-increment: counterAW;
                    margin: 0.25rem;

                    &::before {
                        content: counter(counterAW)'.';
                        font-weight: ${props => props.theme.fontWeights.bold};
                        width: 2rem;
                        height: 2rem;
                        
                        display: inline-block;
                        line-height: 2rem;
                        color: #00A4F7;
                        text-align: center;
                        margin-right: 0.5rem;
                    }
                }
            } 
        }

         

        
    `;
    const Description = styled.aside`

    `;
    

    const viewContent = (content) => {
        console.log(content);

        return content;
    }
    
    return (
        <>  
            <Title tag={'h3'} text={data.title} style={{'margin-bottom': '27px'}} />
            <Content>
                <div dangerouslySetInnerHTML={{ __html: `${highlightWords(viewContent(data.content), highlightedContentWords)}` }}>
                </div>
            </Content>
            {
                isGallery
                && (
                    <Gallery />
                )
            }
            {
                isDescription
                && (
                    <Description>
                        {data.description}
                    </Description>
                )
            }
        </>
    )
}

export default Block;