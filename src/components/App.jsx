import React from 'react';
import styled from 'styled-components';
import Theme from './Theme';
import Header from './Header';
import Description from './Description';
import Links from './Links';
import Static from './Static';

const Container = styled.div`
    width: 1440px;
    background-color: #fff;
    margin: 0 auto;
`;

const App = () => {
    return (
        <Theme>
            <Container>
                {/* <Header /> */}
                {/* <Description /> */}
                {/* <Links /> */}
                <Static />
            </Container>
        </Theme>
    );
};

export default App;