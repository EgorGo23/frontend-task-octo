import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import highlightWords from '../helpers/highlightWords';
import Title from './Title';
import Gallery from './Gallery';
import { withGallery } from './hoc';

const Block = ({data, isDescription, isGallery, highlightedContentWords, sizes}) => {
    const Content = styled.div`
        flex-grow: 1;
        font-size: ${(props) => props.theme.fontSizes.sm};
        font-weight: ${props => props.theme.fontWeights.normal};
        line-height: 160%;
        display: flex;
        flex-flow: column;
        align-items: flex-start;
        
        div[data-gallery='true'] {
            background: red;
        }


        ul {
            padding-left: 15px;
            list-style: none;
            margin: 0;
            margin-bottom: 27px;

            & > li {
                margin: 0.5rem;
                line-height: 160%;
                color: ${props => props.theme.colors.black};

                &::before {
                    content: no-open-quote;
                    border-radius: 50%;
                    width: 16px;
                    height: 16px;
                    border: 4px solid #00A4F7;
                    display: inline-block;
                    color: ${props => props.theme.colors.blue};
                    margin-right: 31px;
                }
            }
        }

        ol {
            padding-left: 15px;
            list-style: none;
            counter-reset: cnt;
            margin: 0;
            margin-top: 27px;

            & > li {
                counter-increment: cnt;
                margin: 0.5rem;
                line-height: 160%;
                color: ${props => props.theme.colors.black};

                &::before {
                    content: counter(cnt)'.';
                    font-weight: ${props => props.theme.fontWeights.bold};
                    font-size: ${(props) => props.theme.fontSizes.sm};
                    width: 35px;
                    height: 34px;
                    display: inline-block;
                    line-height: 160%;
                    color: ${props => props.theme.colors.blue};
                    text-align: left;
                    margin-right: 12px;
                }
            }
        } 

        blockquote {
            width: 961px;
            height: 155px;
            padding: 22px 0 17px 42px;
            border-left: 4px solid ${props => props.theme.colors.blue};
            margin: 28px 0 28px 23px;
        }

        table {
            border-collapse: collapse;
            margin-top: 45px;
            text-align: left;

            thead {
                font-weight: ${props => props.theme.fontWeights.bold};
                font-size: ${(props) => props.theme.fontSizes.sm};
                color: ${props => props.theme.colors.black};
                line-height: 160%;

                tr {
                    height: 40px;
                    border-bottom: 2px solid ${props => props.theme.colors.blue};
                } 
            }

            thead th:nth-child(1) {
                width: 224px;
            }
            
            thead th:nth-child(2) {
                width: 536px;
                
            }
            
            thead th:nth-child(3) {
                width: 223px;
            }

            tbody {
                tr {
                    font-weight: ${props => props.theme.fontWeights.normal};
                    font-size: ${(props) => props.theme.fontSizes.xs};
                    line-height: 150%;
                    border-bottom: 2px solid ${props => props.theme.colors.gray};
                    td {
                        vertical-align: top;
                        padding: 15px 0;
                    }
                }
            }
        }
    `;
    const Description = styled.aside`
        width: 314px;
        height: 206px;
        font-weight: ${props => props.theme.fontWeights.normal};
        font-size: ${(props) => props.theme.fontSizes.sm};
        color: ${props => props.theme.colors.gray};
        position: absolute;
        top: 0;
        right: 0;
    `;

    const getImage = (data) => {
        return isGallery && Object.keys(data).reduce((acc, current) => {
            if (current.includes('image', 0)) {
                acc.push(data[current]);
            }
            return acc;
        }, []);
    } 
    
    const WithGallery = withGallery(Gallery)({images:getImage(data), sizes: {width: '100%', height: ''}});

    return (
        <div style={sizes.blockSizes}>  
            <Title tag={'h3'} text={data.title} style={{'margin-bottom': '27px'}} />
            <Content dangerouslySetInnerHTML={{ __html: `${highlightWords(data.content, highlightedContentWords)}` }}></Content>
            {
                isGallery
                && (
                    <WithGallery />
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
        </div>
    )
}

export default Block;