import React, { useRef, useEffect, useState, useLayoutEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import getFormattedImageSrcs from '../helpers/getFormattedImageSrcs';
import howManyElemsFitInBlock from '../helpers/howManyElemsFitInBlock';

const GalleryContainer = styled.div`
    ${(props) => props.styles || ''};

    ul {
        width: 100%; 
        display: flex;
        align-items: center;
        justify-content: space-between;
        list-style: none;
        padding: 0;
        margin: 0;
    }
`;

const Img = styled.img`
    ${props => props.styles || ''}
    border-radius: 8px;
    
`;

const Modal = styled.div`
    position: fixed; /* фиксированное положение */
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0,0,0,0.5); /* цвет фона */
    z-index: 1050;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;

    & img {
        width: 50%;
        height: 55%; 
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 8px;
    }
`;

const RestPhoto = styled.button`

`;

const mapStateToProps = state => {
    const props = {
        imgInModalSrc: state.imgInModalSrc,
    }
    return props;
};

const actionCreators = {
    selectImage: actions.selectImage,
}

const Gallery = (props) => {
    const galleryRef = useRef();
    const [galleryDimensions, setDimensions] = useState(null);
    
    useEffect(() => {
        setDimensions(galleryRef.current.offsetWidth);
    }, [])

    const openImage = ({ target }) => {
        props.selectImage(target.src);
    }

    const formattedSrcs = props.images.map((imgUrl) => {
        const imgName = imgUrl.match(/\d.*/)[0];
        const template = 'https://test.octweb.ru/api/crop/media/uploads/gallery/gallery/';

        return template + `${imgName}` + '?geometry=' + `${parseInt(props.styles.imgElem.width, 10)}x${parseInt(props.styles.imgElem.height, 10)}`
    });
    
    
    return (
        <GalleryContainer styles={props.styles.galleryContainer} ref={galleryRef} >
            <ul>
                {
                    formattedSrcs.slice(0, howManyElemsFitInBlock(galleryDimensions,props.styles.imgElem.width)).map((imgUrl) => (
                        <li key={imgUrl} onClick={(e) => openImage(e)}>
                            <Img src={imgUrl} styles={props.styles.imgElem} />
                        </li>
                    ))
                }
            </ul>
            
            {
                props.imgInModalSrc
                && (
                    <Modal>
                        <img src={props.imgInModalSrc} />
                    </Modal>
                )
            }
            
        </GalleryContainer>
    );
}

export default connect(mapStateToProps, actionCreators)(Gallery);