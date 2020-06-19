import React, { useRef } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

const GalleryContainer = styled.div`
    ${(props) => props.sizes}
    ul {
        width: '100%'; 
        height: '';
        display: flex;
        justify-content: space-between;
        align-items: center;
        list-style: none;
        padding: 0;
        margin: 0;
    }
`;

const Img = styled.img`
    width: 314px;
    height: 170px;
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

const mapStateToProps = state => {
    const props = {
        imgSrc: state.imgSrc,
    }
    return props;
};

const actionCreators = {
    selectImage: actions.selectImage,
}

const Gallery = (props) => {
    const galleryRef = useRef(null);

    const openImage = ({ target }) => {
        props.selectImage(target.src);
    }

    return (
        <GalleryContainer sizes={props.sizes} ref={galleryRef} >
            <ul>
                {
                    props.images.map((imgUrl) => (
                        <li key={imgUrl} onClick={(e) => openImage(e)}>
                            <Img src={imgUrl} />
                        </li>
                    ))
                }
            </ul>
            
            {
                props.imgSrc
                && (
                    <Modal>
                        <img src={props.imgSrc} />
                    </Modal>
                )
            }
            
        </GalleryContainer>
    );
}

export default connect(mapStateToProps, actionCreators)(Gallery);