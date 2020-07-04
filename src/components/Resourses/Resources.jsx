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

        @media (max-width: 400px) {
            flex-flow: column;
            justify-content: flex-start;
        }
    }
    margin-top: 40px;

    @media (max-width: 400px) {
        margin-top: 0;
        padding: 0 20px;
        height: auto;
        display: flex;
        flex-flow: column;
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

    @media (max-width: 400px) {
        height: 44px;
        width: 100%;
        letter-spacing: 0.2em;
        word-break: break-all;
    }
`;

const Aside = styled.aside`
    width: 650px;
    font-size: ${(props) => props.theme.fontSizes.sm};
    font-weight: ${props => props.theme.fontWeights.normal};
    line-height: 150%;
    color: #333333;
    position: relative;
    top: 5px;

    @media (max-width: 400px) {
        font-size: ${(props) => props.theme.fontSizes.xs};
        width: 330px;
        height: 165px;
        top: 22px;
    }
`;

const mapStateToProps = state => {
    const props = {
        windowSize: state.windowSize,
    }
    return props;
};

const actionCreators = {

}

const Resources = ({ windowSize }) => {
    const breakpoint = variables.breakpoints.mobile;

    return (
        <ResourcesContainer>
            <Title>текстовые блоки и изображения для галереи</Title>
            <div>
                {
                    windowSize.width > breakpoint ? (
                        <Link styles={{width: '622px', height: '44px'}} resource={'https://test.octweb.ru/api/pages/index/'} />
                    ) : (
                        <Link styles={{width: '335px', height: '77px'}} resource={'https://test.octweb.ru/api/pages/index/'} />
                    )
                }
                
                <Aside>
                    <p>
                        Будет круто, если по клику на желтый блок, соответствующая ссылка сразу скопируется в буфер обмена и пользователь получит какое-то максимально естественное уведомление что у него теперь в буфере эта ссылка.
                    </p>
                </Aside>
            </div>
        </ResourcesContainer>
    )
}

export default connect(mapStateToProps, actionCreators)(Resources);