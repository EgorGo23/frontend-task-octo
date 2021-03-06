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

        @media (max-width: 400px) {
            width: 355px;
            height: 342px;
            top: -150px;
            left: -20px;
        }
    }

    @media (max-width: 400px) {
        padding: 0 20px;
        height: 1228px;
    }

`;

const Title = styled.h2`
    ${props => props.theme.heading_styles.common_properties}
    ${props => props.theme.heading_styles.h2}
    width: 984px;
    height: 58px;
    margin: 49px 0 49px 283px;
    position: relative;
    z-index: 10;

    @media (max-width: 400px) {
        font-size: 30px;
        width: 100%;
        height: 36px;
        margin: 0;
        top: 158px;
    }
`;


const FormBlock = () => {
    return (
        <FormBlockContainer id='form_block'>
            <Title>Форма с приветами</Title>
            <img src={variables.formImg} />
            <Form />
        </FormBlockContainer>
    )
}

export default FormBlock;
