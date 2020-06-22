import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import getFormattedImageSrc from '../helpers/getFormattedImageSrc';
import howManyElemsFitInBlock from '../helpers/howManyElemsFitInBlock';
import Modal from './Modal';

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

const GalleryItem = styled.li`
    ${props => props.styles}
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;

const Img = styled.img`
    border-radius: 8px;
`;

const LastItemWrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0.51, 0.51, 0.51, 0.5);
    border-radius: 8px;
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
    const imgRef = useRef();
    const [galleryDimensions, setGalleryDimensions] = useState(null);
    const [imgDimensions, setImgDimensions] = useState(null);
    
    useEffect(() => {
        setGalleryDimensions(galleryRef.current.offsetWidth);
        //setImgDimensions(imgRef.current.offsetWidth);
        console.log(galleryRef.current);
    }, [])
    
    const openImage = ({ target }) => {
        props.selectImage(target.src);
    }

    const formattedSrcs = props.images.map((imgUrl) => getFormattedImageSrc(imgUrl, props.styles.galleryElm));
    
    return (
        <GalleryContainer styles={props.styles.galleryContainer} ref={galleryRef} >
            <ul>
                {
                    formattedSrcs.slice(0, howManyElemsFitInBlock(galleryDimensions, props.styles.galleryElm.width)).map((imgUrl, ind, array) => (
                        <GalleryItem key={imgUrl} onClick={(e) => openImage(e)} styles={props.styles.galleryElm}>
                                <Img src={imgUrl} ref={imgRef} />
                                {
                                    ind === array.length - 1 &&
                                    (
                                        <LastItemWrapper />
                                    )
                                }
                        </GalleryItem>
                    ))
                }
            </ul>
            
            {
                props.imgInModalSrc
                && (
                    <Modal>
                        <div>
                            <img src={props.imgInModalSrc} />
                        </div>
                    </Modal>
                )
            }
            
        </GalleryContainer>
    );
}

export default connect(mapStateToProps, actionCreators)(Gallery);