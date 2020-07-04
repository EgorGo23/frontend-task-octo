import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import Gallery from '../Gallery';
import Link from '../Link';

const GalleryContainer = styled.section`
    width: 100%;
    height: 543px;
    padding: 0 61px 0 60px;
    margin-top: 90px;

    p {
        font-family: ${(props) =>
            (props.theme.fonts)
            || 'sans-serif'
        };
        font-size: ${(props) => props.theme.fontSizes.md};
        font-weight: ${props => props.theme.fontWeights.normal};
        color: ${props => props.theme.colors.black};
        line-height: 160%;

        &:nth-of-type(2) {
            font-size: ${(props) => props.theme.fontSizes.sm};
        }

        &:nth-of-type(3) {
            font-size: ${(props) => props.theme.fontSizes.xs};
            line-height: 150%;
        }
    }
`;

const Title = styled.h2`
    ${props => props.theme.heading_styles.common_properties}
    ${props => props.theme.heading_styles.h2}
    margin-bottom: 19px;
`;

const mapStateToProps = state => {
    const props = {
        dataFetch: state.dataFetch,
    }
    return props;
};

const actionCreators = {

}

const GalleryBlock = ({dataFetch}) => {
    const [galleryItemSrc, setGalleryItemSrc] = useState([]);
    
    useEffect(() => {
        if (dataFetch.data) {
            setGalleryItemSrc(dataFetch.data.gallery.map((current) => current.image));
        }
    }, [dataFetch.data]);
    
    return (
        galleryItemSrc.length !== 0
        && (
            <GalleryContainer id='gallery_block'>
                <Title>Галерея с изображениями</Title>
                <p>
                    Все просто. Выводится столько фотографий сколько влезит на экран. Те что не влезли рассчитываются и выводится их количество над последней фотографией. По клику на эту подпись так же открывается увеличенное версия того изображения, над которым выводится подпись.
                </p>
                <Gallery images={galleryItemSrc} styles={{galleryContainer: {width: '100%', margin: '26px 0 32px 0'}, galleryElm: {width: '202px', height: '130px'}, img: {}}} />
                <p>
                    Для того, чтобы на странице мы выводили изображение фактического нужного размера, а не просто уменьшали заведомо большее изображения, есть такая возможность:
                </p>
                <Link styles={{width: '1097px', height: '44px', margin: '13px 0 19px 0'}} resource={'https://test.octweb.ru/api/crop/media/uploads/gallery/gallery/6.jpeg?geometry=420x240&crop=center'} />
                <p>
                    В параметре geometry можно задать размеры для изображения, а в crop выбрать тип кадрирования (center, top, bottom) или вообще его не указывать и тогда изображение пропорционально будет «вписано» в указнные размеры.
                </p>
            </GalleryContainer>
        )
    );
};

export default connect(mapStateToProps, actionCreators)(GalleryBlock);