import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import variables from '../../variables';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import highlightWords from '../../helpers/highlightWords';
import Gallery from '../Gallery';

const Content = styled.div`
    flex-grow: 1;
    font-size: ${(props) => props.theme.fontSizes.sm};
    font-weight: ${props => props.theme.fontWeights.normal};
    line-height: 160%;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    
    @media (max-width: 400px) {
            width: 100%;
        }

    p {
        width: 985px;
        margin-bottom: 20px;

        @media (max-width: 400px) {
            width: 100%;
        }
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
        margin: 0 0 28px 23px;

        @media (max-width: 400px) {
            width: 313px;
            height: 442px;
        }
    }

    table {
        border-collapse: collapse;
        margin-top: 30px;
        text-align: left;
        overflow-x: scroll;
        
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

        @media (max-width: 400px) {
            width: 992px;
            height: 386px;
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
    right: 61px;

    @media (max-width: 400px) {
        position: relative;
        right: 0;
    }
`;

const Title = styled.h3`
    ${props => props.theme.heading_styles.common_properties}
    ${props => props.theme.heading_styles.h3}
    margin-bottom: 27px;

    @media (max-width: 400px) {
        font-size: 26px;
        margin-bottom: 21px;
    }
`;

const mapStateToProps = state => {
    const props = {
        windowSize: state.windowSize,
    }
    return props;
};

const actionCreators = {

}

const Block = ({data, isDescription, isGallery, highlightedContentWords, sizes, windowSize}) => {
    const breakpoint = variables.breakpoints.mobile;
    const getImage = (data) => {
        return isGallery && Object.keys(data).reduce((acc, current) => {
            if (current.includes('image', 0)) {
                acc.push(data[current]);
            }
            return acc;
        }, []);
    } 
    
    return (
        <div style={sizes.blockSizes}>  
            <Title>{data.title}</Title>
            <Content dangerouslySetInnerHTML={{ __html: `${highlightWords(data.content, highlightedContentWords)}` }}></Content>
            {
                isGallery
                && (
                    <Gallery 
                        images={getImage(data)} 
                        styles={
                            {
                                galleryContainer: {
                                    'margin-bottom': windowSize.width > breakpoint ? '10px' : '41px', 
                                    width: '100%'
                                }, 
                                galleryElm: 
                                    {
                                        width: windowSize.width > breakpoint ? '314px' : '162px', 
                                        height: windowSize.width > breakpoint ? '170px' : '88px'
                                    }, 
                                img: 
                                    {width: '100%', height: '100%'}
                            }
                        } 
                    />
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

export default connect(mapStateToProps, actionCreators)(Block);