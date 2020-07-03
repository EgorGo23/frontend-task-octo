import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import variables from '../../variables';

const mapStateToProps = state => {
    const props = {
        copyText: state.copyText,
    }
    return props;
};

const actionCreators = {
    addCopiedText: actions.addCopiedText,
}


const FooterContainer = styled.footer`
    font-family: ${(props) =>
        (props.theme.fonts)
        || 'sans-serif'
    };
    width: 100%;
    height: 237px;
    padding: 50px 61px 36px 61px;
    display: flex;
    flex-flow: column;
    background: ${props => props.theme.colors.light_gray};
    position: relative;
`;

const TopLine = styled.div`
    position: absolute;
    top: 0;
    left: 60px;
    width: 1320px;
    border-bottom: 1px solid ${props => props.theme.colors.gray};
`;

const Contacts = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`;

const AddressContainer = styled.div`
    display: flex;
    align-items: center;

    & > div:nth-of-type(1) {
        margin-right: 20px;
    }
`;

const AddressBlock = styled.div`
    display: flex;
    flex-flow: column;
    color: ${props => props.theme.colors.black};

    & > h4 {
        ${props => props.theme.heading_styles.common_properties}
        ${props => props.theme.heading_styles.h4}
        width: 427px;
        height: 42px;
        margin-bottom: 9px;
    }

    & > p {
        font-weight: ${props => props.theme.fontWeights.normal};
        font-size: ${props => props.theme.fontSizes.md};
        line-height: 160%;
        width: 427px;
        height: 32px;
    }
`;

const Button = styled.button`
    font-weight: ${props => props.theme.fontWeights.bold};
    font-size: ${props => props.theme.fontSizes.sm};
    width: 205px;
    height: 50px; 
    cursor: pointer;
    line-height: 160%;
    text-align: center;
    color: ${props => props.theme.colors.blue};
    border: 2px solid ${props => props.theme.colors.blue};
    border-radius: 8px;
    background: ${props => props.theme.colors.white};
    transition: all 0.4s;

    &:hover {
        color: ${props => props.theme.colors.white};
        background: ${props => props.theme.colors.blue};
    }
`;

const NavPanel = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 33px;
`;

const Nav = styled.nav`
    & > ul {
        width: 486px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        list-style-type: none;
        font-weight: ${props => props.theme.fontWeights.bold};
        font-size: ${props => props.theme.fontSizes.md};
        color: ${props => props.theme.colors.blue};
        padding: 0;
        margin: 0;
        

        & > li {
            height: 32px; 
            cursor: pointer;
            transition: all 0.4s;

            &:hover {
                color: ${props => props.theme.colors.hoverBlue};
            }
        }
    }
`;

const Сopyright = styled.div`
    width: 216px;
    height: 24px;
    color: ${props => props.theme.colors.black};
    font-weight: ${props => props.theme.fontWeights.normal};
    font-size: ${props => props.theme.fontSizes.xs};
    line-height: 150%;
`;

const BottomLine = styled.div`
    position: absolute;
    bottom: 0;
    left: 60px;
    width: 1320px;
    border-bottom: 3px solid ${props => props.theme.colors.blue};
`;

const Footer = (props) => {
    
    
    return (
        <FooterContainer>
            <TopLine />
            <Contacts>
                <AddressContainer>
                    <AddressBlock>
                        <h4>Санкт-Петербург</h4>
                        <p>Большой Проспект П. С., 18, офис 22</p>
                    </AddressBlock>
                    <AddressBlock>
                        <h4>mail@octoberweb.ru</h4>
                        <p>+7 (981) 131-64-98</p>
                    </AddressBlock>
                </AddressContainer>
                <Button>
                    Написать нам
                </Button>
            </Contacts>
            <NavPanel>
                <Nav>
                    <ul>
                        <li>Текстовые блоки</li>
                        <li>Галерея</li>
                        <li>Форма</li>
                    </ul>
                </Nav>
                <Сopyright>
                    <span>&copy; 2009-2020 OctoberWeb</span>
                </Сopyright>
            </NavPanel>
            <BottomLine />
        </FooterContainer>
    );
};

export default connect(mapStateToProps, actionCreators)(Footer);