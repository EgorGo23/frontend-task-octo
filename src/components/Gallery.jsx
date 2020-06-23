import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import getFormattedImageSrc from '../helpers/getFormattedImageSrc';
import howManyElemsFitInBlock from '../helpers/howManyElemsFitInBlock';
import Modal from './Modal';
import GalleryImg from './GalleryImg';

const GalleryContainer = styled.div`
    ${(props) => props.styles || ''};

    ul {
        font-family: ${(props) =>
            (props.theme.fonts)
            || 'sans-serif'
        };
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
    const [galleryDimensions, setGalleryDimensions] = useState({});

    useEffect(() => {
        setGalleryDimensions({
            width: galleryRef.current.offsetWidth,
            height: galleryRef.current.offsetHeight,
        });
        
    }, [])
    
    const openImage = ({ target }) => {
        props.selectImage(target.src || target.dataset.src);
    }

    const formattedSrcs = props.images.map((imgUrl) => getFormattedImageSrc(imgUrl, props.styles.galleryElm));

    return (
        <GalleryContainer styles={props.styles.galleryContainer} ref={galleryRef} >
            <ul>
                {
                    formattedSrcs.slice(0, howManyElemsFitInBlock(galleryDimensions.width, props.styles.galleryElm.width)).map((imgUrl, ind, array) => (
                        <GalleryItem key={imgUrl} onClick={(e) => openImage(e)} styles={props.styles.galleryElm}>
                            <GalleryImg 
                                src={imgUrl}
                                rest={
                                    (formattedSrcs.length > howManyElemsFitInBlock(galleryDimensions.width, props.styles.galleryElm.width)) &&
                                    (ind === array.length - 1)
                                    && formattedSrcs.length - howManyElemsFitInBlock(galleryDimensions.width, props.styles.galleryElm.width)
                                }
                                styles={props.styles.img}
                            />
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


