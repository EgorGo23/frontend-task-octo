import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from "react-scroll";
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import variables from '../../variables';

const mapStateToProps = state => {
    const props = {
        
    }
    return props;
};

const actionCreators = {
    
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

    @media (max-width: 400px) {
        padding: 39px 20px 46px 20px;
        height: 445px;
    }
`;

const TopLine = styled.div`
    position: absolute;
    top: 0;
    left: 60px;
    width: 1320px;
    border-bottom: 1px solid ${props => props.theme.colors.gray};

    @media (max-width: 400px) {
        left: 20px;
        width: 335px;
    }
`;

const Contacts = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        outline: none;
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

        @media (max-width: 400px) {
            width: 100%;
        }
    }

    @media (max-width: 400px) {
        width: 100%;
        flex-flow: column;
    }
`;

const AddressContainer = styled.div`
    display: flex;
    align-items: center;

    & > div {
        width: 100%;
    }

    & > div:nth-of-type(1) {
        margin-right: 20px;

        @media (max-width: 400px) {
            flex-flow: column;
            margin-right: 0;
            margin-bottom: 24px;
        }
    }

    & > div:nth-of-type(2) {

        & > p {
            @media (max-width: 400px) {
                height: 32px;
                margin-bottom: 24px;
            }
        }
        
    }

    @media (max-width: 400px) {
        width: 100%;
        flex-flow: column;
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

        @media (max-width: 400px) {
            font-size: 20px;
            margin-bottom: 5px;
            width: 100%;
            height: 24px;
        }
    }

    & > p {
        font-weight: ${props => props.theme.fontWeights.normal};
        font-size: ${props => props.theme.fontSizes.md};
        line-height: 160%;
        width: 427px;
        height: 32px;

        @media (max-width: 400px) {
            font-size: 20px;
            margin-bottom: 5px;
            width: 100%;
            height: 64px;
        }
    }
`;

const NavPanel = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 33px;

    @media (max-width: 400px) {
        position: absolute;
        bottom: 46px;
        width: 335px;
        margin: 0;
    }
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
        line-height: 160%;

        & > li {
            height: 32px; 
            cursor: pointer;
            transition: all 0.4s;

            &:hover {
                color: ${props => props.theme.colors.hoverBlue};
            }

            @media (max-width: 400px) {
                &:nth-of-type(1) {
                    width: 188px;
                }

                &:nth-of-type(2), &:nth-of-type(3) {
                    width: 111px;
                }
            }
        }

        @media (max-width: 400px) {
            width: 100%;
            flex-wrap: wrap;
        }
    }

    @media (max-width: 400px) {
        width: 100%;
    }
`;

const Сopyright = styled.div`
    width: 216px;
    height: 24px;
    color: ${props => props.theme.colors.black};
    font-weight: ${props => props.theme.fontWeights.normal};
    font-size: ${props => props.theme.fontSizes.xs};
    line-height: 150%;

    @media (max-width: 400px) {
        position: absolute;
        bottom: 0;
        right: 0;
    }
`;

const BottomLine = styled.div`
    position: absolute;
    bottom: 0;
    left: 60px;
    width: 1320px;
    border-bottom: 3px solid ${props => props.theme.colors.blue};

    @media (max-width: 400px) {
        width: 335px;
        left: 20px;
    }
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
                <Link
                    to='header_block'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className='btn'
                >
                    Написать нам
                </Link>
            </Contacts>
            <NavPanel>
                <Nav>
                    <ul>
                        <li>
                            <Link
                                to='static_block1'
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Текстовые блоки
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='gallery_block'
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Галерея
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='form_block'
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Форма
                            </Link>
                        </li>
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