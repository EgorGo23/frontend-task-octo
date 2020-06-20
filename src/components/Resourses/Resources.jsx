import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import variables from '../../variables';
import Link from '../Link';


const ResourcesContainer = styled.section`
    font-family: ${(props) =>
        (props.theme.fonts)
        || 'sans-serif'
    };
    padding: 0 60px;
    & > div {
        display: flex;
        justify-content: space-between;
        position: relative;
    }
`;

const Title = styled.p`
    color: ${props => props.theme.colors.black};
    font-size: ${(props) => props.theme.fontSizes.xs};
    font-weight: ${props => props.theme.fontWeights.bold};
    letter-spacing: 0.2em;
    text-transform: uppercase;
    width: 595px;
    height: 22px;
    line-height: 140%;
    margin-bottom: 17px;
`;

const Aside = styled.aside`
    width: 650px;
    font-size: ${(props) => props.theme.fontSizes.sm};
    font-weight: ${props => props.theme.fontWeights.normal};
    line-height: 150%;
    color: #333333;
    position: relative;
    top: 5px;
`;


const Resources = (props) => {
    return (
        <ResourcesContainer>
            <Title>текстовые блоки и изображения для галереи</Title>
            <div>
                <Link styles={{width: '622px', height: '44px'}} resource={'https://test.octweb.ru/api/pages/index/'} />
                <Aside>
                    <p>
                        Будет круто, если по клику на желтый блок, соответствующая ссылка сразу скопируется в буфер обмена и пользователь получит какое-то максимально естественное уведомление что у него теперь в буфере эта ссылка.
                    </p>
                </Aside>
            </div>
        </ResourcesContainer>
    )
}

export default Resources;