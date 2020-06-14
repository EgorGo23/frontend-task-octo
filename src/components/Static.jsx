import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import highlightWords from '../helpers/highlightWords';

const StaticContainer = styled.section`
    font-family: ${(props) =>
        (props.theme.fonts)
        || 'sans-serif'
    };
    padding: 0 61px 0 60px;
    color: ${props => props.theme.colors.black};
`;

const Static = ({ children }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [data, setData] = useState({
        'Egor': '24',
    });

    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);

            try {
                const response = await fetch('https://test.octweb.ru/api/pages/index/');
                const body = await response.json();
                const block = body.static_blocks[0];
                
                setTitle(block.title);
                setContent(highlightWords(block.content, ['SWOT', 'VIP']));   
            } catch (error) {
                setIsError(true);
            }

            setIsLoading(false);
        }

        fetchData();
    }, []);
    
    return (
        <StaticContainer {...data}>{children}</StaticContainer>
    );
};

export default Static;