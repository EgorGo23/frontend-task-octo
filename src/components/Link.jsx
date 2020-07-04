import React, { useEffect, useState } from 'react';
import useClippy from 'use-clippy';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import variables from '../variables';

const CopyBtn = styled.button`
    font-family: ${(props) =>
        (props.theme.fonts)
        || 'sans-serif'
    };
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 9px 12px 10px 16px;
    outline: none;
    border: none;
    text-decoration: none;
    background: #FFF2C3;
    border-radius: 8px;
    cursor: pointer;
    ${(props) => props.styles || ''};
    
    & > span {
        font-size: ${(props) => props.theme.fontSizes.sm};
        font-weight: ${(props) => props.theme.fontWeights.bold};
        line-height: 160%;
        color: #333333;

        @media (max-width: 400px) {
            width: 264px;
            height: 58px;
            word-break: break-all;
            text-align: left;
        }
    }

    
`;

const mapStateToProps = state => {
    const props = {
        
    }
    return props;
};

const actionCreators = {
    
}

const Link = (props) => {
    const [clipboard, setClipboard] = useClippy();
    const [isLink, setIsLink] = useState(false);

    const copyToClipBoard = () => {
        setClipboard(variables.link);
        setIsLink(true);

        const timerId = setTimeout(
            () => setIsLink(false),
            2000
        );
    }
    
    return (
        <CopyBtn onClick={copyToClipBoard} styles={props.styles}>
            {
                isLink  ?
                (
                    <span>Скопировано в буфер!</span>
                )
                : 
                (   
                    <>
                        <span link='true' style={{'textDecorationLine': 'underline'}}>{props.resource}</span>
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.1855 25H5.85938C3.70541 25 1.95312 23.2477 1.95312 21.0938V7.86133C1.95312 5.70736 3.70541 3.95508 5.85938 3.95508H15.1855C17.3395 3.95508 19.0918 5.70736 19.0918 7.86133V21.0938C19.0918 23.2477 17.3395 25 15.1855 25ZM5.85938 5.9082C4.78249 5.9082 3.90625 6.78444 3.90625 7.86133V21.0938C3.90625 22.1706 4.78249 23.0469 5.85938 23.0469H15.1855C16.2624 23.0469 17.1387 22.1706 17.1387 21.0938V7.86133C17.1387 6.78444 16.2624 5.9082 15.1855 5.9082H5.85938ZM22.998 18.6523V3.90625C22.998 1.75228 21.2458 0 19.0918 0H8.25195C7.71255 0 7.27539 0.437164 7.27539 0.976562C7.27539 1.51596 7.71255 1.95312 8.25195 1.95312H19.0918C20.1687 1.95312 21.0449 2.82936 21.0449 3.90625V18.6523C21.0449 19.1917 21.4821 19.6289 22.0215 19.6289C22.5609 19.6289 22.998 19.1917 22.998 18.6523Z" fill="#333333"/>
                        </svg>
                    </>
                )
            }
        </CopyBtn>
    );
};

export default connect(mapStateToProps, actionCreators)(Link);