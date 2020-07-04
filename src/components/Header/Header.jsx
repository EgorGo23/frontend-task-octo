import React, { useEffect, useRef, useState } from 'react';
import styled from "styled-components";
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import { Link } from "react-scroll";
import variables from '../../variables';

const HeaderContainer = styled.header`
    width: 100%;
    padding: 0 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: ${props => props.theme.shadow};

    @media (max-width: 400px) {
        padding: 30px 22px;
        box-shadow: none;
    }
`;

const Logo = styled.a`
    position: relative;
    width: 170px;
    height: 24px;
    display: flex;
    align-items: flex-end;
    text-decoration: none;
    outline: none;
    border: none;

    & svg:last-of-type {
        position: absolute;
        top: 0;
        left: 9px;
    }

    &:hover {
        & svg:first-of-type {
            & path {
                fill: ${props => props.theme.colors.blue};
            }
        }
        & svg:last-of-type {
            & rect {
                fill: ${props => props.theme.colors.black};
            }
        }
    }
`;

const List = styled.ul`
    width: 980px;
    height: 32px;
    display: flex;
    align-items: center;
    position: relative;
`;

const Li = styled.li`
    font-family: ${props => 
        (props.theme.fonts) 
        || 'sans-serif'
    };
    font-weight: ${props => props.theme.fontWeights.bold};
    margin-right: 40px;
    font-size: ${props => props.theme.fontSizes.md};
    color: ${props => props.theme.colors.blue};
    line-height: 160%;

    &:last-of-type {
        position: absolute;
        line-height: 22px;
        right: 87px;
        margin: 0;
        font-weight: 600;
        font-size: ${props => props.theme.fontSizes.sm};
        
        & a {
            display: flex;
            align-items: center;
            color: ${props => props.theme.colors.blue};
        }
    }


    & a {
        cursor: pointer;
        text-decoration: none;
        outline: none;
        border: none;
        color: ${props => props.theme.colors.blue};

        &:visited {
            color: ${props => props.theme.colors.blue};
        }

        &:hover {
            color: ${props => props.theme.colors.hoverBlue};
        }
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

const Header = ({ windowSize }) => {
    const breakpoint = variables.breakpoints.mobile;

    return (
        <HeaderContainer id='header_block'>
            <Logo href="#">
                <svg width="170" height="21" viewBox="0 0 170 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.5098 10.8095C15.5098 9.10386 14.9821 7.65221 13.9266 6.4546C12.8712 5.25699 11.5694 4.65818 10.0214 4.65818C8.49099 4.65818 7.19805 5.25699 6.14258 6.4546C5.08712 7.65221 4.55939 9.10386 4.55939 10.8095C4.55939 12.4971 5.08712 13.9397 6.14258 15.1373C7.19805 16.3167 8.49099 16.9065 10.0214 16.9065C11.5694 16.9065 12.8712 16.3167 13.9266 15.1373C14.9821 13.9397 15.5098 12.4971 15.5098 10.8095ZM16.9083 17.8047C15.0437 19.6737 12.748 20.6082 10.0214 20.6082C7.2948 20.6082 4.99916 19.6737 3.13451 17.8047C1.26985 15.9175 0.337524 13.5767 0.337524 10.7823C0.337524 7.9879 1.26985 5.65619 3.13451 3.7872C4.99916 1.90006 7.2948 0.956485 10.0214 0.956485C12.748 0.956485 15.0437 1.90006 16.9083 3.7872C18.773 5.65619 19.7053 7.9879 19.7053 10.7823C19.7053 13.5767 18.773 15.9175 16.9083 17.8047Z" fill="#333333"/>
                    <path d="M29.6048 17.0153C30.9242 17.0153 32.1116 16.3349 33.167 14.974L35.5154 17.6958C33.686 19.6555 31.707 20.6354 29.5784 20.6354C27.4499 20.6354 25.6468 19.9458 24.1692 18.5668C22.7091 17.1696 21.9791 15.355 21.9791 13.1231C21.9791 10.8731 22.7179 9.04942 24.1956 7.65221C25.6908 6.23685 27.4587 5.52917 29.4993 5.52917C30.5196 5.52917 31.5487 5.74692 32.5865 6.18242C33.642 6.61791 34.5655 7.26208 35.3571 8.11492L33.299 10.8912C32.8416 10.3287 32.2787 9.89319 31.6102 9.58471C30.9593 9.27624 30.3085 9.122 29.6576 9.122C28.6197 9.122 27.7226 9.47584 26.9662 10.1835C26.2273 10.8731 25.8579 11.8438 25.8579 13.0959C25.8579 14.3298 26.2273 15.2915 26.9662 15.981C27.7226 16.6706 28.6021 17.0153 29.6048 17.0153Z" fill="#333333"/>
                    <path d="M42.8781 8.71373V15.2734C42.8781 15.8359 43.0189 16.2804 43.3003 16.6071C43.5818 16.9155 43.916 17.0698 44.303 17.0698C45.0418 17.0698 45.6663 16.725 46.1765 16.0355L47.6541 18.8934C46.4227 20.0547 45.121 20.6354 43.7489 20.6354C42.3944 20.6354 41.2422 20.1727 40.2922 19.2472C39.3599 18.3218 38.8938 17.0607 38.8938 15.4639V8.71373H37.2314V5.77414H38.8938V1.39198H42.8781V5.77414H46.3084V8.71373H42.8781Z" fill="#333333"/>
                    <path d="M52.7882 13.0959C52.7882 14.2935 53.1136 15.2734 53.7645 16.0355C54.4329 16.7794 55.2773 17.1514 56.2976 17.1514C57.3355 17.1514 58.1798 16.7794 58.8307 16.0355C59.4992 15.2734 59.8334 14.2935 59.8334 13.0959C59.8334 11.8983 59.4992 10.9184 58.8307 10.1563C58.1798 9.39418 57.3355 9.01313 56.2976 9.01313C55.2773 9.01313 54.4329 9.39418 53.7645 10.1563C53.1136 10.9184 52.7882 11.8983 52.7882 13.0959ZM63.8178 13.0959C63.8178 15.2189 63.1053 17.0063 61.6805 18.4579C60.2556 19.9096 58.4613 20.6354 56.2976 20.6354C54.1515 20.6354 52.366 19.9096 50.9411 18.4579C49.5162 17.0063 48.8038 15.2189 48.8038 13.0959C48.8038 10.9729 49.5162 9.18551 50.9411 7.73386C52.366 6.26407 54.1515 5.52917 56.2976 5.52917C58.4613 5.52917 60.2556 6.26407 61.6805 7.73386C63.1053 9.18551 63.8178 10.9729 63.8178 13.0959Z" fill="#333333"/>
                    <path d="M74.9375 5.52917C76.6614 5.52917 78.1654 6.22778 79.4496 7.62499C80.7337 9.00406 81.3758 10.7823 81.3758 12.9598C81.3758 15.1373 80.7161 16.9609 79.3968 18.4307C78.0775 19.9005 76.5735 20.6354 74.8847 20.6354C73.2136 20.6354 71.8239 19.9186 70.7156 18.4851V20.4176H66.7576V0.221588H70.7156V7.40724C71.8063 6.1552 73.2135 5.52917 74.9375 5.52917ZM70.6628 13.1231C70.6628 14.3026 70.9795 15.2734 71.6128 16.0355C72.2636 16.7794 73.0464 17.1514 73.9612 17.1514C74.8759 17.1514 75.6763 16.7794 76.3624 16.0355C77.0484 15.2734 77.3914 14.3026 77.3914 13.1231C77.3914 11.9436 77.0572 10.9547 76.3887 10.1563C75.7203 9.35789 74.9199 8.95869 73.9876 8.95869C73.0552 8.95869 72.2636 9.35789 71.6128 10.1563C70.9795 10.9366 70.6628 11.9255 70.6628 13.1231Z" fill="#333333"/>
                    <path d="M96.6277 18.2946C95.0269 19.8551 93.1447 20.6354 90.981 20.6354C88.8348 20.6354 87.0582 19.9549 85.6509 18.594C84.2436 17.2149 83.5399 15.3732 83.5399 13.0687C83.5399 10.7642 84.2524 8.93147 85.6773 7.57055C87.1197 6.20963 88.8173 5.52917 90.7699 5.52917C92.7225 5.52917 94.376 6.13705 95.7306 7.35281C97.1027 8.56856 97.7887 10.238 97.7887 12.361V14.5385H87.4452C87.5683 15.3369 87.9729 15.9901 88.6589 16.4982C89.345 17.0063 90.119 17.2603 90.981 17.2603C92.3707 17.2603 93.5141 16.7794 94.4112 15.8177L96.6277 18.2946ZM93.7779 11.6261C93.69 10.7551 93.3734 10.0837 92.828 9.61193C92.2827 9.14015 91.6142 8.90425 90.8226 8.90425C90.0486 8.90425 89.3362 9.14922 88.6853 9.63915C88.0345 10.1291 87.6562 10.7914 87.5507 11.6261H93.7779Z" fill="#333333"/>
                    <path d="M108.11 9.36697C106.932 9.36697 106.052 9.80246 105.472 10.6735C104.891 11.5263 104.601 12.6604 104.601 14.0757V20.4176H100.643V5.77414H104.601V7.70665C105.111 7.10784 105.744 6.59976 106.501 6.18242C107.275 5.76507 108.057 5.54732 108.849 5.52917L108.875 9.36697H108.11Z" fill="#333333"/>
                    <path d="M117.639 12.3338L120.911 1.39198H125.212L128.458 12.3338L132.126 1.39198H136.585L130.147 20.4176H127.086L123.049 7.1895L119.038 20.4176H115.977L109.539 1.39198H113.998L117.639 12.3338Z" fill="#333333"/>
                    <path d="M150.664 18.2946C149.063 19.8551 147.181 20.6354 145.017 20.6354C142.871 20.6354 141.094 19.9549 139.687 18.594C138.279 17.2149 137.576 15.3732 137.576 13.0687C137.576 10.7642 138.288 8.93147 139.713 7.57055C141.156 6.20963 142.853 5.52917 144.806 5.52917C146.758 5.52917 148.412 6.13705 149.766 7.35281C151.139 8.56856 151.825 10.238 151.825 12.361V14.5385H141.481C141.604 15.3369 142.009 15.9901 142.695 16.4982C143.381 17.0063 144.155 17.2603 145.017 17.2603C146.407 17.2603 147.55 16.7794 148.447 15.8177L150.664 18.2946ZM147.814 11.6261C147.726 10.7551 147.409 10.0837 146.864 9.61193C146.319 9.14015 145.65 8.90425 144.859 8.90425C144.085 8.90425 143.372 9.14922 142.721 9.63915C142.07 10.1291 141.692 10.7914 141.587 11.6261H147.814Z" fill="#333333"/>
                    <path d="M162.859 5.52917C164.582 5.52917 166.087 6.22778 167.371 7.62499C168.655 9.00406 169.297 10.7823 169.297 12.9598C169.297 15.1373 168.637 16.9609 167.318 18.4307C165.999 19.9005 164.495 20.6354 162.806 20.6354C161.135 20.6354 159.745 19.9186 158.637 18.4851V20.4176H154.679V0.221588H158.637V7.40724C159.727 6.1552 161.135 5.52917 162.859 5.52917ZM158.584 13.1231C158.584 14.3026 158.901 15.2734 159.534 16.0355C160.185 16.7794 160.968 17.1514 161.882 17.1514C162.797 17.1514 163.597 16.7794 164.283 16.0355C164.969 15.2734 165.313 14.3026 165.313 13.1231C165.313 11.9436 164.978 10.9547 164.31 10.1563C163.641 9.35789 162.841 8.95869 161.909 8.95869C160.976 8.95869 160.185 9.35789 159.534 10.1563C158.901 10.9366 158.584 11.9255 158.584 13.1231Z" fill="#333333"/>
                </svg>
                <svg width="11" height="15" viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="13.5064" height="4.43284" transform="matrix(0.488409 -0.872615 0.859175 0.511681 0.0186768 12.3696)" fill="#00A4F7"/>
                </svg>
            </Logo>
            
            {
                windowSize.width > breakpoint ? (
                    <nav>
                        <List>
                            <Li>
                                <Link 
                                    to='static_block1'
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    Текстовые блоки
                                </Link>
                            </Li>
                            <Li>
                                <Link
                                    to='gallery_block'
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    Галерея
                                </Link>
                            </Li>
                            <Li>
                                <Link
                                    to='form_block'
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <path d="M0 18.3453H18V0.345327H0V18.3453Z" fill="url(#pattern0)"/>
                                        <defs>
                                            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                                <use xlinkHref="#image0" transform="scale(0.015625)"/>
                                            </pattern>
                                            <image id="image0" width="64" height="64" xlinkHref="data:image/png;base64,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"/>
                                        </defs>
                                    </svg>
                                    Форма с приветами
                                </Link>
                            </Li>
                        </List>
                    </nav>
                ) : (
                    null
                )
            }

            
    
        </HeaderContainer>
    )
}

export default connect(mapStateToProps, actionCreators)(Header);