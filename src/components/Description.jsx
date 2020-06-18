import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import highlightWords from '../helpers/highlightWords';
import variables from '../variables';
import { withDataFetching } from './hoc';
import Title from './Title';


const DescriptionContainer = styled.section`
    position: relative;
    width: 1320px;
    height: 323px;
    margin: 0 auto;
    font-family: ${(props) =>
        (props.theme.fonts)
        || 'sans-serif'
    };
    color: ${props => props.theme.colors.black};
`;


const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    & > div {
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        align-items: flex-start;
        line-height: 160%;
        width: 985px;
        height: 228px;

        &  p {
            font-size: ${(props) => props.theme.fontSizes.md};
            font-weight: ${props => props.theme.fontWeights.normal};
        }
    }
`;

const Aside = styled.aside`
    color: ${props => props.theme.colors.gray};
    width: 315px;
    height: 176px;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 160%;
    margin-top: 4px;
`;


const Description = ({dataFetching}) => {
    const {data, isLoading, isError} = dataFetching;
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    
    useEffect(() => {
        if (data) {
            setTitle(data.name);
            setContent(data.content);
        }
    }, [data]);

    return (
        <>
            {
                !isLoading && !isError && data
                && (
                    <DescriptionContainer>
                        <Title text={title} tag={'h1'}  style={{width: '100%', height: '65px', 'margin-bottom': '30px'}} />
                        <Content>
                            <div dangerouslySetInnerHTML={{ __html: `${highlightWords(content, ['HOC', 'API'])}` }} />

                            <Aside>
                                <p>Этот блок с описанием тоже нужно сверстать. Специально использовали разные стили и текстовые блоки, даже если они порой неуместны</p>
                            </Aside>
                        </Content>
                    </DescriptionContainer>
                ) 
            }
            {
                isLoading 
                && (
                    <div>Загрузка...</div>
                )
            }
        </>
    )
}

export default withDataFetching(Description)(variables.link);