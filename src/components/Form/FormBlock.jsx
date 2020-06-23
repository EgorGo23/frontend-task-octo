import React from 'react';
import styled from 'styled-components';
import Title from '../Title';
import Form from '../Form';

const FormBlockContainer = styled.section`
    font-family: ${(props) =>
        (props.theme.fonts)
        || 'sans-serif'
    };
    margin: 0 auto;
    width: 100%;
    height: 777px;
    border: 1px solid black;
    position: relative;
    margin-top: 400px;
    background: ${props => props.theme.colors.light_gray};

    img {
        position: absolute;
        top: -97px;
        left: -146px;
        z-index: 0;
    

    

        

        
    
`;


const FormBlock = () => {
    return (
        <FormBlockContainer>
            <Title text={'Форма с приветами'} tag={'h2'} style={{width: '984px', height: '58px', margin: '49px 0 49px 380px', position: 'relative'}} />
            <img src={'https://s3-alpha-sig.figma.com/img/4a72/9b89/7836fccc116cc687f23809d5e4467ee9?Expires=1593993600&Signature=RgXUmuFHLQZk~qDdLgAASzp98luRnYSkym50Kfu9RiITzo9ElW9JyI39oFWif43UPeZBroYlv9WkAZkdKfX4mTdUAnC03W5UbkE3XjkhgpIqq1TKGNaku-G01a4R1etT5ebqGeHYQPpMtU~KJhAY~oSxDbwJcgrA3C4A9Lk9bDOzP2WQvSpJRrsTP6WRqUnZf~JVxZEUh06FyDBPQGlLxI5T4mxqwBMbtDWftwl~PlnvIbPbsu~5BvkeASYXdalv-WhUOat9bd6uF6fR1KlmNhhbl1Qg1k2TONLmxAZ8uxEIS-vZ-r0niEaudC5HJxv0GsOdNWiaZd1~CXIoIaerzQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'} />
            <Form />
        </FormBlockContainer>
    )
}

export default FormBlock;