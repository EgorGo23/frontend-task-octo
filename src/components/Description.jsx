import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import highlightWords from '../helpers/highlightWords';

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

const Title = styled.h1`
    font-size: ${(props) => props.theme.fontSizes.XXXlarge};
    font-weight: 800;
    width: 100%;
    height: 65px;
    margin-bottom: 30px;
    line-height: 120%;
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


const Description = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);

            try {
                const response = await fetch('https://test.octweb.ru/api/pages/index/');
                const body = await response.json();

                setTitle(body.title);
                setContent(highlightWords(body.content, ['HOC', 'API']));
            } catch (error) {
                setIsError(true);
            }

            setIsLoading(false);
        }

        fetchData();
    }, []);

    return (
        <DescriptionContainer>
            <Title>{title}</Title>
            <Content>
                <div dangerouslySetInnerHTML={{ __html: `${content}` }} />

                <Aside>
                    <p>Этот блок с описанием тоже нужно сверстать. Специально использовали разные стили и текстовые блоки, даже если они порой неуместны</p>
                </Aside>
            </Content>

        </DescriptionContainer>
    )
}

export default Description;