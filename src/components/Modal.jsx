import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import isEmpty from '../helpers/isEmpty';

const ModalContainer = styled.div`
    position: fixed; 
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0,0,0,0.5);
    z-index: 1050;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    & > div {
        width: 40%;
        height: 60%;
        position: relative;

        & img {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border-radius: 8px;
        }
    }    
`;

const mapStateToProps = state => {
    const props = {
        imgInModalSrc: state.imgInModalSrc,
    }
    return props;
};

const actionCreators = {

}


const Modal = (props) => {
    const wrapperRef = useRef();
    const [wrapperDimensions, setWrapperDimensions] = useState({});
    
    useEffect(() => {
        setWrapperDimensions({
            width: wrapperRef.current.offsetWidth,
            height: wrapperRef.current.offsetHeight,
        });
    }, [])
    
    const transformSrc = (url) => {
        const srcWithoutSize = url.match(/.*geometry=/)[0];

        if (!isEmpty(wrapperDimensions)) {
            return `${srcWithoutSize}${wrapperDimensions.width}x${wrapperDimensions.height}`;
        }
    }
    return (
        <ModalContainer>
            <div ref={wrapperRef}>
                <img src={isEmpty(wrapperDimensions) ? '' : transformSrc(props.imgInModalSrc)} />
            </div>
        </ModalContainer>
    )
}

export default connect(mapStateToProps, actionCreators)(Modal);