import React from 'react';
import styled from 'styled-components';
import variables from '../../variables';
import Form from '../Form';


const FormBlockContainer = styled.section`
    font-family: ${(props) =>
        (props.theme.fonts)
        || 'sans-serif'
    };
    margin: 0 auto;
    width: 100%;
    height: 777px;
    position: relative;
    margin-top: 190px;
    background: ${props => props.theme.colors.light_gray};

    img {
        width: 444px;
        height: 428px;
        position: absolute;
        top: -90px;
        left: -97px;
        z-index: 0;

`;

const Title = styled.h2`
    ${props => props.theme.heading_styles.common_properties}
    ${props => props.theme.heading_styles.h2}
    width: 984px;
    height: 58px;
    margin: 49px 0 49px 283px;
    position: relative;
    z-index: 10;
`;


const FormBlock = () => {
    return (
        <FormBlockContainer>
            <Title>Форма с приветами</Title>
            <img src={variables.formImg} />
            <Form />
        </FormBlockContainer>
    )
}

export default FormBlock;
