import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { withDataFetching } from './hoc';

const Gallery = ({images, sizes}) => {
    const GalleryContainer = styled.div`
        border: 1px solid black;

        ul {
            ${sizes}
            display: flex;
            justify-content: space-between;
            align-items: center;
            list-style: none;
            padding: 0;
            margin: 0;

            & > li {
                
            }
        }
    `;
    const Img = styled.img`
        width: 314px;
        height: 170px;
        border-radius: 8px;
    `;

    /*
        Как сделать margin галлерее?
    */
    return (
        <GalleryContainer >
            <ul>
                {
                    images.map((imgUrl) => (
                        <li key={imgUrl}>
                            <Img src={imgUrl} />
                        </li>
                    ))
                }
            </ul>
        </GalleryContainer>
    );
}

export default Gallery;