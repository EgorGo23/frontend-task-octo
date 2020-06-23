import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import { withDataFetching } from './hoc';
import variables from '../variables';
import Theme from './Theme';
import Header from './Header/Header';
import Description from './Description/Description';
import Resources from './Resourses/Resources';
import Static from './StaticBlocks/Static';
import GalleryBlock from './Gallery/GalleryBlock';
import FormBlock from './Form/FormBlock';

const Container = styled.div`
    width: 1440px;
    background-color: #fff;
    margin: 0 auto;
    position: relative;
`;

const mapStateToProps = state => {
    const props = {
        dataFetch: state.dataFetch,
    }
    return props;
};

const actionCreators = {
    selectImage: actions.selectImage,
    setDataFetch: actions.setDataFetch,
}

const App = (props) => {
    useEffect(() => {
        props.setDataFetch(props.dataFromApi);
    }, [props.dataFromApi]);


    const handleClick = ({ target }) => {
        if (!target.dataset.src) {
            props.selectImage(null);
        }
    }
    
    return (
        <Theme>
            {
                props.dataFromApi.isError
                && (
                    <div 
                        style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}
                    >
                        Ошибка, пожалуйста перезагрузите страницу.
                    </div>
                )
            }
            {
                props.dataFromApi.isLoading 
                && (
                    <div>Загрузка...</div>
                )
            }
            <Container onClick={(e) => handleClick(e)}>
                {/* <Header />
                <Description />
                <Resources />
                <Static />
                <GalleryBlock /> */}
                <FormBlock />
            </Container>
        </Theme>
    );
};

export default withDataFetching(connect(mapStateToProps, actionCreators)(App))('https://test.octweb.ru/api/pages/index/');