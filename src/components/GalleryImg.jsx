import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import isEmpty from '../helpers/isEmpty';

const ImgContainer = styled.img`
    ${props => props.styles}
    border-radius: 8px;
`;

const LastItemWrapper = styled.div`
    position: absolute;
    background: rgba(0.51, 0.51, 0.51, 0.5);
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
        font-size: ${(props) => props.theme.fontSizes.md};
        font-weight: ${props => props.theme.fontWeights.bold};
        line-height: 160%;
        text-align: center;
        color: ${props => props.theme.colors.white};
    }
`;

const GalleryImg = (props) => {
    const imgRef = useRef();
    const [imgDimensions, setImgDimensions] = useState({});

    useEffect(() => {
        setImgDimensions({
            width: imgRef.current.offsetWidth,
            height: imgRef.current.offsetHeight,
        });
    }, [imgRef])
    
    return (
        <>
            <ImgContainer src={props.src} ref={imgRef} data-src={true} styles={props.styles} />
            {
                props.rest && !isEmpty(imgDimensions) &&
                (
                    (
                        <LastItemWrapper style={{width: imgDimensions.width, height: imgDimensions.height}} data-src={props.src}>
                            <span data-src={props.src}>Еще {props.rest} фото</span>
                        </LastItemWrapper>
                    )
                )
            }
        </>      
    )
        
        
    
}

export default GalleryImg;