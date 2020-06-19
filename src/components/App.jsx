import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import { withDataFetching } from './hoc';
import variables from '../variables';
import Theme from './Theme';
import Header from './Header';
import Description from './Description';
import Links from './Links';
import Static from './Static';
import GalleryBlock from './GalleryWithText';

const Container = styled.div`
    width: 1440px;
    background-color: #fff;
    margin: 0 auto;
    position: relative;
`;

const mapStateToProps = state => {
    const props = {
        imgSrc: state.imgSrc,
        getDataFetch: state.getDataFetch,
    }
    return props;
};

const actionCreators = {
    selectImage: actions.selectImage,
}

const App = (props) => {
    console.log(props);
    // useEffect(() => {
    //     props.getDataFetch(dataFetching);
    // }, [props.dataFetching]);

    const handleClick = ({ target }) => {
        if (target.tagName !== 'IMG') {
            props.selectImage(null);
        }
    }

    return (
        <Theme>
            <Container onClick={(e) => handleClick(e)}>
                {/* <Header />
                <Description />
                <Links />
                <Static /> */}
                {/* <GalleryBlock /> */}
            </Container>
        </Theme>
    );
};

export default connect(mapStateToProps, actionCreators)(withDataFetching(App)(variables.link));