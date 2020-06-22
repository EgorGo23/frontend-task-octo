import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import Title from '../Title';
import Gallery from '../Gallery';
import Link from '../Link';

const GalleryContainer = styled.section`
    width: 100%;
    height: 543px;
    border: 1px solid black;
    padding: 0 61px 0 60px;
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
            <GalleryContainer>
                <Title tag={'h2'} text={'Галерея с изображениями'} style={{'margin-bottom': '19px'}} />
                <p>
                    Все просто. Выводится столько фотографий сколько влезит на экран. Те что не влезли рассчитываются и выводится их количество над последней фотографией. По клику на эту подпись так же открывается увеличенное версия того изображения, над которым выводится подпись.
                </p>
                <Gallery images={galleryItemSrc} styles={{galleryContainer: {width: '100%'}, galleryElm: {width: '202px', height: '130px'}}} />
                <p>
                    Для того, чтобы на странице мы выводили изображение фактического нужного размера, а не просто уменьшали заведомо большее изображения, есть такая возможность:
                </p>
                <Link styles={{width: '1097px', height: '44px'}} resource={'https://test.octweb.ru/api/crop/media/uploads/gallery/gallery/6.jpeg?geometry=420x240&crop=center'} />
                <p>
                    В параметре geometry можно задать размеры для изображения, а в crop выбрать тип кадрирования (center, top, bottom) или вообще его не указывать и тогда изображение пропорционально будет «вписано» в указнные размеры.
                </p>
            </GalleryContainer>
        )
    );
};

export default connect(mapStateToProps, actionCreators)(GalleryBlock);